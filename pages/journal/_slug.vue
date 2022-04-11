<template>
  <div>
    <NavBar page="journal" />
    <article class="max-w-5xl m-auto">
      <div class="my-8">
        <img
        class="h-96 min-w-full object-cover"
        :src="article.img"
        :alt="article.alt"
      />
      </div>

      <div class="my-16">
        <h1 class="font-bold text-5xl mb-2">{{ article.title }}</h1>
        <p class="font-semibold text-xl">{{ article.description }}</p>
        <p>
          <span class="font-semibold mr-2"
            >Written by {{ article.author.name }}</span
          >
          <span>{{ formatDate(article.updatedAt) }}</span>
        </p>
      </div>

      <nuxt-content :document="article" />
    </article>
  </div>
</template>


<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style>
.nuxt-content p {
  margin-bottom: 20px;
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
  padding-bottom: 2rem;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
  color: #484848;
}
</style>
