// deno-lint-ignore-file no-explicit-any
import { aureDB } from  "../../../dep/deps.ts";
import {client,clientNoTransaction} from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";



const entity = new aureDB(client,clientNoTransaction, entities, 'Auditoria');


const get= async (ctx: any) => {
 

  const sqlSelect = `   
  select a."createdAt" fecha, u."name" nombre ,ta.id tipoid, ta.descripcion tipo 
  `;

  const sqlFrom = ` 
  from "Auditoria" a 
  inner join "User" u on a.userid = u.id 
  inner join "TC_Auditoria" ta on a.tc_auditoriaid = ta.id
    `;
  const orderBydefect = `  a."createdAt"  `;
   await entity.execute_query(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  
};


export default { 
    get,
};
