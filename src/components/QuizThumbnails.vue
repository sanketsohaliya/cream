<template>
    <section>
        <div class="container mx-auto">
            <div class="flex flex-wrap mx-3">
                <QuizThumbnail quizId="8" />
                <QuizThumbnail quizId="1" />
                <QuizThumbnail quizId="2" />
                <QuizThumbnail quizId="3" />
                <QuizThumbnail quizId="4" />
                <QuizThumbnail quizId="5" />
                <QuizThumbnail quizId="6" />
                <QuizThumbnail quizId="7" />
                <QuizThumbnail quizId="0" />
            </div>
        </div>
    </section>
</template>
<script setup>
import QuizThumbnail from '@/components/QuizThumbnail.vue'
</script>