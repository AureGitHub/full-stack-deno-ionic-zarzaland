// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes, statusError, statusOK } from "../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../aureDB/client.ts";

import entities from "../../../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'bolsa.dividendo');
const genericDB = new GenericDB(entity);

const get = async (ctx: any) => {

  const sqlSelect = `  select *   `;
  let sqlFrom = ` from  bolsa.dividendo d     
  `;


  const orderBydefect = ` order by fecha desc`;

  const result = await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
  ctx.response.body = {
    status: StatusCodes.OK,
    data: { data: result.data.rows, count: result.count },
  };

};


const ByCarteraID = async (ctx: any) => {

  const carteraid = Number(ctx?.params?.carteraid);
  const sqlSelect = `  select *   `;
  let sqlFrom = ` from  bolsa.dividendo d     
  where d.carteraid = ${carteraid}

`;

  const orderBydefect = ` order by fecha desc`;

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

  const transaction = client.createTransaction("transaction_add_dividendo");
  try {
    const newItem = ctx.state.data;
    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'bolsa.cartera');
    const cartera = await carteraEntity.findFirst({ where: { id: Number(newItem['carteraid']) } });

    await transaction.begin();

    await entity.create({ data: newItem, tr: transaction });
    const  beneficios =  Number(cartera.beneficios) + Number(newItem['total']);
    await carteraEntity.update({ data: {beneficios }, where: { id :  Number(cartera.id) }, tr: transaction });
    await transaction.commit();
    const data = { ok: true };
    statusOK(ctx, data);
  } catch (error) {
    // await transaction.rollback();
    statusError(ctx, error);
    return;
  }


};


const update = async (ctx: any) => {
  
  const transaction = client.createTransaction("transaction_update_dividendo");
  try {
    const id = Number(ctx?.params?.id);
    const itemUpdateInput = ctx.state.data;

    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'bolsa.cartera');
    const OldDividendoEntity = new aureDB(client, clientNoTransaction, entities, 'bolsa.dividendo');

    const oldDividendo = await OldDividendoEntity.findFirst({ where: {id} });
    const cartera = await carteraEntity.findFirst({ where: { id: Number(oldDividendo.carteraid)} });
    

    let carteraUpdate ={};

  

    if(itemUpdateInput.total){
    const  beneficios =   Number(cartera.beneficios) - Number(oldDividendo.total) + Number(itemUpdateInput.total);      
      carteraUpdate ={beneficios};
    }

    await transaction.begin();
    if(carteraUpdate['beneficios']  ){
      await carteraEntity.update({ data: carteraUpdate, where: { id :  Number(cartera.id) }, tr: transaction });
    }
    const data = await entity.update({ data: itemUpdateInput, where: { id }, tr: transaction });
    await transaction.commit();

    statusOK(ctx, { rowCount: data?.rowCount });
} catch (error) {
    // await transaction.rollback();
    statusError(ctx, error);
    return;
}
};


const del = async (ctx: any) => {
  const transaction = client.createTransaction("transaction_del_dividendo");

  try {
    const id = Number(ctx?.params?.id);

    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'bolsa.cartera');
    const OldDividendoEntity = new aureDB(client, clientNoTransaction, entities, 'bolsa.dividendo');

    const oldDividendo = await OldDividendoEntity.findFirst({ where: {id} });
    const cartera = await carteraEntity.findFirst({ where: { id: Number(oldDividendo.carteraid)} });

    const  beneficios = Number(cartera.beneficios) - Number(oldDividendo.total);      

    await transaction.begin();
    await carteraEntity.update({ data: {beneficios}, where: { id :  Number(cartera.id) }, tr: transaction });

    const data = await entity.del({ where: { id }, tr: transaction });
    await transaction.commit();
    statusOK(ctx, { rowCount: data?.rowCount });
} catch (error) {
    statusError(ctx, error);
    return;
}
};


export default {
  get,
  getById,
  add,
  update,
  del,
  ByCarteraID
};
