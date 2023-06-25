<template>
  <div class="grand">
    <h1>孙组件</h1>
    <p>我可以使用{{ car }}</p>
    <el-button @click="handler">车坏了</el-button>
  </div>
</template>

<script setup lang="ts">
  import { inject } from 'vue'
  let car: any = inject('TOKEN')
  let handler = () => {
    car.value = '不完整的超跑'
  }
</script>

<style scoped>
  .grand {
    width: 200px;
    height: 200px;
    background-color: #ddd;
  }
</style>
