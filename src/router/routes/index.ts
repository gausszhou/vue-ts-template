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
      name: "Home",
      component: () => import("@/views/home/index.vue"),
    },
    {
      path: "/about",
      name: "About",
      component: () => import("@/views/about/index.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: () => import("@/views/not-found/index.vue"),
    },
  ];
}
