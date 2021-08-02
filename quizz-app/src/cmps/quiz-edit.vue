<template>
  <div class="quiz edit">
    <input
      v-model="quizToEdit.title"
      class="quiz-title"
      type="text"
      placeholder="Quiz title"
    />
    <form @submit.prevent="saveQuiz">
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
        v-for="(quest, questIdx) in quizToEdit.quests"
        :key="quest.id"
        class="quiz-edit-item-container question-container"
      >
        <input
          class="question"
          type="text"
          placeholder="Question"
          v-model="quizToEdit.quests[questIdx].quest"
        />
        <input
          v-for="(opt, optIdx) in quest.opts"
          :key="optIdx"
          class="option"
          type="text"
          :placeholder="'Option ' + (optIdx + 1)"
          v-model="quizToEdit.quests[questIdx].opts[optIdx].txt"
        />
        <input
          class="option"
          type="text"
          placeholder="Add option"
          @click="addOpt(questIdx)"
        />
      </div> -->
      <!-- ****************************************************************************** -->
      <div
        class="section"
        v-for="(section, sectionIdx) in quizToEdit.sections"
        :key="section.id"
      >
        <button type="button" @click="addquest(sectionIdx)">
          Add Question
        </button>
        <div class="quiz-edit-item-container title-container">
          <input
            v-model="quizToEdit.sections[sectionIdx].title"
            class="title"
            type="text"
            placeholder="Section title"
          />
          <input
            v-model="quizToEdit.sections[sectionIdx].desc"
            class="description"
            type="text"
            placeholder="Section description"
          />
        </div>
        <div
          v-for="(quest, questIdx) in section.quests"
          :key="quest.id"
          class="quiz-edit-item-container question-container"
        >
          <input
            class="question"
            type="text"
            placeholder="Question"
            v-model="quizToEdit.sections[sectionIdx].quests[questIdx].txt"
          />
          <div
            class="options"
            v-for="(opt, optIdx) in quest.opts"
            :key="opt.id"
          >
            <input
              type="radio"
              :ref="opt.id"
              :checked="isCorrectOpt(quest.id, opt.id)"
              @input="setCorrectOpt(quest.id, opt.id)"
            />
            <input
              class="option"
              type="text"
              :placeholder="'Option ' + (optIdx + 1)"
              v-model="
                quizToEdit.sections[sectionIdx].quests[questIdx].opts[optIdx]
                  .txt
              "
            />
          </div>
          <input
            class="option"
            type="text"
            placeholder="Add option"
            @click="addOpt(sectionIdx, questIdx)"
          />
        </div>
      </div>
      <!-- ****************************************************************************** -->
      <button type="submit">Save Quiz</button>
    </form>
    <button @click="addSection">Add Section</button>

    <pre>
      {{ quizToEdit }}
    </pre>
  </div>
</template>

<script>
import { quizService } from "../services/quiz.service.js";
export default {
  data() {
    return {
      quizToEdit: quizService.getEmptyQuiz(),
    };
  },
  computed: {
    isCorrectOpt() {
      return (questId, optId) => {
        return this.quizToEdit.questAnsMap[questId] === optId;
      };
    },
  },
  methods: {
    saveQuiz() {
      this.$store.dispatch({ type: "saveQuiz", quiz: this.quizToEdit });
    },
    addquest(sectionIdx) {
      this.quizToEdit.sections[sectionIdx].quests.push(
        quizService.getEmptyQuest()
      );
    },
    addOpt(sectionIdx, questIdx) {
      // var txt =
      //   "Option " +
      //   (this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.length + 1);
      this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.push(
        quizService.getEmptyOpt()
      );
    },
    addSection() {
      this.quizToEdit.sections.push(quizService.getEmptySection());
    },
    setCorrectOpt(questId, optId) {
      this.quizToEdit.questAnsMap[questId] = optId;
      this.$forceUpdate();
    },
  },
};
</script>
