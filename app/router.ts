import { gnericRouter, Router } from "../dep/deps.ts";

import bolsaRouter from "./controller/bolsa/router.ts"


import { client, clientNoTransaction } from "./aureDB/client.ts";
import entities from "./aureDB/entities/entities.ts";


const router = new Router({
  prefix: "/api",
});

//router generico.. está en la librería. Si necesita una funcionalidad propia, se hace el
//controller y el router
gnericRouter.init(client,clientNoTransaction,entities);
// documentoRouter.InitRouter(client,clientNoTransaction,entities);

router.use(gnericRouter.router.routes());  
router.use(bolsaRouter.routes());  


export default router;







