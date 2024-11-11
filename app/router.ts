import { gnericRouter, Router } from "../dep/deps.ts";
import empresaRouter from "./controller/empresa/router.ts"
import accion_compraRouter from "./controller/accion_compra/router.ts"
import accion_compra_ventaRouter from "./controller/accion_compra_venta/router.ts"


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
router.use(empresaRouter.routes());
router.use(accion_compraRouter.routes());  
router.use(accion_compra_ventaRouter.routes());  





export default router;







