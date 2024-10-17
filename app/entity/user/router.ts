import { Router, requireUser, requireAdmin,requireGod, getData } from  "../../../dep/deps.ts";
import controller from "./controller.ts";




const router = new Router({
    prefix: "/user",
  });

router
.post("/addSaldo", requireAdmin , controller.addSaldo)
.post("/reserPassByCode", controller.reserPassByCode)
.post("/getCodeResetPass", controller.getCodeResetPass)
.post("/login", controller.login)
.get("/InRed", requireAdmin,  controller.InRed)
.get("/",  controller.get)  //require.requireAdmin,
.get("/:id", requireUser,  controller.getById)
.post("/", requireGod, getData,  controller.add)
.put("/:id", requireGod, getData,   controller.update)
.delete("/:id", requireGod,   controller.del)


;

export default router;
