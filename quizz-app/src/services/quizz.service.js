import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const QUIZZ_DB = 'quizz'
// const QUIZZ_URL = 'quizz/'

export const quizzService = {
    query,
    getById,
    remove,
    save,
    getEmptyQuizz
}

async function query() {
    return storageService.query(QUIZZ_DB)
    // return httpService.get(QUIZZ_URL, isMinimized)
}

async function getById(quizzId) {
    return storageService.get(QUIZZ_DB, quizzId)
    // return httpService.get(`quizz/${quizzId}`)
}

async function remove(quizzId) {
    return storageService.remove(QUIZZ_DB, quizzId)
    // return httpService.delete(`quizz/${quizzId}`)
}


async function save(quizz) {
    if (!quizz._id) {
        return storageService.put(QUIZZ_DB, quizz)
        // return httpService.post(QUIZZ_URL, quizz)
    } else {
        return storageService.post(QUIZZ_DB, quizz)
        // return httpService.put(QUIZZ_URL + quizz._id, quizz)
    }
}

function getEmptyQuizz() {
    return {
        
    }
}