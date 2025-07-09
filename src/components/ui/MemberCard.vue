<template>
  <div
    class="flex flex-col items-center p-4 bg-black bg-opacity-30 rounded shadow hover:glow transition"
  >
    <img
      :src="photo"
      :alt="name"
      class="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mb-2"
    />
    <h4 class="text-md text-primary font-bold">{{ name }}</h4>
    <p class="text-sm text-secondary">{{ role }}</p>
    <a
      :href="linkedin"
      target="_blank"
      class="mt-1 text-xs text-blue-400 hover:underline"
    >
      LinkedIn
    </a>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  photo: String,
  linkedin: String
})
</script>
