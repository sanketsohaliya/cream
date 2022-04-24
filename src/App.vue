<template>
  <nav class="bg-white p-3 shadow-md">
    <RouterLink to="/" class="flex justify-center items-center">
      <img src="@/assets/logo.svg" class="h-9" alt="Connect Logo" />
      <span class="text-xl font-semibold">Connect.</span>
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
