<template>
  <div class="mt-20 mb-10 wrapper">
    <h2 class="text-4xl font-bold text-center text-warning">
      Latest unboxing
    </h2>

    <!-- Filters -->
    <div class="mt-8 space-x-5 text-center">
      <button class="font-bold uppercase text-warning">unboxing</button>
      <button class="font-bold uppercase">reviews</button>
    </div>

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
  </div>
</template>
