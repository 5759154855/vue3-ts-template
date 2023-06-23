<template>
  <div class="son">
    <h1>子组件2</h1>
    <el-button @click="handler">送你法拉利</el-button>
    <el-button @click="$bus.emit('car', { car: '电动车' })">送你电动车</el-button>
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
