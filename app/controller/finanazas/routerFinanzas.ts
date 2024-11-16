import { Router } from "../../../dep/deps.ts";
import empresaRouter from "./empresa/router.ts"

import carteraRouter from "./bolsa/cartera/router.ts"
import compraRouter from "./bolsa/compra/router.ts"
import dividendoRouter from "./bolsa/dividendo/router.ts"
import ventaRouter from "./bolsa/venta/router.ts"

import fondoRouter from "./fondoyletra/router.ts"

import estadisticasRouter from "./estadisticas/router.ts"






const router = new Router({
  prefix: "/finanzas",
});

router.use(empresaRouter.routes());
router.use(carteraRouter.routes());
router.use(compraRouter.routes());
router.use(ventaRouter.routes());
router.use(dividendoRouter.routes());
router.use(fondoRouter.routes());
router.use(estadisticasRouter.routes());







export default router;







