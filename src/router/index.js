/*配置路由器，在路由器管理路由*/
import VueRouter from "vue-router";

import login from "@/Logins/login";
import inDex from "@/Logins/inDex";
import {Menu} from "element-ui";
import User from "@/components/system/User";
import Role from "@/components/system/Role";

const vueRouter = new VueRouter({
    routes: [
        // 登录
        {
            //跳转地址(不写地址为默认打开组件)
            path: '/',
            //组件名
            name: 'login',
            component: login,
        },
        //  首页
        {
            //跳转地址
            path: '/inDex',
            //组件名
            name: 'inDex',
            component: inDex,

            children: [
                //菜单管理
                {
                    path: '/caidangl',
                    name: 'menu',
                    component: Menu,
                },

                //菜单管理
                {
                    path:'/caidangl',
                    name:'menu',
                    component:Menu,
                },
                //角色管理
                {
                    path:'/Roletable',
                    name:'Role',
                    component:Role,
                },
                //用户管理
                {
                    path:'/Usertable',
                    name:'User',
                    component:User,
                },
            ]
        },
    ]
});

export default vueRouter;
