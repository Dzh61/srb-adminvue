/*配置路由器，在路由器管理路由*/
import VueRouter from "vue-router";

import login from "@/Logins/login";
import inDex from "@/Logins/inDex";
import {Menu} from "element-ui";

const vueRouter = new VueRouter({
 routes: [
  // 登录
  {
   //跳转地址(不写地址为默认打开组件)
   path:'/',
   //组件名
   name:'login',
   component:login,
  },
  //  首页
  {
   //跳转地址
   path:'/index',
   //组件名
   name:'inDex',
   component:inDex,

   children: [
  //菜单管理
  {
   path:'/caidangl',
   name:'menu',
   component:Menu,
  }
       ]
      },
   ]
});

export default vueRouter;
