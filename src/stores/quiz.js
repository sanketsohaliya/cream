import { defineStore } from 'pinia'

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
                    console.log('correct');
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
            this.quiz = {
                id,
                title: 'How Much Do You Know About New York City History?',
                image: 'https://files.brainfall.com/wp-content/uploads/2022/03/how_much_about_the_history_of_new_york_city_do_you_know-936x0.jpg.webp',
                questions: [
                    {
                        question: 'In the Revolutionary War, which was a battle George Washington won in New York City?',
                        answer: 1,
                        options: [
                            'Battle of the Bulge',
                            'Battle of Harlem Heights',
                            'Battle of Prospect Park',
                            'The Skirmish in Bed-Stuy'
                        ],
                        selected: null
                    },
                    {
                        question: 'Under the Articles of Confederation, what distinction did New York City carry?',
                        answer: 1,
                        options: [
                            'It was the only place where imports were allowed to come into the nation',
                            'It was the national capital',
                            'It was where all the delegates needed to live',
                            'The nation was named New York Nation after it'
                        ],
                        selected: null
                    },
                    {
                        question: 'The nation was named New York Nation after it',
                        answer: 1,
                        options: [
                            'Murray Hill, Tribeca, Chelsea, Midtown East, Kew Gardens',
                            'Staten Island, Manhattan, Queens, Bronx, Brooklyn',
                            'Staten Island, Long Island, Queens, Manhattan, Brooklyn',
                            'Houston, Mott, West 4th, Avenue A, River'
                        ],
                        selected: null
                    },
                    {
                        question: 'Who did Henry Hudson work for?',
                        answer: 3,
                        options: [
                            'The Worldwide Financial Industry',
                            'The Municipal Assistance Corporation',
                            'The Atlantic Port',
                            'The Dutch East India Company',
                        ],
                        selected: null
                    },
                    {
                        question: 'What was the name of the Dutch settlement at the southern tip of Manhattan Island that defended the fur trade operations for the Dutch West India Company?',
                        answer: 2,
                        options: [
                            'New York',
                            'New Your Bay',
                            'New Amsterdam',
                            'Lower Manhattan',
                        ],
                        selected: null
                    }
                ]
            }

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
        }
    }
})
