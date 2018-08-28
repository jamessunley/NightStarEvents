<template>
  <div id="app">
    
    <app-header></app-header>
    <app-navbar></app-navbar>
    <router-view></router-view>

  </div>
</template>

<script>
import NavBar from './Components/Header/NavBar.vue'
import Header from './Components/Header/Header.vue'

export default {
  name: 'app',
  data () {
    return {
      msg: 'Night Star Events'
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-header': Header
  }
}
</script>

<style>

</style>
