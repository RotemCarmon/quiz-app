// import Swal from "sweetalert2/dist/sweetalert2.js";
import axios from 'axios'

export const utilService = {
    delay,
    getRandomInt,
    deepCopy,
    uploadImg
    // showErrorMsg,
    // showSuccessMsg
}

function delay(ms = 1500) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

async function uploadImg(imgUrl) {
    // Defining our variables
    const UPLOAD_PRESET = 'erchqlxj' // Insert yours
    const CLOUD_NAME = 'datgr82j1' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', imgUrl)
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    FORM_DATA.append('folder', 'MrQuiz')
    // Sending a post method request to Cloudniarys' API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data.url;
    } catch (err) {
        console.error('ERROR!', err)
    }
}


function deepCopy(object) {
    let objectCopy, value, key;
    if (typeof object !== "object" || object === null) return object;
    objectCopy = Array.isArray(object) ? [] : {};
    for (key in object) {
        value = object[key];
        objectCopy[key] = deepCopy(value);
    }
    return objectCopy;
}

// function showErrorMsg(msg) {
//     Swal.fire({
//         position: "bottom-end",
//         title: msg,
//         showConfirmButton: false,
//         timer: 2500,
//         timerProgressBar: true,
//         customClass: {
//             title: "error",
//             popup: "error",
//         },
//         toast: true,
//     });
// }

// function showSuccessMsg(msg) {
//     Swal.fire({
//         position: "bottom-end",
//         title: msg,
//         showConfirmButton: false,
//         timer: 2500,
//         customClass: {
//             title: "success",
//             popup: "success",
//         },
//         toast: true,
//     });
// }

