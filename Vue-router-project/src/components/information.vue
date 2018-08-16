
<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <img v-bind:src="this.$route.params.imgurl"/>
    <p>接收到app.vu传来的参数{{this.$route.params.userId}}</p>
  </div>
</template>

<script>
export default { /* 是导出模块,供其他模块进行调用 */
  name: 'information', // name通常为组件名，小写(HelloWorld)
  data () {
    return {
      msg: '图片'
    }
  },
  methods:{

  }
}
</script>
