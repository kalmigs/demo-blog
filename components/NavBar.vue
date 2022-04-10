<template>
  <div class="h-20 px-3 flex items-center">
    <NuxtLink to="/" class="mr-auto">
      <img
        v-if="page === 'home'"
        alt="alt message"
        src="~assets/images/logo-white.png"
        height="70"
        width="70"
      />
      <img
        v-else
        alt="alt message"
        src="~assets/images/logo-dark.png"
        height="70"
        width="70"
      />
    </NuxtLink>
    <NuxtLink class="mr-8" :class="{ 'text-white': isHome }" to="/journal"
      >Journal</NuxtLink
    >
  </div>
</template>

<script>
export default {
  props: ['page'],
  data() {
    return { isHome: this.page === 'home' }
  },
}
</script>