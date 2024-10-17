import { Router, requireUser,requireAdmin } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/userxbizum",
  });

router
// .get("/", requireUser, controller.get)
// .get("/:id", requireUser, controller.getById)
// .post("/", requireUser, controller.add)
// .put("/:id", requireUser,  controller.update)
// .delete("/:id", requireUser,  controller.del)

.get("/", requireUser , controller.get)
.get("/:id", requireUser,  controller.getById)
.post("/", requireUser,  controller.add)
.put("/cerrarAll", requireAdmin,   controller.cerrarAll)
.put("/Confirmar/:id", requireAdmin,   controller.confirmar)
.put("/:id", requireAdmin,   controller.update)
.delete("/:id", requireUser,   controller.del)


;

export default router;
