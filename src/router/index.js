/*配置路由器，在路由器管理路由*/
import VueRouter from "vue-router";

import login from "@/Logins/login";
import inDex from "@/Logins/inDex";
import User from "@/components/system/User";
import Role from "@/components/system/Role";
import userList from "@/views/core/user-info/list";
import borrowerDetail from "@/views/core/borrower/detail"
import borrowerList from "@/views/core/borrower/list"
import borrowInfoDetail from "@/views/core/borrow-info/detail"
import borrowInfoList from "@/views/core/borrow-info/list"
import dictList from "@/views/core/dict/list"
import lendDetail from "@/views/core/lend/detail"
import lendList from "@/views/core/lend/list"



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
                {
                    path:'/userList',
                    name:'userList',
                    component:userList,
                },
                {
                    path:'/borrowerList',
                    name:'borrowerList',
                    component:borrowerList,
                },
                {
                    path:'/borrowerDetail/:id',
                    name:'borrowerDetail',
                    component:borrowerDetail,
                },
                {
                    path:'/borrowInfoList',
                    name:'borrowInfoList',
                    component:borrowInfoList,
                },
                {
                    path:'/borrowInfoDetail/:id',
                    name:'borrowInfoDetail',
                    component:borrowInfoDetail,
                },
                {
                    path:'/dictList',
                    name:'dictList',
                    component:dictList,
                },
                {
                    path:'/lendDetail/:id',
                    name:'lendDetail',
                    component:lendDetail,
                },
                {
                    path:'/lendList',
                    name:'lendList',
                    component:lendList,
                },


            ]
        },
    ]
});

export default vueRouter;
