<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{user.firstName}}今年{{$route.query.age}}</p>
    <p v-text="user.lastName"></p>
    <button @click="write">打印接收到的参数</button>
    <button @click="goBack()">后退</button>
    <button @click="goAchead()">前进</button>
    <button @click="goHome()">首页</button>
    <router-link to="/test/child">test组件嵌套进来的子组件child</router-link>
    <!--<router-link to="/test/childtwo">test组件嵌套进来的子组件childtwo</router-link>-->
    <router-link :to="{ path: '/test/childtwo'}" append>test组件嵌套进来的子组件childtwo</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default { /* 导出、暴露 */
  name: 'test', // name通常为组件名，小写(HelloWorld)
  data () {
    return {
      msg: '组件2',
      user: {
        firstName: 'xiao',
        lastName: 'xiao'
      }
    }
  },
  methods: {
    write () {
      console.log(this.$route.query.age)
    },
    goBack () {
      this.$router.go(-1);
    },
    goAchead () {
      this.$router.go(1);
    },
    goHome () {
      this.$router.push('/');
    }
  }
}
</script>
