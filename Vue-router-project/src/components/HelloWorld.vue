<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>{{user.firstName}}</p>
    <p v-text="user.lastName"></p>
  </div>
</template>

<script>
export default { /* 导出、暴露 */
  name: 'helloWorld', // name通常为组件名，小写(HelloWorld)
  data () {
    return {
      msg: '组件1',
      user: {
        firstName: 'gejin',
        lastName: 'wo'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>     /*加上scoped，<style>标签里的样式只对当前组件起作用*/
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
