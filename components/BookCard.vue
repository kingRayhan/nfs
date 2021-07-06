<template>
  <div>
    <nuxt-link :to="link">
      <img class="mx-auto" :src="thumbnail" :alt="book.title" />
    </nuxt-link>

    <div class="mt-3 text-center">
      <h3 class="text-white">
        <nuxt-link :to="link">
          {{ book.title }}
        </nuxt-link>
      </h3>
      <p class="text-gray-400">{{ book.author.name }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"],
  computed: {
    thumbnail() {
      return this.book.connction_edition.images[0];
    },
    link() {
      return {
        name: "books-bookId",
        params: { bookId: this.book.slug.current }
      };
    }
  }
};
</script>
