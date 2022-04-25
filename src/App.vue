<template>
  <nav class="bg-white shadow-md">
    <RouterLink to="/" class="flex justify-center items-center">
      <img src="@/assets/logo.png" class="h-16" alt="Cream Logo" />
    </RouterLink>
  </nav>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
@import '@/assets/base.css';
</style>
