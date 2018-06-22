// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//引入element-ui
import ElementUI from 'element-ui';
//单独引入样式
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//引入axios发送请求
import axios from 'axios'
Vue.prototype.$axios=axios

//全局注册header组件
import CommonHeader from './components/common/CommonHeader'
Vue.component('CommonHeader',CommonHeader)

//全局注册分页组件
import Pagination from './components/common/Pagination'
Vue.component('Pagination',Pagination)

// import "../static/css/reset.less";

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
