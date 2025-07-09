<template>
  <DefaultLayout>
    <div
      class="relative flex flex-col justify-center items-center min-h-screen overflow-hidden bg-bgdark text-white font-techno"
    >
      <!-- Particle background -->
      <div id="particles-js" class="absolute inset-0 z-0"></div>

      <!-- Main content -->
      <div class="z-10 flex flex-col items-center space-y-4 animate-fade-in">
        <!-- G-ELECTRA logo -->
        <img
          src="/g-electra.png"
          alt="G-ELECTRA Logo"
          class="w-24 h-24 md:w-32 md:h-32 mb-2"
        />

        <!-- Glitch club name -->
        <h1
          class="text-5xl md:text-7xl font-bold glitch"
          data-text="G‑ELECTRA"
        >
          G‑ELECTRA
        </h1>

        <!-- Typing effect -->
        <p class="text-xl md:text-2xl text-secondary typing">
          Initializing Smart Systems…
        </p>

        <!-- CTA -->
        <router-link
          to="/home"
          class="px-6 py-3 bg-primary text-black font-bold rounded shadow hover:shadow-lg hover:glow transition-all duration-300"
        >
          Enter Site
        </router-link>
      </div>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { onMounted } from 'vue'
import DefaultLayout from '../layouts/DefaultLayout.vue'

onMounted(async () => {
  try {
    const { default: particlesJS } = await import('particles.js')
    window.particlesJS = particlesJS
    window.particlesJS.load('particles-js', '/particles.json', () => {
      console.log('✅ Particles loaded!')
    })
  } catch (err) {
    console.error('❌ Failed to load particles.js:', err)
  }
})
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

.typing {
  width: 22ch;
  white-space: nowrap;
  overflow: hidden;
  border-right: 0.15em solid #00f6ff;
  animation: typing 3s steps(22), blink 0.75s step-end infinite;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 22ch;
  }
}

@keyframes blink {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: #00f6ff;
  }
}

.hover\:glow:hover {
  box-shadow: 0 0 20px #00fff7, 0 0 40px #00fff7;
}
</style>
