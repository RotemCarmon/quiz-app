<template>
  <div class="quiz-edit main-container">
    <input
      v-model="quizToEdit.title"
      class="quiz-title"
      type="text"
      placeholder="Quiz title"
      @focus="$event.target.select()"
      @input="saveQuiz()"
    />
    <!-- <span class="material-icons">face</span> -->
    <form>
      <div
        class="section"
        v-for="(section, sectionIdx) in quizToEdit.sections"
        :key="section.id"
      >
        <button type="button" @click="addquest(sectionIdx)">
          Add Question
        </button>
        <div
          class="quiz-edit-item-container title-container"
          :class="{ selected: selectedItem === section.id }"
          @click="clicked(section.id)"
        >
          <action-bar v-if="selectedItem === section.id"></action-bar>
          <input
            v-model="quizToEdit.sections[sectionIdx].title"
            class="title"
            type="text"
            placeholder="Section title"
            @focus="$event.target.select()"
            @input="saveQuiz()"
          />
          <input
            v-model="quizToEdit.sections[sectionIdx].desc"
            class="description"
            type="text"
            placeholder="Section description"
            @focus="$event.target.select()"
            @input="saveQuiz()"
          />
        </div>
        <div
          v-for="(quest, questIdx) in section.quests"
          :key="quest.id"
          class="quiz-edit-item-container question-container"
          :class="{ selected: selectedItem === quest.id }"
          @click="clicked(quest.id)"
        >
          <action-bar v-if="selectedItem === quest.id"></action-bar>
          <input
            class="question"
            type="text"
            placeholder="Question"
            v-model="quizToEdit.sections[sectionIdx].quests[questIdx].txt"
            @focus="$event.target.select()"
            @input="saveQuiz()"
          />
          <div
            class="options"
            v-for="(opt, optIdx) in quest.opts"
            :key="opt.id"
          >
            <input
              type="radio"
              class="option-radio"
              :ref="opt.id"
              :checked="isCorrectOpt(quest.id, opt.id)"
              @input="setCorrectOpt(quest.id, opt.id)"
            />
            <input
              class="option"
              type="text"
              :placeholder="'Option ' + (optIdx + 1)"
              :ref="'opt' + (optIdx + 1)"
              v-model="
                quizToEdit.sections[sectionIdx].quests[questIdx].opts[optIdx]
                  .txt
              "
              @focus="$event.target.select()"
              @input="saveQuiz()"
            />
          </div>
          <div class="add-option">
            <input class="option-radio" type="radio" disabled />
            <input
              class="option"
              type="text"
              placeholder="Add option"
              @click="addOpt(sectionIdx, questIdx)"
            />
          </div>
        </div>
      </div>
      <!-- ****************************************************************************** -->
      <button @click="addSection">Add Section</button>
      <!-- <button type="submit">Save Quiz</button> -->
    </form>

    <pre>
      {{ selectedItem }}
      {{ quizToEdit }}
    </pre>
  </div>
</template>

<script>
import actionBar from "./action-bar.vue";
import { quizService } from "../services/quiz.service.js";
export default {
  data() {
    return {
      selectedItem: null,
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
    clicked(id) {
      this.selectedItem = id;
    },
    saveQuiz() {
      this.$store.dispatch({ type: "saveQuiz", quiz: this.quizToEdit });
    },
    addquest(sectionIdx) {
      this.quizToEdit.sections[sectionIdx].quests.push(
        quizService.getEmptyQuest()
      );
    },
    addOpt(sectionIdx, questIdx) {
      var txt =
        "Option " +
        (this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.length + 1);
      const opt=quizService.getEmptyOpt()
      opt.txt=txt
      this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.push(opt);
      this.$nextTick(() => {
        const refName =
          "opt" +
          this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.length;
        this.$refs[refName][0].focus();
      });
    },
    addSection() {
      this.quizToEdit.sections.push(quizService.getEmptySection());
    },
    setCorrectOpt(questId, optId) {
      this.quizToEdit.questAnsMap[questId] = optId;
      this.$forceUpdate();
    },
  },
  components: {
    actionBar,
  },
};
</script>
