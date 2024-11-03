// deno-lint-ignore-file no-explicit-any
import { aureDB , statusOK, StatusCodes,setStatus, statusError} from  "../../../dep/deps.ts"

import {client,clientNoTransaction} from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";


const entity = new aureDB(client,clientNoTransaction, entities, 'Documentos');



const getById = async (ctx: any) => {
  const id = Number(ctx?.params?.id);
  let data = await entity.findFirst({ where: { id } });


  if(!data){ 
    setStatus(ctx, 409, StatusCodes.CONFLICT, 'Documento no encontrado!')
    return;
  }


  const blob = new Blob([data.content], { type: data.contenttype });  


  let myData = data.content.toString("base64");


  data['myData'] =  myData;
  statusOK(ctx, data  );

};


export default {
  getById,
};
