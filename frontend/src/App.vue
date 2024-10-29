<script>
import SignUp from './components/Signup.vue'
import WelcomePage from "@/components/WelcomePage.vue";

export default {
  name: 'App',
  components: {
    WelcomePage,
    SignUp
  }
}
</script>

<template>
  <router-view/>
</template>


<style>

</style>