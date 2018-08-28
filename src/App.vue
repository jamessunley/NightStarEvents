<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>

    <app-navbar></app-navbar>

    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from './Components/Header/NavBar.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Night Star Events'
    }
  },
  components: {
    'app-navbar': NavBar
  }
}
</script>

<style>

</style>
