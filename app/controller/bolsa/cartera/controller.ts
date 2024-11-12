// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes,statusError, statusOK } from  "../../../../dep/deps.ts";
import {client, clientNoTransaction } from "../../../aureDB/client.ts";

import entities from "../../../aureDB/entities/entities.ts";

const entity =new aureDB(client, clientNoTransaction,entities,'bolsa.cartera' );
const genericDB = new GenericDB(entity);

const get= async (ctx: any) => {

    const sqlSelect = `  select c.id,c.fecha,c.acciones, beneficios, e.descripcion, to_char(count(v.id), '9999') ventas, to_char(count(c2.id), '9999') compras   `; 

  let sqlFrom =` 
  from  bolsa.cartera c 
inner join  bolsa.empresa e on e.id = c.empresaid 
left join bolsa.venta v on v.carteraid =c.id
left join bolsa.compra c2  on c2.carteraid =c.id
group by c.id,c.fecha,c.acciones, beneficios, e.descripcion
  `;


  const orderBydefect = ` order by fecha desc`;

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
};
