import { defineStore } from 'pinia'

export const useQuizStore = defineStore({
    id: 'quiz',
    state: () => ({
        quizzes: [],
        quizCompleted: false,
        currentQuestion: 0,
        currentQuiz: {}
    }),
    getters: {
        isEmpty: (state) => {
            return state.quizzes.length == 0
        },
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
        async getRandomQuizzes() {
            this.quizzes = (await import("@/data/quizzes.json")).default
            // this.quizzes = (await axios.get(https://quizways.com/api/get-random-quizzes)).data
        },
        getQuiz(id) {
            this.currentQuiz = this.quizzes[id]
            this.currentQuestion = 0
            this.quizCompleted = false
            this.currentQuiz.questions.forEach(q => {
                q.selected = null
            })
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
