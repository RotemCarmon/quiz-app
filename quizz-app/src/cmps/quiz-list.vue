<template>
    <section> 
        <div v-for="quiz in quizzes" :key="quiz._id">
            <router-link :to="'/quiz/' + quiz._id">{{quiz.title}}</router-link>
        </div>
    </section>
</template>

<script>
export default {
  computed: {
    quizzes(){
        console.log(this.$store.getters.quizzesForShow);
      return this.$store.getters.quizzesForShow
    }
  },
  created() {

    this.$store.dispatch({
      type: "loadQuizzes",
    });
  },
}
</script>