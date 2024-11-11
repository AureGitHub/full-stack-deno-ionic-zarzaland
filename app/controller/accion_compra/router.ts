import { Router, requireAdmin,getData } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/accion_compra",
  });

router
.get("/",  controller.get)
.get("/:id",requireAdmin,  controller.getById)
.get("/comprasByEmpresaId/:empresaid",requireAdmin,  controller.comprasByEmpresaId)
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
