<template>
  <div class="flex items-center justify-between my-5 wrapper">
    <a href="#">
      <Logo />
    </a>

    <div class="flex space-x-4">
      <nuxt-link
        class="text-lg capitalize"
        v-for="link in menu"
        :key="link.label"
        :to="link.to"
      >
        {{ link.label }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        {
          label: "Home",
          to: "/"
        },
        {
          label: "books",
          to: "/books"
        },
        {
          label: "authors",
          to: "/authors"
        },
        {
          label: "bookzone",
          to: "/bookzone"
        }
      ]
    };
  }
};
</script>
