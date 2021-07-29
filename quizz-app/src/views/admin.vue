<template>
  <div class="admin-page">
    <div class="tabs">
      <router-link to="/new-quiz">New Quiz</router-link>
      <router-link to="/submissions">Submissions</router-link>
      <router-link to="/templates">Templates</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    created() {
        this.$router.push('/new-quiz')
    },
};
</script>

<style>
</style>