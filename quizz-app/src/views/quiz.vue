<template>
  <section class="qui-container" v-if="quiz">
    <div class="quiz">
      <div class="title">{{quiz.title}}</div>
      <article class="quiz-section" v-for="(section,idx) in sections" :key="idx">
        <div class="quiz-section-title">{{section}}</div>
        <div class="quiz-question" v-for="quest in questsBySection(section)" :key="quest.id">
         {{quest.qust}}
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
        this.quiz.qusts.filter(quest => quest.section === section)
    },
    sections(){
      return Array.from(new Set(this.quiz.qusts.map(quest => quest.section)))
    }
  }
};
</script>