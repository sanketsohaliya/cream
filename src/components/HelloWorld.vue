<template>
  <h1>{{ msg }}</h1>
  <h3>
    You’ve successfully created a project
  </h3>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
