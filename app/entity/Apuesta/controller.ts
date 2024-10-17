// deno-lint-ignore-file no-explicit-any
import { aureDB, send, StatusCodes,statusError, statusOK } from  "../../../dep/deps.ts";
import {client,clientNoTransaction} from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import apuestaBusiness from "../../business/apuesta.ts";
import { TC_ApuestaEstado,TC_Auditoria } from "../../enums.ts";
import auditoriaBusiness from "../../business/auditoria.ts";



const entity =new aureDB(client,clientNoTransaction,entities,'Apuesta' );


const get= async (ctx: any) => {

    const sqlSelect = ` select a.id,fecha,apostado,ganado,estadoid,boletoid,boletoid AS "boletoid fileid",filename as "boletoid filename",ax.descripcion estado `;

  let sqlFrom =` 
  from "Apuesta" a 
  inner join "TC_ApuestaEstado" ax on a."estadoid" = ax.id 
  left join	  "Documentos" d ON a.boletoid = d.id 
  `  ;

  sqlFrom+= !ctx.state.user.isAdmin ? ' inner join "UserXApuesta" uxa on a.id=uxa.apuestaid ' : ' ';


  const orderBydefect = ``;

  await auditoriaBusiness.create({ userid : ctx.state.user.id, tc_auditoriaid: TC_Auditoria.apuestas });


  const result=await entity.execute_query_data(ctx, client, sqlSelect, sqlFrom, orderBydefect);
  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data: result.data.rows, count: result.count },
   };

 
};


const getById= async (ctx: any) => {
    const  id  = Number(ctx?.params?.id);
    const data = await entity.findFirst({where: {id}});
    statusOK(ctx,data);   

};



const add = async (ctx: any) => {
    try {
      const newItem =ctx.state.data;

      const data = await entity.create({data: newItem});
      statusOK(ctx,data);    
    } catch (error) {
      console.error(error);
      statusError(ctx,error);
      return;
    }
  };


  const update = async (ctx: any) =>  {
    try {

      const  id  = Number(ctx?.params?.id);


      const data = await entity.update({data: ctx.state.data, where : {id}});
      statusOK(ctx,{rowCount : data?.rowCount});    
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  
const del = async (ctx: any) =>  {
    try {
      const  id  = Number(ctx?.params?.id);
      const data = await entity.del({where: {id}});
      statusOK(ctx,{rowCount : data?.rowCount}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  const cerrar=async (ctx: any) =>  {
    try {

      const  id  = Number(ctx?.params?.id);

      const apuesta = await entity.findFirst({where:{id}});

      if(!apuesta){
          throw new Error('Problemas para acceder a la apuesta')
      }
  
      if(apuesta.estadoid != TC_ApuestaEstado.abierta){
          throw new Error('La apuesta debe estar abierta para poder cerrarla')
      }

      const data = await apuestaBusiness.cerrar(id);
      statusOK(ctx,{ok : data}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };

  const finalizar=async (ctx: any) =>  {
    try {

      const  id  = Number(ctx?.params?.id);
      const {apostado, ganado} = await ctx.request.body().value; 

      if(!ganado){
        throw new Error('No se puede finalizar la apuesta. Debe especificar la cantidad ganada')
      }

      const apuesta = await entity.findFirst({where:{id}});

      if(!apuesta){
          throw new Error('Problemas para acceder a la apuesta')
      }
  
      if(apuesta.estadoid != TC_ApuestaEstado.cerrada){
          throw new Error('La apuesta debe estar cerrada para poder Finalizar')
      }

      const data = await apuestaBusiness.finalizar(id,apostado, ganado);
      statusOK(ctx,{ok : data}); 
    } catch (error) {
      statusError(ctx,error);
      return;
    }
  };


  


export default { 
    get,
    getById,
    add, 
    update, 
    del,
    cerrar,
    finalizar,
};
