<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="overflow-hidden rounded-md ">
      <img :src="author.image" :alt="author.name" />
    </div>
    <a href="#" class="text-lg">{{ author.name }}</a>
  </div>
</template>
<script>
export default {
  props: ["author"]
};
</script>
