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
        isEmpty: (state) => state.quizzes.length === 0,
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
            // this.quizzes = (await axios.get(https://quizways.com/api/get-random-quizzes)).data
            this.quizzes = (await import("@/data/quizzes.json")).default
            // this.shuffle()
        },
        shuffle() {
            let currentIndex = this.quizzes.length,  randomIndex;
            // While there remain elements to shuffle.
            while (currentIndex != 0) {
                // Pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;
                // And swap it with the current element.
                [this.quizzes[currentIndex], this.quizzes[randomIndex]] = [
                this.quizzes[randomIndex], this.quizzes[currentIndex]];
            }
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
