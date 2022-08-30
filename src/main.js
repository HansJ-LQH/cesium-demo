import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
// 引入全局组件
import Components from './components/index.js'
// 引入公共样式
import Public from './assets/css/public.css';

Vue.use(Public);
Vue.use(Components) // 注册全局组件

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
