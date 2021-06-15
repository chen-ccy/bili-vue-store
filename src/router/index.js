import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Display from "@/components/common/display";
import home from "@/views/home/home";
const routes = [
  {
    path: '/home',
    component:home
  },
  {
    path: '/category',
    component:Display
  },
  {
    path: '/shopcart',
    component:Display
  },
  {
    path: '/profile',
    component:Display
  },
  {
    path:'',
    redirect:'./home'
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router