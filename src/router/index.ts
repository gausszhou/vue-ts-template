import { createRouter, createWebHistory } from "vue-router";
import { createRoutes } from "./routes";
import { useLoginHook } from "./hooks";


export function createAppRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
  });
  useLoginHook(router);
  return router;
}
