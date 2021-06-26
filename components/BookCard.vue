<template>
  <div>
    <a href="#">
      <img class="mx-auto" :src="book.thumbnail" alt="" />
    </a>

    <div class="mt-3 text-center">
      <h3 class="text-white">
        <a href="#">{{ book.name }}</a>
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
