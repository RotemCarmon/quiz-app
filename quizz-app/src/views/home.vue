<template>
  <div class="home">
    <h1>Home</h1>
    <router-link to="/login">Login</router-link>
    <router-link to="/admin">Admin Page</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
  computed: {
    quizzes(){
      return this.$store.getters.quizzesForShow
    }
  },
  created() {
    this.$store.dispatch({
      type: "loadQuizzes",
    });
  },
  components: {},
};
</script>
