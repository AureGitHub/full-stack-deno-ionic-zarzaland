// deno-lint-ignore-file no-explicit-any
import { aureDB } from "../../dep/deps.ts";
import {client,clientNoTransaction} from "../aureDB/client.ts";
import entities from "../aureDB/entities/entities.ts";


const entityAuditoria = new aureDB(client,clientNoTransaction, entities, 'Auditoria');


const create = (data: any) => {
    return entityAuditoria.create({ data });
}


export default {
    create
}


