<template>
  <nav class="bg-white shadow-md">
    <router-link to="/" class="flex justify-center items-center">
      <img src="@/assets/logo.png" class="h-16" alt="Cream Logo" />
    </router-link>
  </nav>
  <div class="container mx-auto">
    <router-view v-slot="{ Component }">
      <transition name="fade">
        <component :is="Component" :key="$route.path"></component>
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
quizStore.getRandomQuizzes()
</script>

<style>
@import '@/assets/base.css';

.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
