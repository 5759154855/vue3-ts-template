<template>
  <div class="son">
    <h1>子组件1</h1>
    <p>我有{{ car }}</p>
    <GrandSon></GrandSon>
  </div>
</template>

<script setup lang="ts">
  import $bus from '@/bus'
  import { ref, onMounted } from 'vue'
  import GrandSon from './GrandSon.vue'
  let car = ref('电动车')
  interface CarEvent {
    car: string
  }
  onMounted(() => $bus.on('car', (v: CarEvent) => (car.value = v.car)))
</script>

<style scoped>
  .son {
    width: 300px;
    height: 4 00px;
    background-color: hotpink;
  }
</style>
