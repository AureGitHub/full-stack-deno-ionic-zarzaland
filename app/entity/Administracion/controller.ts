// deno-lint-ignore-file no-explicit-any
import { aureDB, StatusCodes } from  "../../../dep/deps.ts";
import {client,clientNoTransaction} from "../../aureDB/client.ts";
import entities from "../../aureDB/entities/entities.ts";
import { TC_BizumEstado } from "../../enums.ts";

const get= async (ctx: any) => {
 

  const UserXBizum = new aureDB(client,clientNoTransaction, entities, 'UserXBizum');

  const totalBizumConfirmados = parseFloat(await UserXBizum.aggregate({ _sum: 'importe', where: {estadoid: TC_BizumEstado.confirmado } }));  

  const strlstUserInLastApuesta=`
            select  'Apuesta ' || TO_CHAR(ap.fecha, 'dd/mm/yyyy') fecha ,  u.email from
(select *  from  "Apuesta" a
where estadoid = 3
order by fecha desc
limit 1
)ap
inner join  "UserXApuesta" ux on ap.id =ux.apuestaid 
inner join "User" u on ux.userid =u.id 
  `;

  const lstUserInLastApuesta = await UserXBizum.execute_str(strlstUserInLastApuesta);

  const strUserInLastApuesta = lstUserInLastApuesta?.rows.map(a=> a.email).join(';');
  const strFechaApuesta = lstUserInLastApuesta?.rows[0]?.fecha;

  ctx.response.status = 201;
   ctx.response.body = {
     status: StatusCodes.OK,
     data: { data:{ 
      totalBizumConfirmados,
      strUserInLastApuesta,
      strFechaApuesta
      
    }
        },
   };

 
};


export default { 
    get,
};
