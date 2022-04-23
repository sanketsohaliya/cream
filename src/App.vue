<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <nav>
        <RouterLink to="/">Home</RouterLink> | 
        <RouterLink to="/about">About</RouterLink> |
        <RouterLink to="/quiz">Quiz</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style>
@import '@/assets/base.css';
</style>
