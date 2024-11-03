import { Router, requireUser,requireAdmin } from  "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/documentos",
  });

router

.get("/:id", requireUser,  controller.getById)
;

export default router;
