<template lang="html">
  <div id="app">
    <my-cmp></my-cmp>
    <hr>
    <my-cmp></my-cmp>
    <!-- <app-server-status v-for="server in 5"></app-server-status> -->
  </div>
</template>

<script>
import Vue from 'vue'
import App from './Home.vue'

// var data = { status: 'Critical' };

 Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    };
  },
  template: '<p>Server Status: {{ status }} (<button @click="changeStatus">Change</button></p>',
  methods: {
    changeStatus: function() {
      this.status = 'Normal';
    }
  }
});


</script>
