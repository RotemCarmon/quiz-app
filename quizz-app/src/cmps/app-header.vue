<template>
  <header class="app-header">
    <h1>MrQuiz</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
    <div class="tabs">
      <router-link to="/admin/quiz/edit">New Quiz</router-link>
      <router-link to="/admin/submissions">Submissions</router-link>
      <router-link to="/admin/templates">Templates</router-link>
      <!-- <router-link to="/admin/quiz/list">List</router-link> -->
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
};
</script>