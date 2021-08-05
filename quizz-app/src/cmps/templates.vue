<template>
  <section class="main-container templates">
    <!-- <h1>Templates</h1> -->
    <div class="template-list">
      <router-link class="template-preview" to='quiz/edit/'>+</router-link>
      <router-link
        class="template-preview "
        v-for="quiz in quizzes"
        :key="quiz._id"
        :to="'quiz/edit/' + quiz._id"
      >
        <img :src="quiz.thumbnail" />
        <div class="template-info">
          {{ quiz.title }}
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    quizzes() {
      console.log(this.$store.getters.quizzesForShow);
      return this.$store.getters.quizzesForShow;
    },
  },
  created() {
    this.$store.dispatch({
      type: "loadQuizzes",
    });
  },
};
</script>