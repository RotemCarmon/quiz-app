<template>
  <div class="admin-page">
    <admin-tabs/>
    <router-view/>
  </div>
</template>

<script>
import adminTabs from '@/cmps/admin-tabs'
export default {
  components: {
    adminTabs
  }
};
</script>