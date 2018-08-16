<template>
  <div class="hello">
    <h1>{{ msg }}我是{{$route.params.name}}</h1>
    <button @click="write">打印接收到的参数</button>
  </div>
</template>

<script>
export default { /* 导出、暴露 */
  name: 'one', // name通常为组件名，小写(HelloWorld)
  data () {
    return {
      msg: 'mile'
    }
  },
  methods:{
    write () {
      console.log(this.$route.params.name)
    }
  },
  beforeRouteEnter:function (to,from,next) {
    var from_path = '/';
    if(from.path == from_path)
      next();
    else
      next(false);
  }
}

</script>
