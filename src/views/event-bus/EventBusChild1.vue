<template>
  <div class="son">
    <h1>子组件1</h1>
  </div>
</template>

<script setup lang="ts">
  import $bus from '@/bus'
  import { onMounted } from 'vue'
  onMounted(() => $bus.on('car', (car) => console.log(car)))
</script>

<style scoped>
  .son {
    width: 300px;
    height: 300px;
    background-color: hotpink;
  }
</style>
