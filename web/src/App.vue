<template>
  <div>
    <div>AI昵称:{{AI_name}}</div>
    <div>AI战力:{{AI_rating}}</div>  
  </div>
  <router-view></router-view>
</template>

<style>
body{
  background-image: url("@/assets/background2.png");
  background-size: cover;
}
</style>

<script>
import $ from 'jquery';
import { ref } from 'vue';
 
export default {
  name:"APP",
  setup:() => {
    let AI_name = ref("");
    let AI_rating = ref("");

    $.ajax({
      url:"http://127.0.0.1:3000/pk/getbotinfo/",
      type:"get",
      success: resp => {
        AI_name.value = resp.name,
        AI_rating.value = resp.rating
      } 
    })

    return {
      AI_name,
      AI_rating
    }
  }
}
</script>
