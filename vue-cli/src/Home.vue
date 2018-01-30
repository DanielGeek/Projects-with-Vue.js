<template>
  <div>
    <app-server-status v-for="server in 5"></app-server-status>
  </div>
</template>

<script>
  import ServerStatus from './ServerStatus.vue';
  
  // exporto para usarlo en el main.js
  export default {
    components: {
      'app-server-status': ServerStatus
    }
  }
</script>

