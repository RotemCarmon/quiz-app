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
    getEmptyQuest,
    getEmptyOpt,
    submitQuiz
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

// WILL BE IN BACKEND
function submitQuiz(quiz, submission, sectionsQuestsMap){
    const questIds = Object.keys(submission)
    const questAnsMap = quiz.questAnsMap
    const sectionsTitles = Object.keys(sectionsQuestsMap)
    const evalAcc = {}
    sectionsTitles.forEach(title => evalAcc[title] = {success: 0, fail: 0})
    const evalMap = questIds.reduce((acc, questId) => {
        let currSection = ''
        for (let i = 0; i < sectionsTitles.length; i++) {
            var section = sectionsTitles[i]
            if (sectionsQuestsMap[section].includes(questId)) {
                currSection = section
                break;
            }
        }
        if(submission[questId] === questAnsMap[questId]) {
            acc[currSection].success++
        } else acc[currSection].fail++
        return acc
    }, evalAcc)
    console.log(evalMap)
    return evalMap
}

function getEmptyQuiz() {
    return {
        title: 'Quiz title',
        desc: '',
        createdAt: null,
        sections: [getEmptySection()],
        questAnsMap: {}
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
        txt: 'Question',
        opts: [getEmptyOpt()],
    }
}
function getEmptyOpt() {
    return {
        id: _makeId(),
        txt: 'Option',
        imgUrl: ''
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