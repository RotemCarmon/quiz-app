<template>
  <div id="app">
    <userMsg/>
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import appHeader from '@/cmps/app-header.vue'
import userMsg from '@/cmps/user-msg.vue'

export default {
  components: {
    appHeader,
    userMsg
  }
}
</script>

