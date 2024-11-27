import { aureDB } from "../../dep/deps.ts"
import { client, clientNoTransaction } from "../aureDB/client.ts";
import entities from "../aureDB/entities/entities.ts";

const entity = new aureDB(client, clientNoTransaction, entities, 'casa.evento');


const findEventoByTipoDate = async (eventotipoid: number, fecha: Date) => {

    //eventotipoid=${eventotipoid} and 

    const sqlSelect = `
    select * from casa.evento 
    where     
    DATE(fecha) = DATE('${fecha}')
    `;

    const sal = await aureDB.queryObject(client, sqlSelect);

    return sal?.rows && sal?.rows.length > 0 ? sal?.rows[0] : null;

}


const addUpdateEvento = async (evento: any) => {
    const eventotipoid = Number(evento?.eventotipoid);
    const fecha = evento?.fecha;
    const eventDB = await findEventoByTipoDate(eventotipoid, fecha);

    let data = null;

    if(eventDB && (eventDB.eventotipoid==eventotipoid || ([2,3].some(a=> a==eventDB.eventotipoid)  && [2,3].some(a=> a==eventotipoid)  ))){
        data = await entity.update({ data: evento, where: { id:eventDB.id  } });
        return evento;

    }
    else{
        data = await entity.create({ data: evento });
        return data;
    }

   

   



    return data;

    
}

export default {
    findEventoByTipoDate,
    addUpdateEvento
}
