<template>
  <div class="my-10 wrapper">
    <h2 class="text-4xl font-bold text-warning">
      Our Books
    </h2>
    <div class="grid grid-cols-2 gap-10 mt-16 md:grid-cols-5">
      <Author v-for="author in authors" :key="author.id" :author="author" />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      filterMode: 1,
      authors: [
        {
          id: 1,
          image:
            "https://ds.rokomari.store/rokomari110/people/a721f57c3_79420.jpg",
          name: "মুনজেরিন শহীদ"
        },
        {
          id: 2,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        },
        {
          id: 3,
          image:
            "https://s3-ap-southeast-1.amazonaws.com/rokomari110/people/22133bff8_47902%20.jpg",
          name: "আরিফ আজাদ"
        }
      ]
    };
  }
};
</script>
