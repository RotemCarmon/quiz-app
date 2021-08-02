<template>
  <div class="quiz edit">
    <h1>New Quiz</h1>
    <form @submit="saveQuiz">
      <!-- ****************************************************************************** -->
      <!-- <div class="quiz-edit-item-container title-container">
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
      </div> -->
      <!-- ****************************************************************************** -->
      <div class="section" v-for="(section, idx) in quizToEdit.sections" :key="idx">
        <div class="quiz-edit-item-container title-container">
          <input
            v-model="quizToEdit.sections[idx].txt"
            class="title"
            type="text"
            placeholder="Section title"
          />
          <input
            v-model="quizToEdit.sections[idx].desc"
            class="description"
            type="text"
            placeholder="Section description"
          />
        </div>
        <div
          v-for="(qust, qustIdx) in getSectionQust(section)"
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
      </div>
      <!-- ****************************************************************************** -->
      <button type="submit">Save Quiz</button>
    </form>
    <button @click="addQust">Add Question</button>
    <button @click="addSection">Add Section</button>

    <pre>
      {{ quizToEdit }}
    </pre>
  </div>
</template>

<script>
import {quizService} from '../services/quiz.service.js'
export default {
  data() {
    return {
      quizToEdit: quizService.getEmptyQuiz()
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
    addSection() {
      this.quizToEdit.sections.push({ txt: "Untitled section", desc: "Description" });
    },
    getSectionQust(section){
      console.log('section:', section)
    }
  },
};
</script>
