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
                // {
                //    path:'/OrderEntry' ,
                //     component:resolve => require(['../components/page/OrderEntry.vue'],resolve),
                //     meta:{keepAlive: true}
                // },
                {
                    path:'/OrderEntry2' ,
                    component:resolve => require(['../components/page/OrderEntry2.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/OrderPreview' ,
                    component:resolve => require(['../components/page/OrderPreview.vue'],resolve),
                    meta:{keepAlive: true}
                },

                //订单统计
                {
                    path:'/ordersRtatistics' ,
                    component:resolve => require(['../components/page/ordersRtatistics.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CargoStatistics' ,
                    component:resolve => require(['../components/page/CargoStatistics.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CargoNexDetails' ,
                    component:resolve => require(['../components/page/CargoNexDetails.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CargoNexDetails2' ,
                    component:resolve => require(['../components/page/CargoNexDetails2.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CargoStatisticsDetails' ,
                    component:resolve => require(['../components/page/CargoStatisticsDetails.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/CargoStatisticsDetails2' ,
                    component:resolve => require(['../components/page/CargoStatisticsDetails2.vue'],resolve),
                    meta:{keepAlive: true}
                },


                //异常信息页面路由
                {
                    path:'/abnormalInformationDetails',
                    component:resolve => require(['../components/page/abnormalInformationDetails.vue'],resolve),
                    meta:{keepAlive: true}
                },
                {
                    path:'/abnormalInformation',
                    component:resolve => require(['../components/page/abnormalInformation.vue'],resolve),
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
                },

                {
                    path:'/NetCompany',
                    component:resolve =>require(['../components/page/NetCompany.vue'],resolve),
                    meta:{keepAlive: true}
                }

            ]
        },
        {
            path: '/login',
            component: resolve => require(['../components/page/Login.vue'], resolve)

        },


    ]
})
