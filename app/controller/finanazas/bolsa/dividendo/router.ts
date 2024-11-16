import { Router, requireAdmin,getData } from  "../../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/dividendo",
  });

router
.get("/",  controller.get)
.get("/:id",requireAdmin,  controller.getById)
.get("/ByCarteraID/:carteraid",requireAdmin,  controller.ByCarteraID)
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
