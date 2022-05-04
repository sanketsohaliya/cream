<template>
    <div class="p-5 md:w-1/3" v-if="quizStore.quizzes.length > 0">
        <router-link @click="quizStore.getQuiz(thumbnailId)" :to="{
            path: '/quiz/' + thumbnailId
        }">
            <div class="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden">
                <img class="h-48 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    :src="quizStore.quizzes[thumbnailId].image" alt="Quiz Thumbnail">
                <div class="p-5">
                    <div class="tracking-widest text-sm text-gray-500 mb-1">{{ quizStore.quizzes[thumbnailId].category }}</div>
                    <div class="leading-relaxed text-lg mb-3">{{ quizStore.quizzes[thumbnailId].title }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { useQuizStore } from '@/stores/quiz'
const props = defineProps({
  thumbnailId: {
      type: Number,
      required: true
  }
})
const quizStore = useQuizStore()
</script>