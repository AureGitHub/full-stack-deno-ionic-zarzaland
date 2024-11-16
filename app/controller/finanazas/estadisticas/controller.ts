// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes } from "../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../aureDB/client.ts";


const getfinanzas = async () => {
  let sqlSelect = `
  select 
  em,anno - 2000 anno,mes, sum(beneficios) beneficios 
  from 
  (
  select e.abreviatura em,
  date_part('year', fecha) anno,
  date_part('month',  c.fecha) mes, 
  c.beneficios,
  (select cast(count(*) as integer) from finanzas.venta v where v.carteraid= c.id) AS ventas
  from finanzas.cartera c 
  inner join finanzas.empresa e on e.id=c.empresaid
  )b
  where b.ventas > 0
  group by em,anno,mes 
  order by anno,mes desc
    `;
  const finanzasBD = await GenericDB.queryObject(client, sqlSelect);
  let lstfinanzas: any[] = [];
  finanzasBD.rows.forEach(element => {
    element.beneficios = Number(element.beneficios);
    element.fecha = `${element.mes < 10 ? '0' : ''}${element.mes}/${element.anno}`;
    element.tipo = 'finanzas';
    lstfinanzas.push(element);
  });
  return lstfinanzas;
}


const  getFondosyLetrasPorMeses = async () => {
  let sqlSelect = `
select 
e.abreviatura em,
f.fechainicio,
f.fechafin,
date_part('year', f.fechainicio)-2000 anno,
date_part('month',  f.fechainicio) mes,
f.meses ,
f.importe ,
f.beneficios / f.meses  beneficios,
e.id  empresaid
from finanzas.fondo f 
inner join finanzas.empresa e on e.id=f.empresaid
    `;
  const fondosyletras = await GenericDB.queryObject(client, sqlSelect);

  let lstFondosyLetras: any[] = [];

  // let lstFondosActivos: any[] = [];

  fondosyletras.rows.forEach(fondo => {
    for (let i = 0; i < fondo.meses; i++) {
      const em = fondo.em;
      const beneficios = Number(fondo.beneficios);
      let mes = Number(fondo.mes) + i;
      let anno = Number(fondo.anno);

      const tipo = Number(fondo.empresaid) == 9 ? 'letra' : 'fondo';
      if (mes > 12) {
        mes = mes - 12;
        anno++;
      }
      const fecha = `${mes < 10 ? '0' : ''}${mes}/${anno}`;
      lstFondosyLetras.push({ em, fecha, anno, mes, beneficios, tipo });
    }
  });

  return lstFondosyLetras;


}


const getFondoLetrasActivos = async () => {
  let sqlSelect = `
 select 
e.abreviatura ab,
f.fechainicio ,
f.fechafin ,
f.interes,
f.importe 
from finanzas.fondo f 
inner join finanzas.empresa e on e.id=f.empresaid
where f.fechainicio  <= now() and f.fechafin >= now() 
    `;
  const FondoLetrasActivos = await GenericDB.queryObject(client, sqlSelect);
  return FondoLetrasActivos?.rows;
  
}


const get = async (ctx: any) => {

  let lstfinanzas = await getfinanzas();
  let lstFondosyLetras = await getFondosyLetrasPorMeses();
  const lstFondosActivos = await getFondoLetrasActivos();


  let resultWithEmpresa: any[] = [];

  //estaría bien meter la finanzas sin agrupar... no es prioritario
  resultWithEmpresa = resultWithEmpresa.concat(lstfinanzas);
  resultWithEmpresa = resultWithEmpresa.concat(lstFondosyLetras);


  resultWithEmpresa = resultWithEmpresa.sort(ordenaAnnoMes);

  let resultWithoutEmpresa: any[] = [];

  resultWithEmpresa.forEach(item => {

    const beneficiosFondo = item.tipo == 'fondo' ? item.beneficios : 0;
    const beneficiosLetra = item.tipo == 'letra' ? item.beneficios : 0;
    const beneficiosfinanzas = item.tipo == 'finanzas' ? item.beneficios : 0;

    let itemGroup = resultWithoutEmpresa.find(a => a.anno == item.anno && a.mes == item.mes);
    if (itemGroup) {
      itemGroup.beneficios += item.beneficios;
      itemGroup.fondo += beneficiosFondo;      
      itemGroup.finanzas += beneficiosfinanzas;
      itemGroup.letra += beneficiosLetra;
    }
    else {
      ;
      resultWithoutEmpresa.push({
        fecha: `${item.mes < 10 ? '0' + item.mes : item.mes}/${item.anno}`,
        anno: item.anno,
        mes: item.mes,
        beneficios: item.beneficios % 1 != 0 ? item.beneficios : item.beneficios,
        fondo: beneficiosFondo % 1 != 0 ? beneficiosFondo : beneficiosFondo,
        finanzas: beneficiosfinanzas % 1 != 0 ? beneficiosfinanzas : beneficiosfinanzas,
        letra: beneficiosLetra % 1 != 0 ? beneficiosLetra : beneficiosLetra,
      });
    }
  });

  resultWithoutEmpresa = resultWithoutEmpresa.sort(ordenaAnnoMes);


  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: {
      resultWithEmpresa,
      resultWithEmpresacount: resultWithEmpresa.length,
      resultWithoutEmpresa,
      resultWithoutEmpresacount: resultWithoutEmpresa.length,
      resultFondosActivos: lstFondosActivos,
      resultFondosActivoscount: lstFondosActivos.length,



    },
  };

};


const ordenaAnnoMes = (a, b) => {
  return b.anno - a.anno || b.mes - a.mes
}


export default {
  get
};
