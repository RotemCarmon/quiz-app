import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

const QUIZ_DB = 'quiz'
// const QUIZ_URL = 'quiz/'

const gQuizzes = [
    {
        _id: 't101',
        title: 'Quiz title',
        qusts: [
            {
                id: 'q101',
                section: 'vue',
                qust: 'Question 1',
                opts: [
                    { id: 'a101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com', isCorrect: true },
                    { id: 'a102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'a103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'a104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
                ],
            }, {
                id: 'q102',
                section: 'react',
                qust: 'Question 2',
                opts: [
                    { id: 'b101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com'},
                    { id: 'b102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com', isCorrect: true}, 
                    { id: 'b103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'b104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
                ],
            }, {
                id: 'q103',
                section: 'vue',
                qust: 'Question 3',
                opts: [
                    { id: 'c101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'c102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'c103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com', isCorrect: true},
                    { id: 'c104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
                ],
            }, {
                id: 'q104',
                section: 'vue',
                qust: 'Question 4',
                opts: [
                    { id: 'd101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com', isCorrect: true },
                    { id: 'd102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'd103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
                    { id: 'd104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
                ],
            }
        ]
    }
]


export const quizService = {
    query,
    getById,
    remove,
    save,
    getEmptyQuiz
}

async function query() {
    let quizzes = await storageService.query(QUIZ_DB)
    if (!quizzes || !quizzes.length) {
        quizzes = gQuizzes
        _saveToStorage(gQuizzes)
    }
    console.log(quizzes, 'quizzes');
    return quizzes
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

function _saveToStorage(quizzes){
    localStorage.setItem(QUIZ_DB, JSON.stringify(quizzes))
}