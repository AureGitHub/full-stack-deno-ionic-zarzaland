// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes,statusError, statusOK } from  "../../../../../dep/deps.ts";
import {client, clientNoTransaction } from "../../../../aureDB/client.ts";

import entities from "../../../../aureDB/entities/entities.ts";

const entity =new aureDB(client, clientNoTransaction,entities,'finanzas.cartera' );
const genericDB = new GenericDB(entity);


const get= async (ctx: any) => {

  const sqlSelect = `
select *,
((precionventas-preciocompras) / ((precionventas+preciocompras)/2)) * 100 as porcertaje
from 
(
select c.id,c.fecha,c.acciones, beneficios, e.descripcion,e.abreviatura,
(select cast(count(*) as integer) from finanzas.compra c2 where c2.carteraid= c.id) AS compras,
(select cast(count(*) as integer) from finanzas.venta v where v.carteraid= c.id) AS ventas,
(select cast(count(*) as integer) from finanzas.dividendo d  where d.carteraid= c.id) AS dividendos,
(select  max(fecha) from finanzas.venta v  where v.carteraid= c.id) maxventa,
(select cast(sum(c2.precio)/count(*) as float) from finanzas.compra c2 where c2.carteraid= c.id) AS preciocompras,
(select cast(sum(v.precio)/count(*) as float) from finanzas.venta v where v.carteraid= c.id) AS precionventas,
(select sum(c2.total) from finanzas.compra c2 where c2.carteraid= c.id) AS totalcompras,
(select sum(v.total) from finanzas.venta v where v.carteraid= c.id) AS totalventas
from  finanzas.cartera c 
inner join  finanzas.empresa e on e.id = c.empresaid 
order by ventas asc,c.fecha  desc
)c
  `;

  const finanzas=await GenericDB.queryObject(client, sqlSelect);



  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: finanzas.rows, count: finanzas.count },
   };
 
};



const getTransacciones = async (ctx: any) => {

  const carteraid = Number(ctx?.params?.carteraid);


const sqlSelect = `
select * from(
select 'venta' tipo,id, carteraid, fecha, acciones, precio, impuestos, comision, total
  from  finanzas.venta v     
  where v.carteraid =${carteraid}
  union
select 'compra' tipo,id, carteraid, fecha, acciones, precio, impuestos, comision, total
  from  finanzas.compra c     
  where c.carteraid =${carteraid}
  union  
  select 'dividendo' tipo,id, carteraid, fecha, acciones, precio, impuestos, 0 comision, total
  from  finanzas.dividendo d     
  where d.carteraid =${carteraid}
)T
order by fecha desc


`;

const result=await GenericDB.queryObject(client, sqlSelect);
ctx.response.status = 201;
 ctx.response.body = {
   status: StatusCodes.OK,
   data: { data: result.rows, count: result.count },
 };

};



const getById= async (ctx: any) => {
  await genericDB.getById(ctx);
};


const add = async (ctx: any) => {
  await genericDB.add(ctx);
  };


  const update = async (ctx: any) =>  {
    await genericDB.update(ctx);
  };

  
const del = async (ctx: any) =>  {
  await genericDB.del(ctx);
  };


export default { 
    get,
    getById,
    add, 
    update, 
    del,
    getTransacciones
};
