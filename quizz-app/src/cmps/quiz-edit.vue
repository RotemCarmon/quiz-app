<template>
  <div class="quiz edit">
    <h1>New Quiz</h1>
    <form @submit="saveQuiz">
      <div class="quiz-edit-item-container title-container">
        <input
          v-model="quizToEdit.title"
          class="title"
          type="text"
          placeholder="Quiz title"
        />
        <input
          v-model="quizToEdit.desc"
          class="description"
          type="text"
          placeholder="Quiz description"
        />
      </div>
      <button @click.prevent="addQust">Add Question</button>
      <div
        v-for="(qust, qustIdx) in quizToEdit.qusts"
        :key="qust.id"
        class="quiz-edit-item-container question-container"
      >
        <input
          class="question"
          type="text"
          placeholder="Question"
          v-model="quizToEdit.qusts[qustIdx].qust"
        />
        <input
          v-for="(opt, optIdx) in qust.opts"
          :key="optIdx"
          class="option"
          type="text"
          :placeholder="'Option ' + (optIdx + 1)"
          v-model="quizToEdit.qusts[qustIdx].opts[optIdx].txt"
        />
        <input
          class="option"
          type="text"
          placeholder="Add option"
          @click="addOpt(qustIdx)"
        />
      </div>
      <button type="submit">Save Quiz</button>
    </form>
    <pre>
      {{ quizToEdit }}
    </pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      qustToEdit: {
        qust: "",
        opts: [{ txt: "" }],
      },
      quizToEdit: {
        title: "",
        desc: "",
        sections: ["js", "vue", "react"],
        qusts: [],
      },
    };
  },
  methods: {
    saveQuiz() {
      this.$store.dispatch({ type: "saveQuiz", quiz: this.quizToEdit });
    },
    addQust() {
      this.quizToEdit.qusts.push({
        qust: "",
        opts: [{ txt: "Option 1" }],
      });
    },
    addOpt(qustIdx) {
      var txt = "Option " + (this.quizToEdit.qusts[qustIdx].opts.length + 1);
      this.quizToEdit.qusts[qustIdx].opts.push({ txt });
    },
  },
};
</script>
