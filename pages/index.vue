<template>
  <div>
      <NavBar page="home" class="fixed w-full"/>
    <div class="h-screen bg flex justify-center items-center">
      <div
        data-v-65066cf5=""
        class="max-w-screen-lg flex-auto lg:mb-0 mb-12 mx-auto px-4"
      >
        <h1
          data-v-65066cf5=""
          class="leading-tight text-white text-6xl font-semibold my-4"
        >
          Outdoor Adrentures
        </h1>
        <p
          data-v-65066cf5=""
          class="leading-tight mb-4 mt-2 text-3xl font-extralight text-white"
        >
          Rent anything for your next outdoor adventure.
        </p>
        <div
          data-v-6272c6ad=""
          data-v-65066cf5=""
          class="bg-white lg:flex px-4 py-6 rounded-lg mb-4 shadow items-center"
        >
          <div
            data-v-ee3a614e=""
            data-v-6272c6ad=""
            class="relative w-full border-b border-border lg:border-0"
            value="[object Object]"
          >
            <label
              data-v-ee3a614e=""
              for="search"
              class="font-semibold text-gray"
              >Where</label
            >
            <input
              data-v-ee3a614e=""
              name="search"
              placeholder="is your next adventure destination?"
              class="
                border-0
                outline-none
                pb-md
                placeholder-placeholder
                pt-2
                rounded
                w-full
              "
            />
          </div>
          <div
            data-v-8f2e498e=""
            data-v-6272c6ad=""
            class="relative w-full lg:pr-4 lg:py-0 py-6"
          >
            <div
              data-v-8f2e498e=""
              class="flex items-center justify-between w-full"
            >
              <div data-v-8f2e498e="" class="w-full">
                <div
                  data-v-8f2e498e=""
                  class="cursor-pointer font-semibold pb-sm text-md"
                >
                  When
                </div>
                <!---->
                <button
                  data-v-8f2e498e=""
                  class="
                    bg-white
                    flex
                    focus:outline-none
                    items-center
                    justify-between
                    outline-none
                    px-0
                    rounded
                    text-placeholder
                    w-full
                  "
                >
                  are you planning to go?
                </button>
              </div>
              <svg
                data-v-8f2e498e=""
                height="10px"
                width="10px"
                xmlns="http://www.w3.org/2000/svg"
                class="icon sprite-icons"
              >
                <use
                  data-v-8f2e498e=""
                  href="/_nuxt/6ac4d20dcd38618acffd3e8c61eb623f.svg#i-arrow"
                  xlink:href="/_nuxt/6ac4d20dcd38618acffd3e8c61eb623f.svg#i-arrow"
                ></use>
              </svg>
            </div>
            <div data-v-8f2e498e="" class="menu"></div>
          </div>
          <button
            data-v-c3c6a0d0=""
            data-v-6272c6ad=""
            class="
              font-semibold
              hover:text-white
              outline-none
              rounded
              shadow
              lg:whitespace-no-wrap
              search-button
              text-white
              bg-green
              w-full
              lg:w-1/2
              h-20
            "
          >
            Find your adrenture
          </button>
        </div>
        <a
          data-v-65066cf5=""
          href="/search?nearby=true"
          class="font-semibold hover:opacity-75 text-white underline"
        >
          or discover the best Outdoor Adrentures near me
        </a>
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
F