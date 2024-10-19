import { run } from  "./dep/deps.ts";
import appRouter from "./app/router.ts";

const fullstack = true;

run(appRouter, fullstack); 



