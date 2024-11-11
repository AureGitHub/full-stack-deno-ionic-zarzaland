// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes,statusError, statusOK } from  "../../../dep/deps.ts";
import {client, clientNoTransaction } from "../../aureDB/client.ts";

import entities from "../../aureDB/entities/entities.ts";

const entity =new aureDB(client, clientNoTransaction,entities,'accion_venta' );
const genericDB = new GenericDB(entity);



const add = async (ctx: any) => {

  const transaction = client.createTransaction("transaction_add_compra_venta");
  try {
    const newItem = ctx.state.data;

    const lstComprasid = newItem?.comprasid?.split(',');
  
  
    const entity_accion_compra_venta =new aureDB(client, clientNoTransaction,entities,'accion_compra_venta' );
  
  
    await transaction.begin();
    
    const venta = await entity.create({ data: newItem, tr: transaction });
  
    const ventaid= venta?.id;
  
  
    await lstComprasid.forEach(async compraid_s => {
      const compraid = parseInt(compraid_s);
  
      await entity_accion_compra_venta.create({ data: {compraid,ventaid}, tr: transaction });
    });
    
    await transaction.commit();
    const data = {ok: true};
    statusOK(ctx, data);
} catch (error) {
  // await transaction.rollback();
    statusError(ctx, error);
    return;
}





  };


  const update = async (ctx: any) =>  {
    await genericDB.update(ctx);
  };

  
const del = async (ctx: any) =>  {
  await genericDB.del(ctx);
  };


export default { 
    add, 
    update, 
    del,
};
