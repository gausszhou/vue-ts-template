import type { Router } from "vue-router";
import { useUserStore } from "@/store/user";

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

    // 非登录页，未登录则跳转到登录页并记录目标路径
    if (!isLogin) {
      next({ name: "Login", query: { redirect: to.fullPath } });
      return;
    }

    // 已登录且存在重定向参数，则跳转到重定向页面
    if (to.query.redirect) {
      next({ path: to.query.redirect as string });
      return;
    }

    // 已登录且无重定向参数，正常跳转
    next();
  });
}
