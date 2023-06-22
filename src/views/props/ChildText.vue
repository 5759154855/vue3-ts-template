<template>
  <div class="son">
    <h1>我是子组件 propsChild</h1>
    <p>{{ money }}</p>
  </div>
</template>

<script setup lang="ts">
  let props = defineProps(['money'])
  console.log(props)
</script>

<style scoped>
  .son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
  }
</style>
