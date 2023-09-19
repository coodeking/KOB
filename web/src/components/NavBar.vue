<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-black">
  <div class="container">
    <router-link class="navbar-brand" :to="{name:'home'}">AI Clash</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link :class="route_name == 'pk_index' ? 'nav-link active btn btn-outline-primary rounded-pill': 'nav-link btn btn-outline-primary rounded-pill'" :to="{name: 'pk_index'}">对战</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'record_index' ? 'nav-link btn active btn-outline-secondary rounded-pill' : 'nav-link btn btn-outline-secondary rounded-pill'" :to="{name: 'record_index'}">对局列表</router-link>
        </li> 
        <li class="nav-item">
          <router-link :class="route_name == 'ranklist_index' ? 'nav-link btn active btn-outline-success rounded-pill' : 'nav-link btn btn-outline-success rounded-pill'" :to="{name: 'ranklist_index'}">排行榜</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'AI_index' ? 'nav-link btn active btn-outline-success rounded-pill' : 'nav-link btn btn-outline-success rounded-pill'" :to="{name: 'AIshare_index'}">AI分享</router-link>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">WJJ</a>
          <ul class="dropdown-menu">
            <router-link class="dropdown-item" :to="{name: 'user_bot_index'}">我的AI</router-link>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">退出登录</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>

</template>

<style scoped>
  .navbar-brand {
    animation: glow 2s infinite alternate;
  }

  @keyframes glow {
    0% {
      text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00, 0 0 20px #00ff00;
    }
    100% {
      text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 40px #00ff00;
    }
  }

  .navbar-nav > li.nav-item:not(:last-child) {
    margin-right: 10px;
  }
  
.btn-outline-primary.active,
.btn-outline-secondary.active,
.btn-outline-success.active {
    background-color: rgb(47, 47, 188);
}
</style>

<script>
import { useRoute } from 'vue-router'
import {computed} from 'vue'

export default {
    setup() {
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    }
}
</script>
