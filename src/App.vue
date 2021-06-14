<template>
  <div id="app">

    <MainTabBar></MainTabBar>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainTabBar from "@/components/content/MainTabBar";

export default {
  name: 'app',
  components: {
    HelloWorld,
    MainTabBar
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
