import { defineStore } from 'pinia'
import quizzes from './quizzes.json';

export const useQuizStore = defineStore({
    id: 'quiz',
    state: () => ({
        quizCompleted: false,
        currentQuestion: 0
    }),
    getters: {
        doubleCount: (state) => state.counter * 2,
        score: (state) => {
            let value = 0
            state.quiz.questions.map(q => {
                if (q.selected != null && q.answer == q.selected) {
                    value++
                }
            })
            return value
        },
        getCurrentQuestion: (state) => {
            let question = state.quiz.questions[state.currentQuestion]
            question.index = state.currentQuestion
            return question
        }
    },
    actions: {
        getUser() {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => this.userData = json)
        },
        getQuiz(id) {
            this.currentQuestion = 0
            this.quiz = quizzes[id]
        },
        setAnswer(e) {
            this.quiz.questions[this.currentQuestion].selected = e.target.value
            e.target.value = null
        },
        nextQuestion() {
            if (this.currentQuestion < this.quiz.questions.length - 1) {
                this.currentQuestion++
                return
            }
            this.quizCompleted = true
        },
        reset(id) {
            this.currentQuestion = -1
            this.quizCompleted = false
            this.quiz = quizzes[id]
            quizzes[id].questions.forEach(q => {
                q.selected = null
            })
        },
        again(id) {
            this.reset(id)
            this.currentQuestion = 0
        }
    }
})
