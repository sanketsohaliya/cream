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
    ]
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
