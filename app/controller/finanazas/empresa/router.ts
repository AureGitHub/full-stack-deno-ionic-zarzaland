import { Router, requireAdmin,getData, requireGod } from  "../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/empresa",
  });

router
.get("/", requireGod, controller.get)
.get("/:id",requireAdmin,  controller.getById)
.post("/", requireAdmin,getData, controller.add)
.put("/:id", requireAdmin,getData,  controller.update)
.delete("/:id",  requireAdmin,  controller.del)

export default router;
