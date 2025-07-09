<template>
  <div
    class="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-black bg-opacity-30 rounded shadow hover:glow transition"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full md:w-48 rounded object-cover"
    />
    <div>
      <h3 class="text-xl text-primary font-bold">{{ title }}</h3>
      <p class="text-sm text-secondary">{{ year }}</p>
      <p class="mt-2 text-sm">{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  year: String,
  description: String,
  image: String
})
</script>
