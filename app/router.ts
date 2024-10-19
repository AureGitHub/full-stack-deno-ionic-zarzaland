import { gnericRouter, Router } from "../dep/deps.ts";
import servicioRouter from "./entity/servicio/router.ts"
import empleadaRouter from "./entity/empleada/router.ts"
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
router.use(servicioRouter.routes());  
router.use(empleadaRouter.routes());  
// router.use(documentoRouter.router.routes());  



export default router;







