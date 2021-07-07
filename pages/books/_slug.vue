<template>
  <div v-if="$fetchState.pending" class="my-10 wrapper">
    <h1 class="text-2xl">Loading....</h1>
  </div>
  <div class="my-10 wrapper" v-else>
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="text-center carousel" v-if="book.connction_edition">
        <carousel :perPage="1">
          <slide :key="image" v-for="image in book.connction_edition.images">
            <div>
              <img class="mx-auto rounded-md" :src="image" />
            </div>
          </slide>
        </carousel>
        <p class="mt-10 text-2xl text-warning">Collection Edition</p>
      </div>
      <div class="text-center carousel" v-if="book.paperback_edition">
        <carousel :perPage="1">
          <slide :key="image" v-for="image in book.paperback_edition.images">
            <div>
              <img class="mx-auto rounded-md" :src="image" />
            </div>
          </slide>
        </carousel>
        <p class="mt-10 text-2xl text-warning">Paperback Edition</p>
      </div>
    </div>

    <!-- Content start -->
    <div class="mx-auto my-20 md:w-8/12">
      <h1 class="text-2xl font-bold">
        {{ book.title }}
      </h1>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div class="col-span-12 md:col-span-8">
          <!-- meta infos -->
          <div class="flex my-5 space-x-4">
            <div>
              <p class="font-bold">Publication:</p>
              <p class="font-bold">ISBN:</p>
              <!-- <p class="font-bold">Pages:</p> -->
              <!-- <p class="font-bold">Price:</p> -->
            </div>
            <div>
              <p>{{ book.publication_name }}</p>
              <p>{{ book.isbn }}</p>
              <!-- <p>458</p>
              <p>458 BDT</p> -->
            </div>
          </div>

          <p>
            {{ book.description }}
          </p>
        </div>
        <div class="col-span-12 md:col-span-4" v-if="book.author">
          <h3 class="text-lg font-bold">About the author</h3>
          <div class="flex items-center my-5 space-x-2">
            <div class="overflow-hidden rounded-md w-14 h-14 aspect-w-1">
              <img
                class="object-cover"
                :src="book.author.image"
                :alt="book.author.name"
              />
            </div>

            <div>
              <p>{{ book.author.name }}</p>
            </div>
          </div>
          <p>
            {{ book.author.description }}
          </p>
        </div>
      </div>
    </div>
    <!-- Content end -->

    <!-- unboxing video start -->
    <h2 class="text-4xl font-bold text-center text-warning">Latest unboxing</h2>

    <div class="grid grid-cols-2 gap-10 mt-16 md:grid-cols-5">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
    <!-- unboxing video end -->
  </div>
</template>

<script>
import { groq } from "@nuxtjs/sanity";

const query = groq`
*[_type=="book" && slug.current == $slug][0]{
  title,
  slug,
  description,
  publication_name,
  isbn,
  connction_edition{
    price,
    "images": images[].asset->url
  },
  paperback_edition{
    price,
    "images": images[].asset->url
  },
  author->{
    name,
    description,
    "image": image.asset->url
  },
  unboxing_videos[]->{
    reviewer,
    title,
    "thumbnail": thumbnail.asset->url,
    youtube_id
  }
}
`;

export default {
  head() {
    return {
      title: this.book.title || "Please wait..."
    };
  },
  data() {
    return {
      book: {}
    };
  },
  async fetch() {
    this.book = await this.$sanity.fetch(query, {
      slug: this.$route.params.slug
    });
  }
};
</script>
