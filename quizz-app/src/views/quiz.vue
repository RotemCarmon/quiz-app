<template>
  <section class="qui-container" v-if="quiz">
    <div class="quiz">
      <div class="title">{{quiz.title}}</div>
      <article class="quiz-section" v-for="(section,idx) in sections" :key="idx">
        <h2 class="quiz-section-title">{{section}}</h2>
        <div class="quiz-question" v-for="quest in questsBySection(section)" :key="quest.id">
         <h3>{{quest.txt}}</h3>
         <ul>
           <li v-for="opt in quest.opts" :key="opt.id">
             <label><input type="radio" />{{opt.txt}}</label>
           </li>
         </ul>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      quiz: null
    };
  },
  async created() {
    const { quizId } = this.$route.params;
    const quiz = await this.$store.dispatch({type: 'loadQuiz', quizId});
    this.quiz = quiz;
  },
  computed: {
    questsBySection(){
      return (section) => 
        this.quiz.quests.filter(quest => quest.section === section)
    },
    sections(){
      return Array.from(new Set(this.quiz.quests.map(quest => quest.section)))
    }
  }
};
</script>