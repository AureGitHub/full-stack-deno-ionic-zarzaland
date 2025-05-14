import { Router } from "../../../dep/deps.ts";
import catastroRouter from "./catastro/catastro/router.ts"
import arriendoRouter from "./arriendo/router.ts"
import catastro_tipoRouter from "./catastro/tipo/router.ts"



const router = new Router({
  prefix: "/inmueble",
});

router.use(catastroRouter.routes());
router.use(catastro_tipoRouter.routes());
router.use(arriendoRouter.routes());



export default router;







