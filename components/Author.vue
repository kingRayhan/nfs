<template>
  <div class="flex flex-col items-center space-y-4">
    <img class="rounded-full" :src="author.image" :alt="author.name" />
    <a href="#" class="text-lg">{{ author.name }}</a>
  </div>
</template>
<script>
export default {
  props: ["author"]
};
</script>
