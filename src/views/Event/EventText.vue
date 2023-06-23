<template>
  <div class="box">
    <h1>我是父组件 enent</h1>
    <EventChild @xxx="handler" @click="handler"></EventChild>
  </div>
</template>

<script setup lang="ts">
  import EventChild from './EventChild.vue'
  const handler = (param1, param2) => console.log(param1, param2)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
