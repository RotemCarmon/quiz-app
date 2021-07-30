import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const QUIZ_DB = 'quiz'
// const QUIZ_URL = 'quiz/'

export const quizService = {
    query,
    getById,
    remove,
    save,
    getEmptyQuiz
}

async function query() {
    return storageService.query(QUIZ_DB)
    // return httpService.get(QUIZ_URL, isMinimized)
}

async function getById(quizId) {
    return storageService.get(QUIZ_DB, quizId)
    // return httpService.get(`quiz/${quizId}`)
}

async function remove(quizId) {
    return storageService.remove(QUIZ_DB, quizId)
    // return httpService.delete(`quiz/${quizId}`)
}


async function save(quiz) {
    if (!quiz._id) {
        return storageService.put(QUIZ_DB, quiz)
        // return httpService.post(QUIZ_URL, quiz)
    } else {
        return storageService.post(QUIZ_DB, quiz)
        // return httpService.put(QUIZ_URL + quiz._id, quiz)
    }
}

function getEmptyQuiz() {
    return {
    }
}