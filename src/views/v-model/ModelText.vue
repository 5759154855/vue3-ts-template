<template>
  <div class="box">
    <h1>我是父组件 model-money:{{ money }}</h1>
    <hr />
    <Chind v-model:money="money" v-model:age="age"></Chind>
  </div>
</template>

<script setup lang="ts">
  import Chind from './ModelChild.vue'
  import { ref } from 'vue'
  let money = ref(10000)
  let age = ref(18)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
