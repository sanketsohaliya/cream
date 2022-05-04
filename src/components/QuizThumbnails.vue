<template>
    <section>
        <div class="container mx-auto">
            <div class="flex flex-wrap mx-3">
                <QuizThumbnail :thumbnailId="0" />
                <QuizThumbnail :thumbnailId="1" />
                <QuizThumbnail :thumbnailId="2" />
                <QuizThumbnail :thumbnailId="3" />
                <QuizThumbnail :thumbnailId="4" />
                <QuizThumbnail :thumbnailId="5" />
                <QuizThumbnail :thumbnailId="6" />
                <QuizThumbnail :thumbnailId="7" />
                <QuizThumbnail :thumbnailId="8" />
            </div>
        </div>
    </section>
</template>
<script setup>
import QuizThumbnail from '@/components/QuizThumbnail.vue'
</script>