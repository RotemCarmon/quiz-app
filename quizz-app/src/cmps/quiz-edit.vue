<template>
  <div class="quiz-edit" ref="screen">
    <div class="main-container">
      <input
        v-model="quizToEdit.title"
        class="quiz-title"
        type="text"
        placeholder="Quiz title"
        @focus="$event.target.select()"
      />
      <!-- @input="saveQuiz()" -->
      <form>
        <div
          class="section"
          v-for="(section, sectionIdx) in quizToEdit.sections"
          :key="section.id"
        >
          <div
            class="quiz-edit-item-container title-container"
            :class="{ selected: selectedItem === section.id }"
            @click="clicked(section.id)"
          >
            <action-bar
              @addSection="addSection(sectionIdx)"
              @addQuest="addquest(sectionIdx, -1)"
              v-if="selectedItem === section.id"
            ></action-bar>
            <input
              v-model="quizToEdit.sections[sectionIdx].title"
              class="title"
              type="text"
              placeholder="Section title"
              @focus="$event.target.select()"
            />
            <!-- @input="saveQuiz()" -->
            <input
              v-model="quizToEdit.sections[sectionIdx].desc"
              class="description"
              type="text"
              placeholder="Section description"
              @focus="$event.target.select()"
            />
            <!-- @input="saveQuiz()" -->
          </div>
          <div
            v-for="(quest, questIdx) in section.quests"
            :key="quest.id"
            class="quiz-edit-item-container question-container"
            :class="{ selected: selectedItem === quest.id }"
            @click="clicked(quest.id)"
          >
            <action-bar
              @addSection="addSection(sectionIdx, questIdx)"
              @addQuest="addquest(sectionIdx, questIdx)"
              v-if="selectedItem === quest.id"
            ></action-bar>
            <input
              class="question"
              type="text"
              placeholder="Question"
              v-model="quizToEdit.sections[sectionIdx].quests[questIdx].txt"
              @focus="$event.target.select()"
            />
            <!-- @input="saveQuiz()" -->
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
              />
              <!-- @input="saveQuiz()" -->
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
      </form>
      <pre>
      {{ quizToEdit }}
    </pre
      >
    </div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
import { utilService } from "../services/util.service.js";
import actionBar from "./action-bar.vue";
import { quizService } from "../services/quiz.service.js";
import { showMsg } from "../services/eventBus.service.js";
export default {
  data() {
    return {
      quizToEdit: quizService.getEmptyQuiz(),
      selectedItem: null,
      screenRef: null,
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
      console.log("id:", id);
    },
    async saveQuiz() {
      this.quizToEdit.thumbnail = await this.printScr();
      await this.$store.dispatch({ type: "saveQuiz", quiz: this.quizToEdit });
      showMsg("Quiz saved");
    },
    addSection(sectionIdx, questIdx) {
      const newSection = quizService.getEmptySection();
      newSection.quests = this.quizToEdit.sections[sectionIdx].quests.splice(
        questIdx + 1
      );
      this.quizToEdit.sections.splice(sectionIdx + 1, 0, newSection);
      this.selectedItem = newSection.id;
    },
    addquest(sectionIdx, questIdx) {
      const newQuest = quizService.getEmptyQuest();
      this.quizToEdit.sections[sectionIdx].quests.splice(
        questIdx + 1,
        0,
        newQuest
      );
      this.selectedItem = newQuest.id;
    },
    addOpt(sectionIdx, questIdx) {
      var txt =
        "Option " +
        (this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.length + 1);
      const opt = quizService.getEmptyOpt();
      opt.txt = txt;
      this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.push(opt);
      this.$nextTick(() => {
        const refName =
          "opt" +
          this.quizToEdit.sections[sectionIdx].quests[questIdx].opts.length;
        this.$refs[refName][0].focus();
      });
    },
    setCorrectOpt(questId, optId) {
      this.quizToEdit.questAnsMap[questId] = optId;
      this.$forceUpdate();
    },
    async loadQuiz() {
      const { quizId } = this.$route.params;
      if (quizId) {
        const quiz = await this.$store.dispatch({ type: "loadQuiz", quizId });
        this.quizToEdit = quiz;
      } else {
        this.quizToEdit = quizService.getEmptyQuiz();
      }
      this.selectedItem = this.quizToEdit.sections[0].id;
    },
    async printScr() {
      try {
        console.log("this.screenRef:", this.screenRef);
        const canvas = await html2canvas(this.screenRef);
        const pageImg = canvas.toDataURL();
        return await utilService.uploadImg(pageImg);
      } catch (err) {
        console.log("err:", err);
      }
    },
  },
  watch: {
    $route: function () {
      this.loadQuiz();
    },
  },
  mounted() {
    this.screenRef = this.$refs.screen;
  },
  created() {
    this.loadQuiz();
  },
  async beforeDestroy() {
    try {
      await this.saveQuiz();
    } catch (err) {
      console.log("err:", err);
    }
  },
  components: {
    actionBar,
  },
};
</script>
