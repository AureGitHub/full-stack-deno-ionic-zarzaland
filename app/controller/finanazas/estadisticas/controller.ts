// deno-lint-ignore-file no-explicit-any
import { GenericDB, StatusCodes } from "../../../../dep/deps.ts";
import { client } from "../../../aureDB/client.ts";




const getDetalle = async (ctx: any) => {

  const anno = Number(ctx?.params?.anno);
  const mes = Number(ctx?.params?.mes);

  const sqlSelect = `
  select 
em, 
anno, 
mes, 
(case when mes <10 then   concat('0', mes,'/',anno)  else concat(mes,'/',anno) end) fecha, 
 round(importe,2) importe 
from 
( 
select  
e.abreviatura em , 
fm.anno , 
fm.mes , 
fm.importe importe 
from finanzas.fondoxmes fm  
inner join finanzas.fondo f on f.id = fm.fondoid 
inner join finanzas.empresa e on f.empresaid =e.id  
where empresaid!=9 
UNION 
select  
concat(e.abreviatura,'(',f.interes,')' )em, 
fm.anno , 
fm.mes , 
fm.importe importe 
from finanzas.fondoxmes fm  
inner join finanzas.fondo f on f.id = fm.fondoid 
inner join finanzas.empresa e on f.empresaid =e.id  
where empresaid=9 
UNION 
select em,anno,mes, importe 
from( 
  select  
  e.abreviatura em , 
  date_part('year', (select max(fecha)  from finanzas.venta v where v.carteraid= c.id))-2000 anno , 
  date_part('month', (select max(fecha)  from finanzas.venta v where v.carteraid= c.id)) mes, 
  c.beneficios as importe, 
  c.acciones,
  (select cast(count(*) as integer) from finanzas.venta v where v.carteraid= c.id) AS ventas 
  from finanzas.cartera c 
  inner join finanzas.empresa e on c.empresaid =e.id  
  )b  
  where b.ventas > 0 and b.acciones=0)T 
  where anno=${anno} and mes=${mes} 
  order by em 

  `;
  const resumenDB = await GenericDB.queryObject(client, sqlSelect);  
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: {
      resultWithEmpresa : resumenDB.rows,
      resultWithEmpresacount : resumenDB?.rows?.length,      

    },
  };

}

const getResumenByMoth = async () =>{

  const sqlSelect = `
  select 
(case when mes <10 then   concat('0', mes,'/',anno)  else concat(mes,'/',anno) end) fecha,
anno,
mes,
fondo,
letra,
bolsa,
total
from
(select 
(case when fondoyletras.anno is null then bolsa.anno else fondoyletras.anno end ) anno,
(case when fondoyletras.mes is null then bolsa.mes else fondoyletras.mes end ) mes,
 round(letra,2) letra,
 round(fondo,2) fondo,
(case when bolsa.importe is null then 0  else round(bolsa.importe,2) end ) as bolsa,
round(letra + fondo + (case when bolsa.importe is null then 0  else bolsa.importe end ),2) as total
from
(
select 
(case when Letras.anno is null then Fondos.anno else Letras.anno end ) anno,
(case when Letras.mes is null then Fondos.mes else Letras.mes end ) mes,
(case when Letras.importe is null then 0  else Letras.importe end ) as letra,
(case when Fondos.importe is null then 0  else Fondos.importe end ) as fondo
from 
(select 
fm.anno ,
fm.mes, 
sum(fm.importe) importe
from finanzas.fondoxmes fm 
inner join finanzas.fondo f on f.id = fm.fondoid
where empresaid=9
group by anno, mes) letras
full join 
(select 
fm.anno ,
fm.mes ,
sum(fm.importe) importe
from finanzas.fondoxmes fm 
inner join finanzas.fondo f on f.id = fm.fondoid
where empresaid!=9
group by anno, mes) Fondos on Fondos.anno = Letras.anno and Fondos.mes = Letras.mes
 ) fondoyletras 
 full join   
(select anno,mes, tipo, sum(importe) importe
from(
  select 
  date_part('year', (select max(fecha)  from finanzas.venta v where v.carteraid= c.id))-2000 anno ,
  date_part('month',  (select max(fecha)  from finanzas.venta v where v.carteraid= c.id)) mes,
  'bolsa' tipo,
  c.beneficios as importe,
  c.acciones,
  (select cast(count(*) as integer) from finanzas.venta v where v.carteraid= c.id) AS ventas
  from finanzas.cartera c)b 
  where b.ventas > 0  and b.acciones=0
  group by anno, mes, tipo ) bolsa  on fondoyletras.anno = bolsa.anno and fondoyletras.mes = bolsa.mes  
  order by anno desc, mes desc)T
  `;
  const resumenDB = await GenericDB.queryObject(client, sqlSelect);
  return resumenDB.rows;
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

  const lstFondosActivos = await getFondoLetrasActivos();
  const resultWithoutEmpresa = await getResumenByMoth();
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: {
      resultWithoutEmpresa,
      resultWithoutEmpresacount: resultWithoutEmpresa.length,
      resultFondosActivos: lstFondosActivos,
      resultFondosActivoscount: lstFondosActivos.length,
    },
  };

};


export default {
  get,
  getDetalle
};
