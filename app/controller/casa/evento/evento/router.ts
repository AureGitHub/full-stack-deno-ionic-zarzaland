import { Router, getData } from  "../../../../../dep/deps.ts";
import controller from "./controller.ts";

const router = new Router({
    prefix: "/evento",
  });

router
.get("/",  controller.get)
.get("/:id",  controller.getById)
.post("/", getData, controller.add)
.put("/:id", getData,  controller.update)
.delete("/:id",    controller.del)

export default router;
