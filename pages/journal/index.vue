<template>
  <div>
    <NavBar page="journal" />
    <img
      src="https://www.outdooradrentures.com/_nuxt/img/journal.898b170.jpg"
    />
    <div class="max-w-5xl m-auto p-4 my-12">
      <h1 class="mb-2 text-3xl font-semibold">Journals</h1>

      <ul class="grid gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3 py-8">
        <li v-for="article of articles" :key="article.slug">

          <!-- <NuxtLink :to="{ name: 'blog-slug', params: { slug: article.slug } }"> -->
          <NuxtLink :to="`/journal/${article.slug}`">
            <img
              v-if="article.img"
              :src="article.img"
              class="h-52 min-w-full object-cover mb-3 rounded-lg shadow"
            />
            <div
              class="flex flex-col justify-between xxlmin:w-1/2 xxlmax:w-full"
            >
              <p class="font-semibold mb-1 text-xs text-yellow-400">
                by {{ article.author.name }}
              </p>
              <h2 class="font-semibold mb-1 text-lg">{{ article.title }}</h2>
              <p class="text-sm">
                {{ article.description }}
              </p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'desc')
      .fetch()
    const tags = await $content('tags')
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags,
    }
  },
}
</script>

<style>
</style>