<template>
  <div class="my-10 wrapper">
    <h2 class="text-4xl font-bold text-warning">
      Our authors
    </h2>
    <h1 class="text-2xl " v-if="$fetchState.pending">Loading...</h1>
    <div class="grid grid-cols-2 gap-10 mt-16 md:grid-cols-5" v-else>
      <Author v-for="author in authors" :key="author.id" :author="author" />
    </div>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";
const query = groq`
  *[_type =="author"]{
    name,
    "image": image.asset->url
  }
`;

export default {
  data() {
    return {
      authors: []
    };
  },
  async fetch() {
    this.authors = await this.$sanity.fetch(query);
  }
};
</script>
