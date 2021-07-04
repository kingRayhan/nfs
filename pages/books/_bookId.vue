<template>
  <div class="my-10 wrapper">
    <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div class="text-center carousel">
        <carousel :perPage="1">
          <slide>
            <div>
              <img
                class="rounded-md"
                src="https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80"
              />
            </div>
          </slide>
        </carousel>
        <p class="mt-10 text-2xl text-warning">Collection Edition</p>
      </div>
      <div class="text-center carousel">
        <carousel :perPage="1">
          <slide>
            <div>
              <img
                class="rounded-md"
                src="https://images.unsplash.com/photo-1558901357-ca41e027e43a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=851&q=80"
              />
            </div>
          </slide>
        </carousel>
        <p class="mt-10 text-2xl text-warning">Paperbag Edition</p>
      </div>
    </div>

    <!-- Content start -->
    <div class="w-8/12 mx-auto my-20">
      <h1 class="text-2xl font-bold">
        E-Business and E-Commerce Management: Strategy, Implementation and
        Practice
      </h1>

      <div class="grid grid-cols-1 gap-10 md:grid-cols-12">
        <div class="col-span-8">
          <!-- meta infos -->
          <div class="flex my-5 space-x-4">
            <div>
              <p class="font-bold">Publication:</p>
              <p class="font-bold">ISBN:</p>
              <p class="font-bold">Pages:</p>
              <p class="font-bold">Price:</p>
            </div>
            <div>
              <p>HotDog Publisher</p>
              <p>4#5874569</p>
              <p>458</p>
              <p>458 BDT</p>
            </div>
          </div>

          <p>
            Physiological respiration involves the mechanisms that ensure that
            the composition of the functional residual capacity is kept
            constant, and equilibrates with the gases dissolved in the pulmonary
            capillary blood, and thus throughout the body. Thus, in precise
            usage, the words breathing and ventilation are hyponyms, not
            synonyms, of respiration; but this prescription is not consistently
            followed, even by most health care providers, because the term
            respiratory rate (RR) is a well-established term in health care,
            even though it would need to be consistently replaced with
            ventilation rate if the precise usage were to be followed.
          </p>
        </div>
        <div class="col-span-4">
          <h3 class="text-lg font-bold">About the author</h3>
          <div class="flex items-center my-5 space-x-2">
            <img
              class="w-12 h-12 rounded-md"
              src="https://uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
            />
            <div>
              <p>Jane Cooper</p>
            </div>
          </div>
          <p>
            In the eighteenth century the German philosopher Immanuel Kant
            developed a theory of knowledge in which knowledge about space can
            be both a priori and synthetic. According to Kant, knowledge about
            space is synthetic, in that statements about space
          </p>
          <a href="#" class="underline">learn more</a>
        </div>
      </div>
    </div>
    <!-- Content end -->

    <!-- unboxing video start -->
    <h2 class="text-4xl font-bold text-center text-warning">
      Latest unboxing
    </h2>

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
export default {
  head() {
    return {
      title: "ee"
    };
  }
};
</script>
