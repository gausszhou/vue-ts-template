import { createRouter, createWebHistory } from "vue-router";
import { createRoutes } from "./routes";
import { useBaseHook, useLoginHook } from "./hooks";


export function createAppRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes: createRoutes(),
  });
  useBaseHook(router);
  useLoginHook(router);
  return router;
}
