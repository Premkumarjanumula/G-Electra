<template>
  <div
    class="flex flex-col items-center p-4 bg-black bg-opacity-30 rounded shadow hover:glow transition"
  >
    <img
      :src="image"
      :alt="name"
      class="w-16 h-16 md:w-20 md:h-20 object-contain mb-2"
    />
    <h3 class="text-lg text-primary font-bold">{{ name }}</h3>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  image: String
})
</script>
