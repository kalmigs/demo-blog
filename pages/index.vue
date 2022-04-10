<template>
  <div>
    <div class="h-screen bg">
      <NavBar page="home"/>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>

<style scoped>
.bg {
  background-image: url('https://www.outdooradrentures.com/_nuxt/img/home.c8bff47.jpg');
  background-size: cover;
}
</style>
F