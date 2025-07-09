<template>
  <DefaultLayout>
    <div class="bg-bgdark text-white font-techno min-h-screen px-4 md:px-20 py-12">
      <h2 class="text-3xl text-primary font-bold mb-8 text-center">
        Media Timeline
      </h2>

      <div class="space-y-6">
        <TimelineItem
          title="Workshop on IoT"
          year="2024"
          description="An interactive workshop introducing Internet of Things to students."
          image="/media/event1.jpg"
        />
        <TimelineItem
          title="Robotics Expo"
          year="2023"
          description="Showcasing student‑built robots at the annual tech fest."
          image="/media/event2.jpg"
        />
        <TimelineItem
          title="Hackathon 2.0"
          year="2022"
          description="48‑hour coding marathon for smart systems solutions."
          image="/media/event3.jpg"
        />
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
import TimelineItem from '../components/ui/TimelineItem.vue'
</script>

<style scoped>
.hover\:glow:hover {
  box-shadow: 0 0 20px #00fff7, 0 0 40px #00fff7;
}
</style>
