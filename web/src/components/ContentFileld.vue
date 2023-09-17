<template>
<div class="container content-field">
  <div class="card dark-blue-background">
    <div class="card-body white-text">
      <slot></slot>
    </div>
  </div>
</div>
</template>

<style scoped>
  .dark-blue-background {
    background-color: #112864;
  }
  
  .white-text {
    color: white;
  }

  div.content-field {
    margin-top: 20px;
  }
</style>

<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>
