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
        component: Home
      },
      {
        path: "/401",
        component: Unauthen
      },
      {
        path: "/404",
        component: NotFound
      },
    ]
  },
  { path: "*", component: NotFound }
];

export default routes;
