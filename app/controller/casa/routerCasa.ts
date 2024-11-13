import { Router } from "../../../dep/deps.ts";
import productoRouter from "./producto/router.ts"

const router = new Router({
  prefix: "/casa",
});

router.use(productoRouter.routes());
export default router;







