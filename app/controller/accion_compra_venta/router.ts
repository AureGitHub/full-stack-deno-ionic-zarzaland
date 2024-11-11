import { Router, requireAdmin,getData } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/accion_compra_venta",
  });

router
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
