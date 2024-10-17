import { Router, requireGod } from "../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
  prefix: "/Auditoria",
});
router

  .get("/", requireGod, controller.get);
export default router;



