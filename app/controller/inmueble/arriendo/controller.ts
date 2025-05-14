// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes } from "../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../aureDB/client.ts";

import entities from "../../../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'inmueble.arriendo');  
const genericDB = new GenericDB(entity);

const get = async (ctx: any) => {

  const sqlSelect = ` select a.*
  `;
  let sqlFrom = ` from  inmueble.arriendo a `;

  const orderBydefect = ``;

  const result = await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data: result.data.rows, count: result.count },
  };

};


const getById = async (ctx: any) => {
  await genericDB.getById(ctx);
};


const add = async (ctx: any) => {
  await genericDB.add(ctx);
};


const update = async (ctx: any) => {
  await genericDB.update(ctx);
};


const del = async (ctx: any) => {
  await genericDB.del(ctx);
};


export default {
  get,
  getById,
  add,
  del,
  update
};
