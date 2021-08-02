<template>
  <section class="qui-container" v-if="quiz">
    <form @submit.prevent="onSubmitQuiz" class="quiz">
      <div class="title">{{quiz.title}}</div>
      <article class="quiz-section" v-for="section in quiz.sections" :key="section.id">
        <h2 class="quiz-section-title">{{section.title}}</h2>
        <h3 v-if="section.desc">{{section.desc}}</h3>
        <div class="quiz-question" v-for="quest in section.quests" :key="quest.id">
         <h3>{{quest.txt}}</h3>
         <ul >
           <li v-for="opt in quest.opts" :key="opt.id">
             <label><input type="radio" :value="opt.id" v-model="quizSubmission[quest.id]" />{{opt.txt}}</label>
           </li>
         </ul>
        </div>
      </article>
      <button>Good Luck!</button>
    </form>
  </section>
</template>

<script>
import {quizService} from '../services/quiz.service'
export default {
  data() {
    return {
      quiz: null,
      quizSubmission: null
    };
  },
  methods: {
    getEmptyQuizSub(quiz){
      const quizSubmission = quiz.sections.reduce((acc, section) => {
        section.quests.forEach(quest => {
          acc[quest.id] = null
        })
        return acc
      }, {})
      return quizSubmission
    },
    onSubmitQuiz(){
      quizService.submitQuiz(this.quiz, this.quizSubmission, this.sectionQuestsMap)
    }
  },
  computed: {
    sectionQuestsMap(){
      return this.quiz.sections.reduce((acc,section) => {
        if(!acc[section.title]) acc[section.title] = []
        section.quests.forEach(quest => {
          acc[section.title].push(quest.id)
        })
        return acc
      },{})
    }
  },
  watch: {
    quizSubmission:{
      deep: true,
      handler(){
        console.log(this.quizSubmission, 'from watch')
      }
    }
  },
  async created() {
    const { quizId } = this.$route.params;
    const quiz = await this.$store.dispatch({type: 'loadQuiz', quizId});
    this.quiz = quiz;
    this.quizSubmission = this.getEmptyQuizSub(quiz)
    console.log(this.sectionQuestsMap, 'lolo');
  },
};
</script>