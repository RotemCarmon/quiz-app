<template>
  <header class="app-header">
    <h1>MrQuiz</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/admin">Admin</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  components: {},
};
</script>