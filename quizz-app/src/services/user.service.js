import { storageService } from './async-storage.service'
// import { httpService } from './http.service'

export const userService = {
    login,
    logout,
    signup,
    getUsers,
    getById,
    remove,
    update,
    getLoggedinUser,
}

function getUsers() {
    return storageService.query('user')
    // return httpService.get(`user`)
}

function getById(userId) {
    return storageService.get('user', userId)
    // return httpService.get(`user/${userId}`)
}
function remove(userId) {
    return storageService.remove('user', userId)
    // return httpService.delete(`user/${userId}`)
}

async function update(userToUpdate) {
    return storageService.put('user', userToUpdate)
    //  if (getLoggedinUser()._id === userToUpdate._id) _saveLocalUser(userToUpdate)
    // return httpService.put(`user/${userToUpdate._id}`, userToUpdate)
}


async function login(userCred) {
    const users = await storageService.query('user')
    const user = users.find(user => user.username === userCred.username)
    return _saveLocalUser(user)
    // const user = await httpService.post('auth/login', userCred)
    // if (user) return _saveLocalUser(user)
}
async function signup(userCred) {
    const user = await storageService.post('user', userCred)
    // const user = await httpService.post('auth/signup', userCred)
    return _saveLocalUser(user)
}
async function logout() {
    sessionStorage.setItem('loggedinUser', null)
    // return await httpService.post('auth/logout')
}


function _saveLocalUser(user) {
    sessionStorage.setItem('loggedinUser', JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem('loggedinUser'))
}

