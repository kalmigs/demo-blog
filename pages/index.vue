<template>
  <div>
    <div class="h-screen bg">
      <div class="h-20 px-3 flex items-center">
        <img
          alt="alt message"
          src="~assets/images/logo-white.png"
          height="70"
          width="70"
          class="mr-auto"
        />
        <NuxtLink class="text-white mr-8" to="/journal">Journal</NuxtLink>
      </div>
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
