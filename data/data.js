
// // QUIZS
// const quiz = {
//   _id: 't101',
//   title: 'Quiz title',
//   sections: ['js', 'vue', 'react'],
//   quests: [
//     {
//       id: 'q101',
//       section: 'vue',
//       quest: 'Question 1',
//       opts: [
//         { id: 'o101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com', isCorrect: true },
//         { id: 'o102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
//         { id: 'o103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
//         { id: 'o104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
//       ],
//     }
//   ]
// }

[
  {
    _id: 't101',
    title: 'Quiz title',
    desc: '',
    createdAt: 314938423780,
    sections: [
      {
        id: 's101',
        title: 'Vue',
        desc: 'Im a vue section',
        quests: [
          {
            id: 'q101',
            txt: 'Question 1',
            opts: [
              { id: 'a101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'a102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'a103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'a104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q102',
            txt: 'Question 2',
            opts: [
              { id: 'b101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'b102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'b103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'b104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q103',
            txt: 'Question 3',
            opts: [
              { id: 'c101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'c102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'c103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'c104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q104',
            txt: 'Question 4',
            opts: [
              { id: 'd101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'd102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'd103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'd104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }
        ]
      },
      {
        id: 's102',
        title: 'React',
        desc: 'Im a react section',
        quests: [
          {
            id: 'q105',
            txt: 'Question 1',
            opts: [
              { id: 'e101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'e102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'e103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'e104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q106',
            txt: 'Question 2',
            opts: [
              { id: 'f101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'f102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'f103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'f104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q107',
            txt: 'Question 3',
            opts: [
              { id: 'g101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'g102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'g103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'g104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }, {
            id: 'q108',
            txt: 'Question 4',
            opts: [
              { id: 'h101', txt: 'Option 1', imgUrl: 'http:// fhdjsks.com' },
              { id: 'h102', txt: 'Option 2', imgUrl: 'http:// fhdjsks.com' },
              { id: 'h103', txt: 'Option 3', imgUrl: 'http:// fhdjsks.com' },
              { id: 'h104', txt: 'Option 4', imgUrl: 'http:// fhdjsks.com' },
            ],
          }
        ]
      }
    ],
    quizEvalMap: {
      q101: 'a101',
      q102: 'b104',
      q103: 'c103',
      q104: 'd102',
      q105: 'e104',
      q106: 'f101',
      q107: 'g102',
      q108: 'h102',
    }
  }
]

// SUBMISSIONS
const submission = {
  _id: 's101',
  name: 'Puki ben David',
  email: 'puki@gmail.com',
  quizId: 't101',
  results: [
    {
      section: 'vue',
      sectionResults: [
        {
          qusId: 'q101',
          chosenOptId: 'o101',
        }
      ]
    }
  ]
  // answers: [
  //   { qId: 'q101', ans: 0 },
  //   { qId: 'q102', ans: 2 },
  // ]
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