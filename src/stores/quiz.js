import { defineStore } from 'pinia'
import quizzez from '@/data/quizzes.json';

export const useQuizStore = defineStore({
    id: 'quiz',
    state: () => ({
        quizzes: [],
        quizCompleted: false,
        currentQuestion: 0,
        currentQuiz: {}
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
        getRandomQuizzes() {
            this.quizzes = quizzez
        },
        getUser() {
            fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then(response => response.json())
                .then(json => this.userData = json)
        },
        getQuiz(id) {
            this.currentQuiz = this.quizzes[id]
            this.currentQuestion = 0
            this.quizCompleted = false
            this.currentQuiz.questions.forEach(q => {
                q.selected = null
            })
        },
        getThumbnail(thumbnailId) {
            return this.quizzes[thumbnailId]
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
        }
    }
})
