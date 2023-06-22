<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
    <div class="counter">
      <button @click="decrement">-</button>
      <span>{{ count }}</span>
      <button @click="increment">+</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from 'vue'
  export default defineComponent({
    name: 'MyCounter',
    setup() {
      const count = ref(0)
      function increment() {
        count.value++
      }
      function decrement() {
        count.value--
      }
      return { count, increment, decrement }
    }
  })
</script>
<style lang="scss">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  nav {
    padding: 30px;
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      margin: 0 8px;
      padding: 4px 8px;
      font-size: 16px;
    }
    span {
      font-size: 24px;
    }
  }
</style>
