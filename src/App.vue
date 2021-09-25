<template>
  <img alt="Vue logo" src="https://raw.githubusercontent.com/4NUBlS/4NUBlS/master/assets/avatar_1.png" height="240" width="240">
  <HelloWorld msg="Welcome" name="4NUB!S"/>
  <button @click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
  <input v-model="message" placeholder="enter">
  <p>Message is: {{ message }}</p>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data() {
    return {
      counter: 0,
      message: ''
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
