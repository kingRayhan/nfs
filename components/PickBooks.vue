<template>
  <div class="my-10 wrapper">
    <h2 class="text-4xl font-bold text-center text-warning">
      Pick your next book
    </h2>
    <!-- Filters -->
    <div class="mt-8 space-x-5 text-center">
      <button
        class="font-bold uppercase"
        :class="{ 'text-warning': filterMode === 1 }"
        @click="filterMode = 1"
      >
        new release
      </button>
      <button
        class="font-bold uppercase"
        :class="{ 'text-warning': filterMode === 2 }"
        @click="filterMode = 2"
      >
        coming soon
      </button>
      <button
        class="font-bold uppercase"
        :class="{ 'text-warning': filterMode === 3 }"
        @click="filterMode = 3"
      >
        most appreciated
      </button>
    </div>

    <div class="grid grid-cols-2 gap-10 mt-16 md:grid-cols-5">
      <BookCard v-for="book in books" :book="book" :key="book.id" />
    </div>
  </div>
</template>
<script>
import Book1 from "~/static/images/book1.png";
import Book2 from "~/static/images/book2.png";
import Book3 from "~/static/images/book3.png";
import Book4 from "~/static/images/book4.png";
export default {
  data() {
    return {
      filterMode: 1,
      books: [
        {
          id: 1,
          thumbnail: Book1,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 2,
          thumbnail: Book2,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 3,
          thumbnail: Book3,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 4,
          thumbnail: Book4,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 5,
          thumbnail: Book1,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 6,
          thumbnail: Book4,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 7,
          thumbnail: Book3,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 8,
          thumbnail: Book2,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 9,
          thumbnail: Book1,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        },
        {
          id: 10,
          thumbnail: Book4,
          name: "Banzai Banquets",
          author: "Riko Yamawaki"
        }
      ]
    };
  }
};
</script>
