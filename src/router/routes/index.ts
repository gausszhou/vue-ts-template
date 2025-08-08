import LayoutDashboard from "@/layouts/dashboard/index.vue";
import LayoutFullscreen from "@/layouts/fullscreen/index.vue";

export function createRoutes() {
  return [
    {
      path: "",
      redirect: {
        name: "Home",
      },
    },
    {
      path: "/",
      name: "Dashboard",
      component: LayoutDashboard,
      children: [
        {
          path: "/home",
          name: "Home",
          component: () => import("@/views/home/index.vue"),
        },
        {
          path: "/about",
          name: "About",
          component: () => import("@/views/about/index.vue"),
        },
      ],
    },
    {
      path: "/",
      name: "Fullscreen",
      component: LayoutFullscreen,
      children: [
        {
          path: "/login",
          name: "Login",
          component: () => import("@/views/login/index.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/not-found/index.vue"),
    },
  ];
}
