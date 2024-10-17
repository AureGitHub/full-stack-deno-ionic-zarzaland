import { Router } from "../dep/deps.ts";
import userRouter from "./entity/user/router.ts";
import typesRouter from "./entity/types/router.ts";
import userxbizumRouter from "./entity/UserBizum/router.ts";
import apuestaRouter from "./entity/Apuesta/router.ts";
import movimientoRouter from "./entity/Movimiento/router.ts";
import entitiesRouter from "./aureDB/entities/router.ts";
import administracionRouter from "./entity/Administracion/router.ts";
import auditoriaRouter from "./entity/Auditoria/router.ts";
import documentosRouter from "./entity/documentos/router.ts";


import prormacion from "./programacion/programacion.ts"


prormacion.execute();




const router = new Router({
  prefix: "/api",
});


router.use(typesRouter.routes());  
router.use(userRouter.routes());  
router.use(userxbizumRouter.routes());  
router.use(apuestaRouter.routes());  
router.use(movimientoRouter.routes());  
router.use(entitiesRouter.routes());  
router.use(administracionRouter.routes());  
router.use(auditoriaRouter.routes());  
router.use(documentosRouter.routes());  




export default router;







