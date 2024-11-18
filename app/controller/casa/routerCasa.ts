import { Router } from "../../../dep/deps.ts";
import productoRouter from "./compra/compra_producto/router.ts"
import productoSelectedRouter from "./compra/compra_producto_selected/router.ts"

import gasto_tipoRouter from "./gasto/tipo/router.ts"
import gastoRouter from "./gasto/gasto/router.ts"

import evento_tipoRouter from "./evento/tipo/router.ts"
import eventoRouter from "./evento/evento/router.ts"


const router = new Router({
  prefix: "/casa",
});

router.use(productoRouter.routes());
router.use(productoSelectedRouter.routes());
router.use(gasto_tipoRouter.routes());
router.use(gastoRouter.routes());
router.use(evento_tipoRouter.routes());
router.use(eventoRouter.routes());



export default router;







