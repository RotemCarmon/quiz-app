<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/admin">Admin Page</router-link>
    <div class="quiz"></div>
    <div class="title">
      Title{{quiz.title}}
    </div>
    <div class="qusts">
      <div class="qust" v-for="qust in quiz.qusts" :key="qust.id">
        {{qust.qust}}?
        <div class="opts">
          <div class="opt" v-for="opt in qust.opts" :key="opt.id">
            {{opt.txt}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      quiz: {
        _id: "t101",
        title: "Quiz title",
        sections: ["js", "vue", "react"],
        qusts: [
          {
            id: "q101",
            section: "vue",
            qust: "Question 1",
            opts: [
              {
                id: "o101",
                txt: "Option 1",
                imgUrl: "http:// fhdjsks.com",
                isCorrect: true,
              },
              { id: "o102", txt: "Option 2", imgUrl: "http:// fhdjsks.com" },
              { id: "o103", txt: "Option 3", imgUrl: "http:// fhdjsks.com" },
              { id: "o104", txt: "Option 4", imgUrl: "http:// fhdjsks.com" },
            ],
          },
          {
            id: "q102",
            section: "vue",
            qust: "Question 2",
            opts: [
              {
                id: "o101",
                txt: "Option 1",
                imgUrl: "http:// fhdjsks.com",
                isCorrect: true,
              },
              { id: "o102", txt: "Option 2", imgUrl: "http:// fhdjsks.com" },
              { id: "o103", txt: "Option 3", imgUrl: "http:// fhdjsks.com" },
              { id: "o104", txt: "Option 4", imgUrl: "http:// fhdjsks.com" },
            ],
          },
          {
            id: "q103",
            section: "vue",
            qust: "Question 3",
            opts: [
              {
                id: "o101",
                txt: "Option 1",
                imgUrl: "http:// fhdjsks.com",
                isCorrect: true,
              },
              { id: "o102", txt: "Option 2", imgUrl: "http:// fhdjsks.com" },
              { id: "o103", txt: "Option 3", imgUrl: "http:// fhdjsks.com" },
              { id: "o104", txt: "Option 4", imgUrl: "http:// fhdjsks.com" },
            ],
          },
        ],
      },
    };
  },
  components: {},
};
</script>
