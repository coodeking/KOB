<template>
  <nav-bar />
  <router-view></router-view>
</template>

<style>
body{
  background-image: url("./assets/images/background2.png");
  background-size: cover;
}
</style>

<script>
import NavBar from './components/NavBar.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"

  export default{
    components:{
      NavBar
    }
  }
</script>
