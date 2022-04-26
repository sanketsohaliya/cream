<template>
    <section class="text-gray-600">
        <div class="container mx-auto">
            <div class="flex flex-wrap mx-3">
                <QuizThumbnail id="1" />
                <QuizThumbnail id="0" />
                <QuizThumbnail id="1" />
                <QuizThumbnail id="1" />
                <QuizThumbnail id="0" />
                <QuizThumbnail id="0" />
            </div>
        </div>
    </section>
</template>
<script setup>
import QuizThumbnail from '@/components/QuizThumbnail.vue'
</script>