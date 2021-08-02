import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

import gQuizs from '../quiz-data.js'

const QUIZ_DB = 'quizDB'
// const QUIZ_URL = 'quiz/'

export const quizService = {
    query,
    getById,
    remove,
    save,
    getEmptyQuiz,
    getEmptySection,
    getEmptyQuest
}

async function query() {
    let quizs = await storageService.query(QUIZ_DB)
    if (!quizs || !quizs.length) {
        quizs = gQuizs
        _saveToStorage(gQuizs)
    }
    console.log(quizs, 'quizs');
    return quizs
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
    if (quiz._id) {
        return storageService.put(QUIZ_DB, quiz)
        // return httpService.post(QUIZ_URL, quiz)
    } else {
        return storageService.post(QUIZ_DB, quiz)
        // return httpService.put(QUIZ_URL + quiz._id, quiz)
    }
}

function getEmptyQuiz() {
    return {
        title: 'Quiz title',
        desc: '',
        createdAt: null,
        sections: [getEmptySection()],
        quizEvalMap: {}
    }
}
function getEmptySection() {
    return {
        id: _makeId(),
        title: 'Untitled section',
        desc: 'Description',
        quests: []
    }
}

function getEmptyQuest() {
    return {
        id: _makeId(),
        quest: 'Question',
        opts: [
            { id: _makeId(), txt: 'Option 1', imgUrl: '' },
        ],
    }
}

function _makeId(length = 5) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function _saveToStorage(quizs) {
    localStorage.setItem(QUIZ_DB, JSON.stringify(quizs))
}