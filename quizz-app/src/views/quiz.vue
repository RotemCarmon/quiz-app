<template>
  <section class="qui-container" v-if="quiz">
    <form class="quiz">
      <div class="title">{{quiz.title}}</div>
      <article class="quiz-section" v-for="(section,idx) in sections" :key="idx">
        <h2 class="quiz-section-title">{{section}}</h2>
        <div class="quiz-question" v-for="quest in questsBySection(section)" :key="quest.id">
         <h3>{{quest.txt}}</h3>
         <ul>
           <li v-for="opt in quest.opts" :key="opt.id">
             <label><input type="radio" :value="opt.id" v-model="quizAns[quest.id].chosenAnsId" />{{opt.txt}}</label>
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
      quizAns: []
    };
  },
  methods: {
    getEmptyQuizAns(quiz){
      const quizAns = quiz.quests.reduce((acc, quest) => {
        const correctAns = quest.opts.find(opt => opt.isCorrect)
        acc[quest.id] = {correctOptId: correctAns.id, questId: quest.id, chosenAnsId: null}
        return acc
      }, {})
      return quizAns
    },
    // TODO: 
    // onSubmitQuiz(){
    //   quizService.submitQuiz(this.quiz, emptyQuizAns)
    // }
  },
  computed: {
    questsBySection(){
      return (section) => 
        this.quiz.quests.filter(quest => quest.section === section)
    },
    sections(){
      return Array.from(new Set(this.quiz.quests.map(quest => quest.section)))
    }
  },
  watch: {
    quizAns:{
      deep: true,
      handler(){
        console.log(this.quizAns, 'from watch')
      }
    }
  },
  async created() {
    const { quizId } = this.$route.params;
    const quiz = await this.$store.dispatch({type: 'loadQuiz', quizId});
    this.quiz = quiz;
    this.quizAns = this.getEmptyQuizAns(quiz)
    console.log(this.emptyQuizAns);
  },
};
</script>