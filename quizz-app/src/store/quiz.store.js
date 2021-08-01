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
        async loadQuiz(context, {quizId}) {
            try {
                console.log(quizId);
                const foundQuiz = await quizService.getById(quizId);
                console.log(foundQuiz, 'loadquiz');
                return foundQuiz
            } catch (err) {
                console.log('Error loading boards');
                throw err.message
            }
        },
    }
}