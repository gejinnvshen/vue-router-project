<template>
  <div id="app">
    <button @click="routerTo">methods传参</button>
    <p>child tells me:{{childWords}}</p>
    <child v-on:child-tell-me-something='listenToMyBoy'></child>
    <!--<hello-world></hello-world>   &lt;!&ndash; </hello-world>是调用 &ndash;&gt;-->
    <router-link to="/">首页</router-link>
    <router-link :to="{ path:'/test',query:{age:22} }">链接1</router-link>
    <router-link :to="{ name:'one',params:{name:'参数'} }">链接2</router-link>
    <!--<router-link to="/one/参数">链接2</router-link>-->
    <router-view></router-view>
  </div>
</template>

<script>
//   import test from './components/test'
//
// export default {    //我猜测这里暴露test组件，就是为了main.js能够引入test组件，然后index.html
//   name: 'App',
//   components: {
//     'test': test
//   }
// }
import child from './components/child'
export default {
  name: 'App',
  data () {
    return {
      message: '首页',
      childWords: ''
    }
  },
  components: {child},
  methods: {
    routerTo () {
      var imgUrl = 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
      this.$router.push({name: 'information', params: {userId: 123, imgurl: imgUrl}})
    },
    listenToMyBoy: function (msg) {
      this.childWords = msg
    }
  }
}

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
