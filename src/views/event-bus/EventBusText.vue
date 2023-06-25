<template>
  <div class="box">
    <h1>全局事件总线$bus</h1>
    <p>我有{{ car }}</p>
    <hr />
    <div class="container">
      <Child1></Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Child1 from './EventBusChild1.vue'
  import Child2 from './EventBusChild2.vue'
  import { provide, ref } from 'vue'
  let car = ref('超跑')
  provide('TOKEN', car)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 600px;
    background-color: yellowgreen;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
</style>
