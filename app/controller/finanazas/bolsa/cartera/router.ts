import { Router, requireAdmin,getData } from  "../../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/cartera",
  });

router
.get("/",  controller.get)
.get("/:id",requireAdmin,  controller.getById)
.get("/getTransacciones/:carteraid",requireAdmin,  controller.getTransacciones)
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
