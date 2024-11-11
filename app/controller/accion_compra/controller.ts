// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes,statusError, statusOK } from  "../../../dep/deps.ts";
import {client, clientNoTransaction } from "../../aureDB/client.ts";

import entities from "../../aureDB/entities/entities.ts";

const entity =new aureDB(client, clientNoTransaction,entities,'accion_compra' );
const genericDB = new GenericDB(entity);

const get= async (ctx: any) => {




   const sqlSelect = `  select ac.id,fecha,acciones, precio,total, e.descripcion `; 

   let sqlFrom =` from  public.accion_compra ac 
   inner join empresa e on e.id = ac.empresaid 
    `;


  const orderBydefect = ``;

  const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: result.data.rows, count: result.count },
   };
 
};





const getById= async (ctx: any) => {
  await genericDB.getById(ctx);
};


const comprasByEmpresaId= async (ctx: any) => {
  const empresaid = Number(ctx?.params?.empresaid);
  const sqlSelect = ` select ac.id,TO_CHAR(ac.fecha, 'dd/MM/yyyy')fecha, ac.acciones,ac.precio `; 

  let sqlFrom =` from accion_compra ac
  inner join empresa e on e.id = ac.empresaid 
  where ac.empresaid= ${empresaid.toString()}
   `;


  //where empresaid = ${empresaid}
  

 const orderBydefect = ` order by ac,fecha desc `;

 const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
 ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data: result.data.rows, count: result.count },
  };

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
    comprasByEmpresaId
};
