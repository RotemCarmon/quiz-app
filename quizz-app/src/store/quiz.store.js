import {quizService} from '../services/quiz.service.js'

export const quizStore = {
    state: {
        quizzes: []
    },
    getters: {
        quizzesForShow(state){
            return state.quizzes
        }
    },
    mutations: {
     setQuizzes(state, {foundQuizzes}){
         state.quizzes = foundQuizzes
     }
    },
    actions: {
        async loadQuizzes({ commit }) {
            try {
                const foundQuizzes = await quizService.query();
                commit({ type: 'setQuizzes', foundQuizzes  })
            } catch (err) {
                console.log('Error loading boards');
                throw err.message
            }
        },
    }
}