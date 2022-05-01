<template>
    <div class="p-5 md:w-1/3">
        <router-link @click="quizStore.reset(id)" :to="{
            path: '/quiz/' + id
        }">
            <div class="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden">
                <img class="h-48 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                    :src="quizStore.quiz.image" alt="Quiz Thumbnail">
                <div class="p-5">
                    <div class="tracking-widest text-sm text-gray-500 mb-1">{{ quizStore.quiz.category }}</div>
                    <div class="leading-relaxed text-lg mb-3">{{ quizStore.quiz.title }}</div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script setup>
import { useQuizStore } from '@/stores/quiz'
const props = defineProps({
  id: {
      type: Number,
      required: true
  }
})
const quizStore = useQuizStore()
quizStore.getQuiz(props.id)
</script>