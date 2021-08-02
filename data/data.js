
// // QUIZS
const quiz = {
  _id: 't101',
  title: 'Quiz title',
  sections: ['js', 'vue', 'react'],
  qusts: [
    {
      id: 'q101',
      section:'vue',
      qust: 'Question 1',
      opts: [
        { id: 'o101', txt: 'Option 1' , imgUrl: 'http:// fhdjsks.com', isCorrect: true},
        { id: 'o102', txt: 'Option 2' , imgUrl: 'http:// fhdjsks.com'},
        { id: 'o103', txt: 'Option 3' , imgUrl: 'http:// fhdjsks.com'},
        { id: 'o104', txt: 'Option 4' , imgUrl: 'http:// fhdjsks.com'},
      ],
    }
  ]
}

// const quiz = {
//   _id: 't101',
//   title: 'Quiz title',
//   desc:'',
//   createdAt: 314938423780,
//   // sections:{
//   //   vue:{

//   //   },
//   //   js:{

//   //   }
//   // }
//   sections: [
//     {
//       id: 's101',
//       title: 'Vue',
//       desc: 'Im a vue section',
//       qusts: [
//         {
//           id: 'q101',
//           qust: 'Question 1',
//           opts: [
//             { id: 'o101', txt: 'Option 1' , imgUrl: 'http:// fhdjsks.com', isCorrect: true},
//             { id: 'o102', txt: 'Option 2' , imgUrl: ''}
//           ],
//         }
//       ]
//     }
//   ]
// }


// SUBMISSIONS
const submission = {
  _id: 's101',
  name: 'Puki ben David',
  email: 'puki@gmail.com',
  quizId: 't101',
  answers: [
    { qId: 'q101', ans: 0 },
    { qId: 'q102', ans: 2 },
  ]
}


// USERS
const user = {
  _id: 'u101',
  name: 'Shuki Shuk',
  email: 'shuk@gmail.com',
  password: '123456', // hashed password
  isAdmin: true,
  imgUrl: 'https://thispersondoesnotexist.com/'
}