<template>
    <div class="p-5 md:w-1/3">
        <div class="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden">
            <img class="h-48 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                :src="quizStore.quiz.image"
                alt="blog">
            <div class="p-5">
                <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY-1</h2>
                <h1 class="title-font text-lg font-medium mb-3">The Catalyzer</h1>
                <p class="leading-relaxed mb-3">{{ quizStore.quiz.title }}</p>
            </div>
        </div>
    </div>
</template>
<script setup>
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
quizStore.getQuiz(0)
</script>