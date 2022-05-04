<template>
  <QuizThumbnails />
</template>

<script setup>
import QuizThumbnails from '@/components/QuizThumbnails.vue'
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
quizStore.getRandomQuizzes()
</script>
