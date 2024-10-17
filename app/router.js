import { Router } from "../dep/deps.ts";
import entitiesRouter from "./aureDB/entities/router.ts";
import userRouter from "./entity/user/router.ts";
import servicioRouter from "./entity/servicio/router.ts"
import empleadaRouter from "./entity/empleada/router.ts"





const router = new Router({
  prefix: "/api",
});

router.use(entitiesRouter.routes());  
router.use(userRouter.routes());  
router.use(servicioRouter.routes());  
router.use(empleadaRouter.routes());  


export default router;







