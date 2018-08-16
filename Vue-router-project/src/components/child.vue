<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="onClickMe">open mouse</button>
  </div>
</template>

<script>
  export default { /* 导出、暴露 */
    name: 'child', // name通常为组件名，小写(HelloWorld)
    data () {
      return {
        msg: 'test的子组件'
      }
    },
    methods: {
      onClickMe:function(){
        this.$emit('child-tell-me-something',this.msg);
      }
    }
  }
</script>
