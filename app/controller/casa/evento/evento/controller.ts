// deno-lint-ignore-file no-explicit-any
import { aureDB, GenericDB, StatusCodes, statusError, statusOK } from "../../../../../dep/deps.ts";
import { client, clientNoTransaction } from "../../../../aureDB/client.ts";
import eventoBusiness from "../../../../business/evento.ts";

import entities from "../../../../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'casa.evento');  
const genericDB = new GenericDB(entity);

const get = async (ctx: any) => {

  const sqlSelect = ` select e.id,TO_CHAR(e.fecha, 'yyyy-mm-dd') fecha ,e.observaciones, te.descripcion , te.color, te.bkcolor,
  (case when e.eventotipoid = 2 or e.eventotipoid = 3 then true else false end) esturno
  `;
  let sqlFrom = ` from  casa.evento e
                  inner join casa.evento_tipo te on te.id=e.eventotipoid
  `;


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



const getWeekDates=(startDate) => {
  const inputDate = new Date(startDate);
  // if (isNaN(inputDate)) {
  //   throw new Error("Fecha inválida. Asegúrate de usar un formato válido.");
  // }


  

  const dayOfWeek = inputDate.getDay(); // 0 (domingo) a 6 (sábado)


  const weekStart = new Date(inputDate);


  // Ajustar al inicio (lunes) y fin (domingo) de la semana
  weekStart.setDate(inputDate.getDate() - ((dayOfWeek === 0 ? 7 : dayOfWeek) - 1)); // Lunes
  const weekEnd = new Date(weekStart);
  weekEnd.setDate(weekEnd.getDate() + 6); // Domingo

  const weekDates: any[] = [];
  for (let d = new Date(weekStart); d <= weekEnd; d.setDate(d.getDate() + 1)) {
    weekDates.push(new Date(d)); // Clonar la fecha
  }

  return weekDates;
}

const add = async (ctx: any) => {


  try {
    const evento = ctx.state.data;
    const periodoturno = evento?.periodoturno;  
  
    let data = null;

   


    switch(periodoturno){
      case 'd':   //día
      data = await eventoBusiness.addUpdateEvento(evento);
  
      break;

      case 's':   //día
      const daysOfWeek = getWeekDates(evento.fecha);

      if(daysOfWeek.length!=7){
        throw new Error('Error calculando semanas!!');
      }

      for(let i=0; i<daysOfWeek.length;i++){
        evento.fecha = daysOfWeek[i].toISOString();
        await eventoBusiness.addUpdateEvento(evento);
      }
      break;

      default : //evento normal (no turno)
      await eventoBusiness.addUpdateEvento(evento);
      break;

    }
  
    statusOK(ctx, {  entity : data });
} catch (error) {
    statusError(ctx, error);
    return;
}
  
};


const del = async (ctx: any) => {
  await genericDB.del(ctx);
};


export default {
  get,
  getById,
  add,
  del,
};
