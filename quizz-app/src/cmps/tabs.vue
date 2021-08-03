<template>
  <el-tabs class="tabs" @tab-click="handleClick">
    <el-tab-pane label="New Quiz" data-route="admin/quiz/edit" name="first">
      <!-- <quiz-edit></quiz-edit> -->
    </el-tab-pane>
    <el-tab-pane label="Quiz List" data-route="admin/quiz/list" name="second">
      <!-- <quiz-list></quiz-list> -->
    </el-tab-pane>
    <el-tab-pane label="Submissions" data-route="admin/submissions" name="third">
      <!-- <submissions></submissions> -->
    </el-tab-pane>
    <el-tab-pane label="Templates" data-route="admin/templates" name="fourth">
      <!-- <templates></templates> -->
    </el-tab-pane>
  </el-tabs>
</template>
<script>
// import quizEdit from "../cmps/quiz-edit.vue";
// import quizList from "../cmps/quiz-list.vue";
// import submissions from "../cmps/submissions.vue";
// import templates from "../cmps/templates.vue";
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab) {
    //   console.log(tab.$attrs['data-route']);
    //   this.$router.push(tab.$attrs['data-route'])
    },
  },
  components: {
    // quizEdit,
    // quizList,
    // submissions,
    // templates,
  },
};
</script>