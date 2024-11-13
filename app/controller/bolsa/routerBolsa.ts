import { Router } from "../../../dep/deps.ts";
import empresaRouter from "./empresa/router.ts"
import carteraRouter from "./cartera/router.ts"
import compraRouter from "./compra/router.ts"
import ventaRouter from "./venta/router.ts"
import dividendoRouter from "./dividendo/router.ts"





const router = new Router({
  prefix: "/bolsa",
});

router.use(empresaRouter.routes());
router.use(carteraRouter.routes());
router.use(compraRouter.routes());
router.use(ventaRouter.routes());
router.use(dividendoRouter.routes());





export default router;







