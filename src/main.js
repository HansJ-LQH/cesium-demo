import Vue from 'vue';
import * as Cesium from 'cesium';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入全局组件
import Components from './components/index.js';
// 引入公共样式
import Public from './assets/css/public.css';
// 引入Cesium样式
import 'cesium/Build/Cesium/Widgets/widgets.css';
// 配置Cesium路径
window.CESIUM_BASE_URL = '/Cesium/';
window.Cesium = Cesium;

Vue.use(Public);
Vue.use(Components); // 注册全局组件

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
