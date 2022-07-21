/*配置路由器，在路由器管理路由*/
import VueRouter from "vue-router";

import login from "@/views/login";
import inDex from "@/views/inDex";
import TjMember from "@/components/tjmember/TjMember";
import MemberTable from "@/components/member/MemberTable";
import TjReportTable from "@/components/report/TjReportTable";
import memberNumbers from "@/components/report/memberNumbers";
import setMealProportion from "@/components/tjmember/setMealProportion";
import oprateData from "@/components/tjmember/oprateData";
import TzTable from "@/components/sxsz/TzTable";
import XlTable from "@/components/sxsz/XlTable";
import CrowdClassification from "@/components/ganyu/CrowdClassification";
import InterveneTemplate from "@/components/ganyu/InterveneTemplate";
import InterventionPlan from "@/components/ganyu/InterventionPlan";
import VisitTable from "@/components/ganyu/VisitTable";

import ShanShi from "@/components/knowledge/ShanShi";
import PingGu from "@/components/knowledge/PingGu";
import YunDong from "@/components/knowledge/YunDong";
import JianKang from "@/components/knowledge/JianKang";
import JiBing from "@/components/knowledge/JiBing";
import LieBiao from "@/components/order/LieBiao";
import YuYueSheZhi from "@/components/order/YuYueSheZhi";
import YuYueLieBiao from "@/components/order/YuYueLieBiao";
import JianChaXian from "@/components/order/JianChaXian";
import User from "@/components/system/User";
import Role from "@/components/system/Role";
import {Menu} from "element-ui";

const vueRouter = new VueRouter({
    // routes: [
    //     // 登录
    //     {
    //         //跳转地址(不写地址为默认打开组件)
    //         path:'/',
    //         //组件名
    //         name:'login',
    //         component:login,
    //     },
    //     // 首页
    //     {
    //         //跳转地址
    //         path:'/index',
    //         //组件名
    //         name:'inDex',
    //         component:inDex,
    //
    //         // 内容
    //         children: [
    //             /*  会员管理   */
    //             //会员统计
    //             {
    //                 path:'/huiYuanTongJi',
    //                 name:'TjMember',
    //                 component:TjMember,
    //             },
    //             //会员档案
    //             {
    //                 //跳转地址(不写地址为默认打开组件)
    //                 path: '/huiYuanDangAn',
    //                 //组件名
    //                 name: 'memberTable',
    //                 //引用组件
    //                 component: MemberTable,
    //             },
    //             //体检上传
    //             {
    //                 //跳转地址(不写地址为默认打开组件)
    //                 path: '/tiJianShangChuan',
    //                 //组件名
    //                 name: 'tjReportTable',
    //                 //引用组件
    //                 component: TjReportTable,
    //             },
    //
    //            /*    统计分析   */
    //             //会员数量
    //             {
    //                 path:'/huiYuanShuLiang',
    //                 name:'memberNumbers',
    //                 component:memberNumbers,
    //             },
    //             // 套餐占比
    //             {
    //                 path:'/taoCanZhanBi',
    //                 name:'setMealProportion',
    //                 component:setMealProportion,
    //             },
    //             // 运营数据
    //             {
    //                 path:'/yunYingShuJu',
    //                 name:'oprateData',
    //                 component:oprateData,
    //             },
    //             {
    //                 path:'/TZceping',
    //                 name:'TzTable',
    //                 component:TzTable,
    //             },
    //             {
    //                 path:'/Xlceping',
    //                 name:'XlTable',
    //                 component:XlTable,
    //             },
    //            /* 健康干预*/
    //             //模版管理
    //             {
    //                 path:'/RenQunFenLei',
    //                 name:'CrowdClassification',
    //                 component:CrowdClassification,
    //             },
    //             //人群分类
    //             {
    //                 path:'/MoBanGuanLi',
    //                 name:'InterveneTemplate',
    //                 component:InterveneTemplate,
    //             },
    //             //制定方案
    //             {
    //                 path:'/GanYuFangAn',
    //                 name:'InterventionPlan',
    //                 component:InterventionPlan,
    //             },
    //             //随访日记
    //             {
    //                 path:'/SuiFang',
    //                 name:'VisitTable',
    //                 component:VisitTable,
    //             },
    //
    //            /* 知识库*/
    //             //膳食库
    //             {
    //                 path:'/Shanshitable',
    //                 name:'Shanshi',
    //                 component:ShanShi,
    //             },
    //
    //             //疾病库
    //             {
    //                 path:'/JiBingtable',
    //                 name:'JiBing',
    //                 component:JiBing,
    //             },
    //             //健康方案
    //             {
    //                 path:'/JianKangtable',
    //                 name:'JianKang',
    //                 component:JianKang,
    //             },
    //             //运动方案
    //             {
    //                 path:'/YunDongtable',
    //                 name:'YunDong',
    //                 component:YunDong,
    //             },
    //             //评估建议
    //             {
    //                 path:'/PingGutable',
    //                 name:'PingGu',
    //                 component:PingGu,
    //             },
    //             //预约列表
    //             {
    //                 path:'/LieBiao',
    //                 name:'LieBiao',
    //                 component:LieBiao,
    //             },
    //             //预约设置
    //             {
    //                 path:'/YuYueSheZhi',
    //                 name:'YuYueSheZhi',
    //                 component:YuYueSheZhi,
    //             },
    //             //套餐管理
    //             {
    //                 path:'/YuYueLieBiao',
    //                 name:'YuYueLieBiao',
    //                 component:YuYueLieBiao,
    //             },
    //             //检查项
    //             {
    //                 path:'/JianChaXian',
    //                 name:'JianChaXian',
    //                 component:JianChaXian,
    //             },
    //             //系统设置
    //             //会员管理
    //
    //
    //             //菜单管理
    //             {
    //                 path:'/caidangl',
    //                 name:'menu',
    //                 component:Menu,
    //             },
    //             //角色管理
    //             {
    //                 path:'/Roletable',
    //                 name:'Role',
    //                 component:Role,
    //             },
    //             //用户管理
    //             {
    //                 path:'/Usertable',
    //                 name:'User',
    //                 component:User,
    //             }
          //  ]
       // },


   // ]
});

export default vueRouter;
