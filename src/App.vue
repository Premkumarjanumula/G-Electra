<template>
  <transition name="fade" mode="out-in">
    <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>
  </transition>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
