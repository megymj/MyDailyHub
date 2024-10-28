<script>
import NotionSignup from './components/NotionSignup.vue'

export default {
  name: 'App',
  components: {
    NotionSignup
  }
}
</script>

<template>
  <!--  <div id="app">-->
  <NotionSignup />
  <!--  </div>-->
</template>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>