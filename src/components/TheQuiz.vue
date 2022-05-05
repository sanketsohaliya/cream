<template>
	<main>
		<section class="m-7 rounded-md bg-white">
			<div class="overflow-hidden h-5 -mt-1 mb-3 flex bg-blue-200">
				<div class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-cyan-500 to-blue-500"
					:style="`width: ${width}`">
				</div>
			</div>
			<div class="p-3" v-if="!quizStore.quizCompleted">
				<div class="text-center">
					<h1 class="text-gray-500">{{ quizStore.currentQuiz.title }}</h1>
				</div>
				<div class="text-center">
					<h1 class="text-xl font-semibold mt-5">{{ quizStore.getCurrentQuestion.question }}</h1>
				</div>
				<div class="flex justify-center items-center m-7" v-if="quizStore.getCurrentQuestion.image">
					<img class="w-96 rounded-xl shadow-lg" :src="quizStore.getCurrentQuestion.image"
						alt="Question Thumbnail" />
				</div>
				<div class="mb-7">
					<label v-for="(option, index) in quizStore.getCurrentQuestion.options" :for="'option' + index"
						:key="index" :class="`m-3 p-3 block bg-blue-100 rounded-md cursor-pointer ${quizStore.getCurrentQuestion.selected == index
						? index == quizStore.getCurrentQuestion.answer
							? 'bg-green-700 text-white'
							: 'bg-red-400 text-white'
						: ''
						} ${quizStore.getCurrentQuestion.selected != null &&
							index != quizStore.getCurrentQuestion.selected
							? 'opacity-50'
							: ''
						}`">
						<input type="radio" :id="'option' + index" :name="quizStore.getCurrentQuestion.index"
							:value="index" v-model="quizStore.getCurrentQuestion.selected"
							:disabled="quizStore.getCurrentQuestion.selected" @change="quizStore.setAnswer"
							class="hidden" />
						<span>{{ option }}</span>
					</label>
				</div>
				<div class="flex justify-between items-center">
					<button @click="quizStore.nextQuestion" :disabled="!quizStore.getCurrentQuestion.selected"
						class="px-7 py-3 text-xl font-semibold bg-yellow-200 rounded-md cursor-pointer disabled:opacity-50">
						{{
								quizStore.getCurrentQuestion.index == quizStore.currentQuiz.questions.length - 1
									? 'Finish'
									: quizStore.getCurrentQuestion.selected == null
										? 'Select an option'
										: 'Next question'
						}}
					</button>
					<span class="text-xl font-semibold mr-4">Score {{ quizStore.score }}/{{
							quizStore.currentQuiz.questions.length
					}}</span>
				</div>
			</div>
			<div class="p-3 m-5 rounded-md bg-white text-center" v-else>
				<h2 class="text-2xl">Score</h2>
				<p class="m-5">{{ quizStore.score }}/{{ quizStore.currentQuiz.questions.length }}</p>
				<button @click="quizStore.reset(id)"
					class="px-7 py-3 text-xl font-semibold bg-yellow-200 rounded-md cursor-pointer disabled:opacity-50">Try
					Again!</button>
			</div>
		</section>
		<QuizThumbnails />
	</main>
</template>

<script setup>
import { computed } from 'vue'
import { useQuizStore } from '@/stores/quiz'
import QuizThumbnails from '@/components/QuizThumbnails.vue'
const props = defineProps({
	id: {
		type: Number,
		required: true
	}
})
const quizStore = useQuizStore()
quizStore.reset(props.id)
const width = computed(() => {
	if(quizStore.quizCompleted) {
		return "100%"
	}
	return (quizStore.getCurrentQuestion.index / quizStore.currentQuiz.questions.length) * 100 + "%"
})
</script>