import { Router } from "../../../dep/deps.ts";
import catastroRouter from "./catastro/catastro/router.ts"
import catastro_tipoRouter from "./catastro/tipo/router.ts"



const router = new Router({
  prefix: "/inmueble",
});

router.use(catastroRouter.routes());
router.use(catastro_tipoRouter.routes());


export default router;







