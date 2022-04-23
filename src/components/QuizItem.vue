<script setup>
import { useQuizStore } from '@/stores/quiz'
const quizStore = useQuizStore()
quizStore.getUser();
quizStore.getQuiz();
quizStore.getQuestions();
</script>

<template>
	<main>
		<h1>The Quiz</h1>
		
		<section class="quiz" v-if="!quizStore.quizCompleted">
			<div class="quiz-info">
				<span>{{ quizStore.title }}</span>
				<span class="question">{{ quizStore.getCurrentQuestion.question }}</span>
				<span class="score">Score {{ quizStore.score }}/{{ quizStore.questions.length }}</span>
			</div>
			
			<div class="options">
				<label 
					v-for="(option, index) in quizStore.getCurrentQuestion.options" 
					:for="'option' + index" 
					:key="index"
					:class="`option ${
						quizStore.getCurrentQuestion.selected == index 
							? index == quizStore.getCurrentQuestion.answer 
								? 'correct' 
								: 'wrong'
							: ''
					} ${
						quizStore.getCurrentQuestion.selected != null &&
						index != quizStore.getCurrentQuestion.selected
							? 'disabled'
							: ''
					}`">
					<input 
						type="radio" 
						:id="'option' + index" 
						:name="quizStore.getCurrentQuestion.index" 
						:value="index" 
						v-model="quizStore.getCurrentQuestion.selected" 
						:disabled="quizStore.getCurrentQuestion.selected"
						@change="quizStore.setAnswer" 
					/>
					<span>{{ option }}</span>
				</label>
			</div>
			
			<button 
				@click="quizStore.nextQuestion" 
				:disabled="!quizStore.getCurrentQuestion.selected">
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