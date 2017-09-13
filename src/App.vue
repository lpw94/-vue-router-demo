<template>
  <div id="app">
    <h3>{{msg}}</h3>
        <div>
            <router-link to="home">主页</router-link>
            <router-link to="news">新闻</router-link>
            <router-link to="hello">欢迎</router-link>
        </div>
        <div>
            <router-view></router-view>
        </div>
  </div>

</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: "你好vue"
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
