import Home from "@/views/Home.vue";
// Default
import NotFound from "@/views/default/NotFound.vue";
import Unauthen from "@/views/default/Unauthen.vue";

const routes = [
  {
    path: "/",
    component: Home,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: Home,
      },
    ],
  },
  { path: "*", component: NotFound },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/About.vue"),
  },
  {
    path: "/401",
    component: Unauthen,
  },
  {
    path: "/404",
    component: NotFound,
  },
];

export default routes;
