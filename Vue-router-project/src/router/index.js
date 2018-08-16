import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import test from '@/components/test'
import one from '@/components/one'
import child from '@/components/child'
import childtwo from '@/components/childtwo'
import information from '@/components/information'

Vue.use(Router) /* Vue.use(Router) 作用是用来安装vue-router这个插件的，可以扩展vue的功能， */

export default new Router({
  routes: [ /* 进行路由配置，规定“/”引入到HelloWorld组件 */
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      children: [
        {
          path: '/test/child',
          name: 'child',
          component: child
        },
        {
          path: '/test/childtwo',
          name: 'childtwo',
          component: childtwo
        }
      ]
    },
    {
      // path: '/one/:name',
      path: '/one',
      name: 'one',
      component: one,
      beforeEnter: (to, from, next) => { // 路由内钩子用beforeEnter方法
        console.log(to)
        console.log(from)
        // next('/test');
        // next(false);
        var is_login = false;
        if (!is_login) // if (!is_login && from.path == '/')
          next(true);
        else
          next();
      }
    },
    {
      path: '/information',
      name: 'information',
      component: information
    }
  ]
})
