<template>
  <div>
    <nuxt-link to="/books/123">
      <img class="mx-auto" :src="book.thumbnail" alt="" />
    </nuxt-link>

    <div class="mt-3 text-center">
      <h3 class="text-white">
        <nuxt-link to="/books/123">{{ book.name }}</nuxt-link>
      </h3>
      <p class="text-gray-400">{{ book.author }}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["book"]
};
</script>
