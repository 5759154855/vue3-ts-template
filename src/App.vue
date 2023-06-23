<template>
  <div>
    <nav>
      <router-link to="/">event</router-link>
      <router-link to="/eventBus">eventBus</router-link>
      <router-link to="/model">model</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>
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
      margin: 5px;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
