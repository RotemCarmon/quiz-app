<template>
  <div class="action-bar">
      <button @click.stop="addQuest">Add question</button>
      <button @click.stop="addSection">Add section</button>
      <button>Add image</button>
      <button>Add video</button>
      <button>Delete</button>
  </div>
</template>

<script>
export default {
    methods: {
        addQuest(){
            this.$emit('addQuest')
        },
        addSection(){
            this.$emit('addSection')
        },
    },
}
</script>
