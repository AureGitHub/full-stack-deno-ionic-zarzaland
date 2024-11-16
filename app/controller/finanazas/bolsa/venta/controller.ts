// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes, statusError, statusOK } from "../../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../../aureDB/client.ts";

import entities from "../../../../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'finanzas.venta');
const genericDB = new GenericDB(entity);

const get = async (ctx: any) => {

  const sqlSelect = `  select *   `;
  let sqlFrom = ` from  finanzas.venta v     
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
  let sqlFrom = ` from  finanzas.venta v     
  where v.carteraid = ${carteraid}

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

  const transaction = client.createTransaction("transaction_add_venta");
  try {
    const newItem = ctx.state.data;
    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'finanzas.cartera');
    const cartera = await carteraEntity.findFirst({ where: { id: Number(newItem['carteraid']) } });

    if (Number(newItem['acciones']) > Number(cartera.acciones)) {
      throw new Error(`Hay ${cartera.acciones} acciones. No puedes vender ${newItem['acciones']} acciones`)
    }

    await transaction.begin();

    await entity.create({ data: newItem, tr: transaction });
    const acciones = Number(cartera.acciones) - Number(newItem['acciones']);
    const beneficios = Number(cartera.beneficios) + Number(newItem['total']);
    await carteraEntity.update({ data: { acciones, beneficios }, where: { id: Number(cartera.id) }, tr: transaction });
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

  const transaction = client.createTransaction("transaction_update_venta");
  try {
    const id = Number(ctx?.params?.id);
    const itemUpdateInput = ctx.state.data;

    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'finanzas.cartera');
    const OldVentaEntity = new aureDB(client, clientNoTransaction, entities, 'finanzas.venta');

    const oldVenta = await OldVentaEntity.findFirst({ where: { id } });
    const cartera = await carteraEntity.findFirst({ where: { id: Number(oldVenta.carteraid) } });

    if (Number(itemUpdateInput.acciones) > Number(cartera.acciones)) {
      throw new Error(`Hay ${cartera.acciones} acciones. No puedes vender ${itemUpdateInput.acciones} acciones`)
    }

    let carteraUpdate = {};

    if (itemUpdateInput.acciones) {
      const acciones = Number(cartera.acciones) + Number(oldVenta.acciones) - Number(itemUpdateInput.acciones);
      carteraUpdate['acciones'] = acciones;
    }

    if (itemUpdateInput.total) {
      const beneficios = Number(cartera.beneficios) - Number(oldVenta.total) + Number(itemUpdateInput.total);
      carteraUpdate['beneficios'] = beneficios;
    }
    await transaction.begin();
    if (carteraUpdate['acciones'] || carteraUpdate['beneficios']) {

      await carteraEntity.update({ data: carteraUpdate, where: { id: Number(cartera.id) }, tr: transaction });

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
  const transaction = client.createTransaction("transaction_del_venta");

  try {
    const id = Number(ctx?.params?.id);

    const carteraEntity = new aureDB(client, clientNoTransaction, entities, 'finanzas.cartera');
    const OldVentaEntity = new aureDB(client, clientNoTransaction, entities, 'finanzas.venta');

    const oldVenta = await OldVentaEntity.findFirst({ where: { id } });
    const cartera = await carteraEntity.findFirst({ where: { id: Number(oldVenta.carteraid) } });

    const acciones = Number(cartera.acciones) + Number(oldVenta.acciones);
    const beneficios = Number(cartera.beneficios) - Number(oldVenta.total);

    await transaction.begin();
    await carteraEntity.update({ data: { acciones, beneficios }, where: { id: Number(cartera.id) }, tr: transaction });

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
