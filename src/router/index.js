import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [

        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/home',
            component: resolve => require(['../components/common/Home.vue'], resolve),
            children:[
                {
                    path: '/',
                    component: resolve => require(['../components/page/Readme.vue'], resolve),
                    meta:{keepAlive: true}
                },
                {
                    path: '/OrderQuery',                                                             // 用户管理
                    component: resolve => require(['../components/page/OrderQuery.vue'], resolve),
                    meta:{keepAlive: true}
                },
                {
                   path:'/OrderEntry' ,
                    component:resolve => require(['../components/page/OrderEntry.vue'],resolve),
                    meta:{keepAlive: true}
                },
                //订单统计
                {
                    path:'/ordersRtatistics' ,
                    component:resolve => require(['../components/page/ordersRtatistics.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/BoxType' ,
                    component:resolve => require(['../components/page/BoxType.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/DailyStatistical',
                    component:resolve => require(['../components/page/DailyStatistical.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CustomerInformation',
                    component:resolve => require(['../components/page/CustomerInformation.vue'],resolve),
                    meta:{keepAlive: true}
                },
                //客户服务
                {
                    path:'/SenderManagement' ,
                    component:resolve => require(['../components/page/SenderManagement.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/RecipientManagement',
                    component:resolve =>require(['../components/page/RecipientManagement.vue'],resolve),
                    meta:{keepAlive: true}
                }


                // {
                //     path: '/vuetable',                                                              // 角色管理
                //     component: resolve => require(['../components/page/VueTable.vue'], resolve)     // vue-datasource组件
                // },
                // {
                //     path: '/power',                                                                 // 权限管理
                //     component: resolve => require(['../components/page/Power.vue'], resolve)
                // },
                // {
                //     path: '/compony',                                                               // 公司管理
                //     component: resolve => require(['../components/page/compony.vue'], resolve)
                // },
                // {
                //     path:'/userAdd',                                                           // 冰骑士 修改信息   查看信息
                //     component: resolve => require(['../components/page/user/userAdd.vue'], resolve)
                // },
                // {
                //     path: '/oldCharts',                                                              // 冰骑士管理
                //     component: resolve => require(['../components/page/OldCharts.vue'], resolve)
                // },
                //
                // {
                //     path: '/iceAudit',                                                              // 冰骑士审核
                //     component: resolve => require(['../components/page/iceAudit.vue'], resolve)
                // },
                // {
                //     path: '/audit',                                                              // 冰骑士审核页面
                //     component: resolve => require(['../components/page/audit.vue'], resolve)
                // },
                // {
                //     path: '/icePhone',                                                              // 冰骑士 手机号
                //     component: resolve => require(['../components/page/icePhone.vue'], resolve)
                // },
                // {
                //     path: '/icePhoneSee',                                                              // 冰骑士 手机号  查看页面
                //     component: resolve => require(['../components/page/icePhoneSee.vue'], resolve)
                // },
                // {
                //     path:'/waybill',                                                           // 运单管理
                //     component: resolve => require(['../components/page/management/waybill.vue'], resolve)
                // },
                // {
                //     path:'/billType',                                                           // 运单管理   添加
                //     component: resolve => require(['../components/page/management/billType.vue'], resolve)
                // },
                // {
                //     path:'/billDetails',                                                           // 运单管理   添加
                //     component: resolve => require(['../components/page/management/billDetails.vue'], resolve)
                // },
                //
                // {
                //     path: '/commission',
                //     component: resolve => require(['../components/page/commission.vue'], resolve)    // 冰骑士佣金管理
                // },
                // {
                //     path: '/auding',
                //     component: resolve => require(['../components/page/auding.vue'], resolve)     // 提现审核管理
                // },
                // {
                //     path: '/bankCard',
                //     component: resolve => require(['../components/page/bankCard.vue'], resolve)     // 银行卡信息
                // },
                // {
                //     path: '/problem',
                //     component: resolve => require(['../components/page/problem.vue'], resolve)     // wen题反馈
                // },
                // {
                //     path: '/tmsOrder',
                //     component: resolve => require(['../components/page/tmsOrder.vue'], resolve)     // TMS订单
                // }
            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)

        },
    ]
})
