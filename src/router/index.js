import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Display from "@/components/common/display";
import home from "@/views/home/home";
import Detail from "@/views/detail/Detail";
import Cart from "@/views/cart/Cart";

const routes = [
  {
    path:'',
    redirect:'./home'
  },
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
    component:Cart
  },
  {
    path: '/profile',
    component:Display
  },
  {
    path:'/detail/:iid',
    component:Detail
  }


]

const router = new VueRouter({
  routes,
  //mode: 'history'
})

export default router