// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes, statusError, statusOK } from "../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../aureDB/client.ts";

import entities from "../../../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'finanzas.fondo');
const genericDB = new GenericDB(entity);


const getlstfondoxmes = (fondoid: number, mesInicio: number, annoInicio: number, meses: number, importe: number) => {

  let lstfondoxmes: any[] = [];
  for (let i = 0; i < meses; i++) {
    let mes = mesInicio + i;
    let anno = Number(annoInicio);
    if (mes > 12) {
      mes = mes - 12;
      anno++;
    }
    anno -= 2000;
    lstfondoxmes.push({ fondoid, mes, anno, importe });
  }
  return lstfondoxmes;
}

const get = async (ctx: any) => {

  const sqlSelect = ` select f.*, e.descripcion  `;
  let sqlFrom = ` from  finanzas.fondo f
                  inner join  finanzas.empresa e on e.id = f.empresaid 
  `;


  const orderBydefect = ` order by fechainicio desc `;

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

  const transaction = client.createTransaction("transaction_add_fondo");
  try {
    const newItem = ctx.state.data;
    const fechainicio = new Date(newItem.fechainicio);
    const mesInicio = fechainicio.getMonth() + 1;
    const annoInicio = fechainicio.getFullYear();
    const meses = Number(newItem.meses);
    const importe = Number(newItem.beneficios) / meses;
    let lstfondoxmes = getlstfondoxmes(-1, mesInicio, annoInicio, meses, importe);
    const fondoxmes = new aureDB(client, clientNoTransaction, entities, 'finanzas.fondoxmes');
    await transaction.begin();
    const newFondo =await entity.create({ data: newItem, tr: transaction });    
    const fondoid=newFondo?.id;
    lstfondoxmes.forEach(async item => {
      item.fondoid = fondoid;
      await fondoxmes.create({ data: item, tr: transaction });
    });
   
    await transaction.commit();
    statusOK(ctx, { ok: true });
  } catch (error) {
    statusError(ctx, error);
    return;
  }



};


const update = async (ctx: any) => {

  const transaction = client.createTransaction("transaction_update_fondo");
  try {
    const id = Number(ctx?.params?.id);
    const itemUpdateInput = ctx.state.data;
    const fondoid = id;
    const fechainicio = new Date(itemUpdateInput.fechainicio);
    const mesInicio = fechainicio.getMonth() + 1;
    const annoInicio = fechainicio.getFullYear();
    const meses = Number(itemUpdateInput.meses);
    const importe = Number(itemUpdateInput.beneficios) / meses;
    let lstfondoxmes = getlstfondoxmes(fondoid, mesInicio, annoInicio, meses, importe);
    const fondoxmes = new aureDB(client, clientNoTransaction, entities, 'finanzas.fondoxmes');
    await transaction.begin();
    await fondoxmes.del({ where: { fondoid }, tr: transaction });
    lstfondoxmes.forEach(async item => {
      await fondoxmes.create({ data: item, tr: transaction });
    });
    await entity.update({ data: itemUpdateInput, where: { id }, tr: transaction });
    await transaction.commit();
    statusOK(ctx, { ok: true });
  } catch (error) {
    statusError(ctx, error);
    return;
  }
};


const del = async (ctx: any) => {


  const transaction = client.createTransaction("transaction_del_fondo");
  try {
    const id = Number(ctx?.params?.id);
    const fondoxmes = new aureDB(client, clientNoTransaction, entities, 'finanzas.fondoxmes');
    await transaction.begin();
    await fondoxmes.del({ where: { fondoid : id }, tr: transaction });    
    await entity.del({ where: { id }, tr: transaction });    
    await transaction.commit();
    statusOK(ctx, { ok: true });
  } catch (error) {
    statusError(ctx, error);
    return;
  }

  await genericDB.del(ctx);
};


export default {
  get,
  getById,
  add,
  update,
  del,
};
