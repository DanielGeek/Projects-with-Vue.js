<template>
<div class="component">
  <h3>You may view the User Details here</h3>
  <p>Many Details</p>
  <p>User Name: {{ switchName() }}</p>
  <p>User Age: {{ userAge }}</p>
  <button type="button" name="button" @click="resetName">Reset Name</button>
  <button type="button" name="button" @click="resetFn()">Reset Name</button>
</div>
</template>

<script>
import {
  eventBus
} from '../main';

export default {
  props: {
    myName: {
      type: String
    },
    resetFn: Function,
    userAge: Number
  },
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = 'Daniel';
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    });
  }
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
