import type { Router } from "vue-router";
import { useUserStore } from "@/store/user";

export function useBaseHook(router: Router) {
  router.beforeEach((to, from, next) => {
    console.log(to, from);
    next();
  });
}

export function useLoginHook(router: Router) {
  router.beforeEach((to, from, next) => {
    const userStore = useUserStore();
    const isLogin = userStore.isLogin;
    // 如果目标路由是登录页
    if (to.name === "Login") {
      // 已登录则跳转到首页，否则正常进入登录页
      isLogin ? next({ name: "Home" }) : next();
      return;
    }
    // 非登录页，已登录则正常跳转，未登录则跳转到登录页
    isLogin ? next() : next({ name: "Login" });
  });
}
