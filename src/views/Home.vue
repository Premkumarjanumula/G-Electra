<template>
  <DefaultLayout>
    <div class="bg-bgdark text-white font-techno min-h-screen">
      <!-- Hero Section -->
      <section class="flex flex-col justify-center items-center text-center py-20">
        <h1 class="text-5xl md:text-7xl font-bold glitch" data-text="G‑ELECTRA">
          G‑ELECTRA
        </h1>
        <p class="mt-4 text-xl md:text-2xl text-secondary glitch-tagline">
          Smart Systems Club
        </p>
        <router-link
          to="/registrations"
          class="mt-6 px-6 py-3 bg-primary text-black font-bold rounded shadow hover:shadow-lg hover:glow transition-all duration-300"
        >
          Join Us
        </router-link>
      </section>

      <!-- Quick Stats -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 text-center px-4 md:px-20 py-12">
        <div class="bg-black bg-opacity-30 p-6 rounded shadow hover:glow">
          <h2 class="text-4xl text-primary font-bold">8+</h2>
          <p class="text-lg text-secondary">Members</p>
        </div>
        <div class="bg-black bg-opacity-30 p-6 rounded shadow hover:glow">
          <h2 class="text-4xl text-primary font-bold">40+</h2>
          <p class="text-lg text-secondary">Domains</p>
        </div>
        <div class="bg-black bg-opacity-30 p-6 rounded shadow hover:glow">
          <h2 class="text-4xl text-primary font-bold">8+</h2>
          <p class="text-lg text-secondary">Workshops</p>
        </div>
      </section>

      <!-- Section Previews -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-20 py-12">
        <router-link
          to="/projects"
          class="bg-black bg-opacity-20 p-8 rounded shadow hover:glow transition-all"
        >
          <h3 class="text-2xl text-primary font-bold">Projects</h3>
          <p class="text-sm mt-2 text-secondary">Explore our cutting-edge projects</p>
        </router-link>
        <router-link
          to="/domains"
          class="bg-black bg-opacity-20 p-8 rounded shadow hover:glow transition-all"
        >
          <h3 class="text-2xl text-primary font-bold">Domains</h3>
          <p class="text-sm mt-2 text-secondary">Browse our 40+ technical domains</p>
        </router-link>
        <router-link
          to="/calendar"
          class="bg-black bg-opacity-20 p-8 rounded shadow hover:glow transition-all"
        >
          <h3 class="text-2xl text-primary font-bold">Calendar</h3>
          <p class="text-sm mt-2 text-secondary">Upcoming events and sessions</p>
        </router-link>
      </section>
    </div>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from '../layouts/DefaultLayout.vue'
</script>

<style scoped>
.glitch {
  position: relative;
  color: #00f6ff;
}
.glitch::before,
.glitch::after {
  content: attr(data-text);
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  overflow: hidden;
}
.glitch::before {
  animation: glitchTop 2s infinite linear alternate-reverse;
  color: #ff00f6;
  clip: rect(0, 9999px, 0, 0);
}
.glitch::after {
  animation: glitchBottom 1.5s infinite linear alternate-reverse;
  color: #00fff7;
  clip: rect(0, 9999px, 0, 0);
}

@keyframes glitchTop {
  0% {
    clip: rect(0, 9999px, 0, 0);
  }
  50% {
    clip: rect(10px, 9999px, 30px, 0);
  }
  100% {
    clip: rect(0, 9999px, 0, 0);
  }
}

@keyframes glitchBottom {
  0% {
    clip: rect(100px, 9999px, 100px, 0);
  }
  50% {
    clip: rect(85px, 9999px, 115px, 0);
  }
  100% {
    clip: rect(100px, 9999px, 100px, 0);
  }
}

.hover\:glow:hover {
  box-shadow: 0 0 20px #00fff7, 0 0 40px #00fff7;
}
</style>
