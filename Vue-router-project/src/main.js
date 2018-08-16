// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */

/*  // 全局导航钩子
router.beforeEach(function (to, from, next) {
  var logged_in = false;
  if (!logged_in && to.path == '/test') // to.path是点击前往的组件
    next('/one'); // 跳转的地址
  else
    next(); // 正常跳转
})
*/
new Vue({
  el: '#app',
  router,
  components: { App }, // App就是App.vue组件
  template: '<App/>' // 模版名要跟组件名一样
})
console.log(router)
