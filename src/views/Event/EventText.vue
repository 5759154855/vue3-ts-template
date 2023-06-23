<template>
  <div class="box">
    <h1>我是父组件 enent</h1>
    <EventChild @xxx="handler" @click="handler"></EventChild>
    <p>param1:{{ p1 }} - param2:{{ p2 }}</p>
  </div>
</template>

<script setup lang="ts">
  import EventChild from './EventChild.vue'
  import { ref } from 'vue'
  let p1 = ref()
  let p2 = ref()
  const handler = (param1: number, param2: number) => {
    p1.value = param1
    p2.value = param2
  }
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
