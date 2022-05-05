<template>
    <section>
        <div v-if="!quizStore.isEmpty" class="flex flex-wrap mx-3">
            <div v-for="(quiz, id) in quizStore.quizzes" :key="id" class="p-5 md:w-1/3">
                <router-link :to="{
                    name: 'quiz.show',
                    params: { id: id }
                }">
                    <div class="h-full rounded-xl shadow-cla-blue bg-white overflow-hidden">
                        <img class="h-48 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                            :src="quiz.image" alt="Quiz Thumbnail">
                        <div class="p-5">
                            <div class="tracking-widest text-sm text-gray-500 mb-1">{{ quiz.category }}</div>
                            <div class="leading-relaxed text-lg mb-3">{{ quiz.title }}</div>
                        </div>
                    </div>
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
</script>