<template>
	<main>
		<section class="p-3 m-6 rounded-md bg-white" v-if="!quizStore.quizCompleted">
			<div class="flex justify-between mb-7">
				<span>{{ quizStore.title }}</span>
				<span>{{ $route.params.id }}</span>
				<span class="question">{{ quizStore.getCurrentQuestion.question }}</span>
				<span class="score">Score {{ quizStore.score }}/{{ quizStore.questions.length }}</span>
			</div>

			<div class="mb-7">
				<label v-for="(option, index) in quizStore.getCurrentQuestion.options" :for="'option' + index"
					:key="index" :class="`m-3 p-3 block bg-blue-100 rounded-md cursor-pointer ${quizStore.getCurrentQuestion.selected == index
						? index == quizStore.getCurrentQuestion.answer
							? 'bg-green-700'
							: 'bg-red-400'
						: ''
					} ${quizStore.getCurrentQuestion.selected != null &&
						index != quizStore.getCurrentQuestion.selected
						? 'opacity-50'
						: ''
					}`">
					<input type="radio" :id="'option' + index" :name="quizStore.getCurrentQuestion.index" :value="index"
						v-model="quizStore.getCurrentQuestion.selected"
						:disabled="quizStore.getCurrentQuestion.selected" @change="quizStore.setAnswer" class="hidden"/>
					<span>{{ option }}</span>
				</label>
			</div>

			<button @click="quizStore.nextQuestion" :disabled="!quizStore.getCurrentQuestion.selected" class="px-7 py-3 text-xl font-semibold bg-yellow-200 text-slate-800 rounded-md cursor-pointer disabled:opacity-50">
				{{
						quizStore.getCurrentQuestion.index == quizStore.questions.length - 1
							? 'Finish'
							: quizStore.getCurrentQuestion.selected == null
								? 'Select an option'
								: 'Next question'
				}}
			</button>
		</section>

		<section v-else>
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{ quizStore.score }}/{{ quizStore.questions.length }}</p>
		</section>
	</main>
</template>

<script setup>
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
quizStore.getUser();
quizStore.getQuiz();
quizStore.getQuestions();
</script>