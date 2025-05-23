import { Router, getData, requireAdmin } from  "../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/arriendo",
  });

router
.get("/", requireAdmin,  controller.get)
.get("/:id", requireAdmin,  controller.getById)
.post("/", requireAdmin, getData, controller.add)
.put("/:id", requireAdmin, getData,  controller.update)
.delete("/:id", requireAdmin,    controller.del)

export default router;
