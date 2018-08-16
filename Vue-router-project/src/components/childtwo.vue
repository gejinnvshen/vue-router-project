<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
  export default { /* 导出、暴露 */
    name: 'childtwo', // name通常为组件名，小写(HelloWorld)
    data () {
      return {
        msg: 'test的子组件2'
      }
    }
  }
</script>
