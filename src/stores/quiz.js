import { defineStore } from 'pinia'

export const useQuizStore = defineStore({
  id: 'quiz',
  state: () => ({
    title: 'Quiz Title',
    questions: [
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
    ],
    quizCompleted: false,
    currentQuestion: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
    score: (state) => {
      let value = 0
      state.questions.map(q => {
        if (q.selected != null && q.answer == q.selected) {
          console.log('correct');
          value++
        }
      })
      return value
    },
    getCurrentQuestion: (state) => {
      let question = state.questions[state.currentQuestion]
      question.index = state.currentQuestion
      return question
    }
  },
  actions: {
    increment() {
      this.counter++
    },
    setAnswer(e) {
      this.questions[this.currentQuestion].selected = e.target.value
      e.target.value = null
    },
    nextQuestion() {
      if (this.currentQuestion < this.questions.length - 1) {
        this.currentQuestion++
        return
      }  
      this.quizCompleted = true
    }
  }
})
