import { defineStore } from 'pinia'
import quizzes from './quizzes.json';

export const useQuizStore = defineStore({
    id: 'quiz',
    state: () => ({
        quizCompleted: false,
        currentQuestion: 0,
        currentQuiz: 0
    }),
    getters: {
        score: (state) => {
            let value = 0
            state.currentQuiz.questions.map(q => {
                if (q.selected != null && q.answer == q.selected) {
                    value++
                }
            })
            return value
        },
        getCurrentQuestion: (state) => {
            let question = state.currentQuiz.questions[state.currentQuestion]
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
            this.currentQuiz = quizzes[id]
            return this.currentQuiz
        },
        setAnswer(e) {
            this.currentQuiz.questions[this.currentQuestion].selected = e.target.value
            e.target.value = null
        },
        nextQuestion() {
            if (this.currentQuestion < this.currentQuiz.questions.length - 1) {
                this.currentQuestion++
                return
            }
            this.quizCompleted = true
        },
        reset(id) {
            this.currentQuiz = quizzes[id]
            this.currentQuestion = -1
            this.quizCompleted = false
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
