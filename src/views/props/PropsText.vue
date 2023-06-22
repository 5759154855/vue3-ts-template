<template>
  <div class="box">
    <h1>我是父组件 props</h1>
    <Chind :money="money"></Chind>
  </div>
</template>

<script setup lang="ts">
  import Chind from './ChildText.vue'
  import { ref } from 'vue'
  let money = ref(10000)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
