<template>
  <div class="son">
    <h1>子组件2</h1>
    <el-button @click="handler">click me</el-button>
  </div>
</template>

<script setup lang="ts">
  import $bus from '@/bus'
  const handler = () => $bus.emit('car', { car: '法拉利' })
</script>

<style scoped>
  .son {
    width: 300px;
    height: 300px;
    background-color: hotpink;
  }
</style>
