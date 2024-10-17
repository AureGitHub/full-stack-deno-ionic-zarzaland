import { Router, requireUser, requireAdmin, getData } from  "../../../dep/deps.ts";
import controller from "./controller.ts";


const router = new Router({
    prefix: "/Apuesta",
  });

router

.get("/", requireUser, controller.get)
.get("/:id",requireUser,  controller.getById)
.post("/", requireAdmin, getData,  controller.add)
.put("/cerrar/:id", requireAdmin,  controller.cerrar)
.put("/finalizar/:id", requireAdmin,  controller.finalizar)
.put("/:id", requireAdmin, getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)


;

export default router;
