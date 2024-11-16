import { Router, requireAdmin,getData } from  "../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/estadisticas",
  });

router
.get("/",  controller.get)
export default router;
