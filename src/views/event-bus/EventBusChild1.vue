<template>
  <div class="son">
    <h1>子组件1</h1>
    <p>我有{{ car }}</p>
  </div>
</template>

<script setup lang="ts">
  import $bus from '@/bus'
  import { ref, onMounted } from 'vue'
  let car = ref('电动车')
  onMounted(() => $bus.on('car', (v) => (car.value = v.car)))
</script>

<style scoped>
  .son {
    width: 300px;
    height: 300px;
    background-color: hotpink;
  }
</style>
