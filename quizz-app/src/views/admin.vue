<template>
  <div class="admin-page">
    admin page
    <div class="tabs">
      <router-link to="/admin/quiz/edit">New Quiz</router-link> | 
      <router-link to="/admin/submissions">Submissions</router-link> | 
      <router-link to="/admin/templates">Templates</router-link> | 
      <router-link to="/admin/quiz/list">List</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
    // created() {
    //     this.$router.push('/quiz/edit')
    // },
};
</script>

<style>
</style>