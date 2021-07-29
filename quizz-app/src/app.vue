<template>
  <div id="app">
    <app-header />
    <router-view/>
  </div>
</template>

<script>
import appHeader from '@/cmps/app-header.cmp'
import '@/styles/styles.scss'

export default {
  components: {
    appHeader
  }
}
</script>

