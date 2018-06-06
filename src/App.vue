<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted() {
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例
      console.log(to)
      console.log(from)
    })
  }

}
</script>

<style lang="less">
  @import "assets/css/reset";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
html,body{
  padding: 0;
  margin: 0;
}
.head{
  width: 1200px;
  height: 80px;
  line-height: 80px;
  margin: 0 auto;
}
.head a{
  position: relative;
  display: inline-block;
  height: 40px;
  line-height: 40px;
  padding: 0 15px;
  text-decoration: none;
  color: #000;
}
.head a:hover{
  color: #37a5e9;
}
.selec {
  color: #37a5e9!important;
}
  #menu {
    position: relative;
    .menubg {
      position: absolute;
      background: #009fe9;
      height: 2px;
      bottom: 17px;
      z-index: 1;
      transition: all .3s;
      left: 0
    }

  }

</style>
