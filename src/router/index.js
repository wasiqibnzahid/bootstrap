import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainLayout",
    redirect: "/vendors",
    component: () => import("../layouts/MainLayout.vue"),
    children: [
      {
        path: "/vendors",
        name: "Home",
        component: () => import("@/views/VendorVIew.vue"),
      },
      {
        path: "/bills",
        name: "Bills",
        component: () => import("@/views/BillView.vue"),
      },
      {
        path: "/create-bill",
        name: "create bill",
        component: () => import("@/views/createBill.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
