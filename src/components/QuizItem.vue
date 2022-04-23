<script setup>
import { ref, computed } from 'vue'
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
const questions = ref([
  {
	question: 'What is Vue?',
	answer: 0,
	options: [
		'A framework',
		'A library',
		'A type of hat'
	],
	selected: null
  },
  {
	question: 'What is Vuex used for?',
	answer: 2,
	options: [
		'Eating a delicious snack',
		'Viewing things',
		'State management'
	],
	selected: null
  },
  {
	question: 'What is Vue Router?',
	answer: 1,
	options: [
		'An ice cream maker',
		'A routing library for Vue',
		'Burger sauce'
	],
	selected: null
  }
])
const quizCompleted = ref(false)
const currentQuestion = ref(0)
const score = computed(() => {
	let value = 0
	questions.value.map(q => {
		if (q.selected != null && q.answer == q.selected) {
			console.log('correct');
			value++
		}
	})
	return value
})
const getCurrentQuestion = computed(() => {
	let question = questions.value[currentQuestion.value]
	question.index = currentQuestion.value
	return question
})
const SetAnswer = (e) => {
	questions.value[currentQuestion.value].selected = e.target.value
	e.target.value = null
}
const NextQuestion = () => {
	if (currentQuestion.value < questions.value.length - 1) {
		currentQuestion.value++
		return
	}
	
	quizCompleted.value = true
}
</script>

<template>
	<main>
		<h1>The Quiz</h1>
		
		<section class="quiz" v-if="!quizCompleted">
			<div class="quiz-info">
				<span class="question">{{ getCurrentQuestion.question }}</span>
				<span class="score">Score {{ score }}/{{ questions.length }}</span>
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in getCurrentQuestion.options" 
					:for="'option' + index" 
					:key="index"
					:class="`option ${
						getCurrentQuestion.selected == index 
							? index == getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						getCurrentQuestion.selected != null &&
						index != getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="getCurrentQuestion.index" 
						:value="index" 
						v-model="getCurrentQuestion.selected" 
						:disabled="getCurrentQuestion.selected"
						@change="SetAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="NextQuestion" 
				:disabled="!getCurrentQuestion.selected">
				{{ 
					getCurrentQuestion.index == questions.length - 1 
						? 'Finish' 
						: getCurrentQuestion.selected == null
							? 'Select an option'
							: 'Next question'
				}}
			</button>
		</section>

		<section v-else>
			<h2>You have finished the quiz!</h2>
			<p>Your score is {{ score }}/{{ questions.length }}</p>
		</section>
	</main>
</template>

<style>
.quiz {
	background-color: #382a4b;
	padding: 1rem;
}
.quiz-info {
	display: flex;
	justify-content: space-between;
	margin-bottom: 1rem;
}
.quiz-info .question {
	color: #8F8F8F;
	font-size: 1.25rem;
}
.quiz-info.score {
	color: #FFF;
	font-size: 1.25rem;
}
.options {
	margin-bottom: 1rem;
}
.option {
	padding: 1rem;
	display: block;
	background-color: #271c36;
	margin-bottom: 0.5rem;
	border-radius: 0.5rem;
	cursor: pointer;
}
.option:hover {
	background-color: #2d213f;
}
.option.correct {
	background-color: #2cce7d;
}
.option.wrong {
	background-color: #ff5a5f;
}
.option:last-of-type {
	margin-bottom: 0;
}
.option.disabled {
	opacity: 0.5;
}
.option input {
	display: none;
}
button {
	appearance: none;
	outline: none;
	border: none;
	cursor: pointer;
	padding: 0.5rem 1rem;
	background-color: #2cce7d;
	color: #2d213f;
	font-weight: 700;
	text-transform: uppercase;
	font-size: 1.2rem;
	border-radius: 0.5rem;
}
button:disabled {
	opacity: 0.5;
}
</style>