<template>
  <section class="qui-container" v-if="quiz">
    <form class="quiz">
      <div class="title">{{quiz.title}}</div>
      <!-- <article class="quiz-section" v-for="(section,idx) in sections" :key="idx">
        <h2 class="quiz-section-title">{{section}}</h2>
        <div class="quiz-question" v-for="quest in questsBySection(section)" :key="quest.id">
         <h3>{{quest.txt}}</h3>
         <ul>
           <li v-for="opt in quest.opts" :key="opt.id">
             <label><input type="radio" :value="opt.id" v-model="quizAns[quest.id]" />{{opt.txt}}</label>
           </li>
         </ul>
        </div>
      </article> -->
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
    </form>
  </section>
</template>

<script>
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
    // TODO: 
    // onSubmitQuiz(){
    //   quizService.submitQuiz(this.quiz, emptyQuizAns)
    // }
  },
  computed: {

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
  },
};
</script>