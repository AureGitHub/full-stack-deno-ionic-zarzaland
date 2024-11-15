// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes,statusError, statusOK } from  "../../../../dep/deps.ts";
import {client, clientNoTransaction } from "../../../aureDB/client.ts";

import entities from "../../../aureDB/entities/entities.ts";

const entity =new aureDB(client, clientNoTransaction,entities,'bolsa.cartera' );
const genericDB = new GenericDB(entity);


const get= async (ctx: any) => {

  const sqlSelect = `
select c.id,c.fecha,c.acciones, beneficios, e.descripcion,e.abreviatura,
(select cast(count(*) as integer) from bolsa.compra c2 where c2.carteraid= c.id) AS compras,
(select cast(count(*) as integer) from bolsa.venta v where v.carteraid= c.id) AS ventas,
(select cast(count(*) as integer) from bolsa.dividendo d  where d.carteraid= c.id) AS dividendos,
(select  max(fecha) from bolsa.venta v  where v.carteraid= c.id) maxventa
from  bolsa.cartera c 
inner join  bolsa.empresa e on e.id = c.empresaid 
order by c.fecha  desc
  `;

  const bolsa=await GenericDB.queryObject(client, sqlSelect);



  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: bolsa.rows, count: bolsa.count },
   };
 
};



const getTransacciones = async (ctx: any) => {

  const carteraid = Number(ctx?.params?.carteraid);


const sqlSelect = `
select * from(
select 'venta' tipo,id, carteraid, fecha, acciones, precio, impuestos, comision, total
  from  bolsa.venta v     
  where v.carteraid =${carteraid}
  union
select 'compra' tipo,id, carteraid, fecha, acciones, precio, impuestos, comision, total
  from  bolsa.compra c     
  where c.carteraid =${carteraid}
  union  
  select 'dividendo' tipo,id, carteraid, fecha, acciones, precio, impuestos, 0 comision, total
  from  bolsa.dividendo d     
  where d.carteraid =${carteraid}
)T
order by fecha desc


`;

const result=await entity.queryObject(client, sqlSelect);
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
