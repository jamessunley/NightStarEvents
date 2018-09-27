<template>
  <div id="app">

    <app-header></app-header>
    <app-navbar></app-navbar>
        <div class="wrapper">
          <div class="content">
    <router-view></router-view>
    </div>
        </div>
    <app-footer></app-footer>

  </div>
</template>

<script>
import NavBar from './Components/Header/NavBar.vue'
import Header from './Components/Header/Header.vue'
import Footer from './Components/Footer.vue';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Night Star Events'
    }
  },
  components: {
    'app-navbar': NavBar,
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style>
body {
   background-image: url("./assets/background.jpg");
   background-color: #cccccc;
   
}

.wrapper{
  display: flex;
  min-height: 65vh;
  flex-direction: column;
  
}

.content{
  flex: 1 0 auto;
}
</style>
