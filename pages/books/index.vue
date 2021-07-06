<template>
  <div class="my-10 wrapper">
    <h2 class="text-4xl font-bold text-warning">
      Our Books
    </h2>

    <h1 class="text-2xl " v-if="$fetchState.pending">Loading...</h1>
    <div v-else class="grid grid-cols-2 gap-10 mt-16 md:grid-cols-5">
      <BookCard v-for="book in books" :book="book" :key="book.id" />
    </div>
  </div>
</template>
<script>
import { groq } from "@nuxtjs/sanity";

const query = groq`
  *[_type=="book"]{
    title,
    slug,
    connction_edition{
      price,
      "images": images[].asset->url
    },
    author->{
      name
    }
  }
`;
export default {
  head: {
    title: "Our all books"
  },
  data() {
    return {
      books: []
    };
  },
  async fetch() {
    this.books = await this.$sanity.fetch(query);
  }
};
</script>
