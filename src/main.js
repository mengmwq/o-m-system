import 'babel-polyfill';
import promise from 'es6-promise';
promise.polyfill();
import Vue from 'vue';

import App from './App';
import router from './router';
import axios from 'axios';
import html2canvas from 'html2canvas';//加导出pdf
import JsPDF from 'jspdf';
import Print from 'vue-print-nb'
Vue.use(Print);
// import Navigation from 'vue-navigation'  //这是缓存的插件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
// import "babel-polyfill";
import vueScrollwatch from "./lib/vue-scrollwatch"
Vue.use(vueScrollwatch)
import VDistpicker from 'v-distpicker'
Vue.component('v-distpicker', VDistpicker)
// Vue.use(Navigation, {router})
Vue.use(ElementUI);
Vue.prototype.$axios = axios;
// Vue.config.productionTip = false;// 去除console提示

//判断 开发环境 生产环境
if (process.env.NODE_ENV !== 'development') {
    Vue.prototype.URL_API = 'http://out.ccsc58.cc';
  } else {
    Vue.prototype.URL_API = 'api/';
}

// 全局路由守护 路由跳转时  判断是否登录
router.beforeEach((to, from, next) => {
    // 已登录,直接进入目标页面
    let TrueName = window.sessionStorage.getItem('TrueName');
    if(TrueName == ''|| TrueName == undefined){
        if(to.path=='/login'){//如果是登录页面路径，就直接next()
            next();
          }else{//不然就跳转到登录；
            next('/');
          }

    }else{
        next();
    }
  })




new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
