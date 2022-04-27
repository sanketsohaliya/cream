<template>
	<main>
		<section class="p-3 m-5 rounded-md bg-white" v-if="!quizStore.quizCompleted">
			<div class="text-center">
				<h1 class="text-gray-500">{{ quizStore.quiz.title }}</h1>
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
					<input type="radio" :id="'option' + index" :name="quizStore.getCurrentQuestion.index" :value="index"
						v-model="quizStore.getCurrentQuestion.selected"
						:disabled="quizStore.getCurrentQuestion.selected" @change="quizStore.setAnswer"
						class="hidden" />
					<span>{{ option }}</span>
				</label>
			</div>
			<div class="flex justify-between items-center">
				<button @click="quizStore.nextQuestion" :disabled="!quizStore.getCurrentQuestion.selected"
					class="px-7 py-3 text-xl font-semibold bg-yellow-200 rounded-md cursor-pointer disabled:opacity-50">
					{{
							quizStore.getCurrentQuestion.index == quizStore.quiz.questions.length - 1
								? 'Finish'
								: quizStore.getCurrentQuestion.selected == null
									? 'Select an option'
									: 'Next question'
					}}
				</button>
				<span class="text-xl font-semibold mr-4">Score {{ quizStore.score }}/{{ quizStore.quiz.questions.length }}</span>
			</div>
		</section>

		<section v-else>
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{ quizStore.score }}/{{ quizStore.quiz.questions.length }}</p>
		</section>
	</main>
</template>

<script setup>
import { useRoute } from "vue-router"
import { useQuizStore } from '@/stores/quiz'
const route = useRoute()
const id = route.params.id
const quizStore = useQuizStore()
quizStore.getQuiz(id)
</script>