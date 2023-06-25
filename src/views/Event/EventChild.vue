<template>
  <div class="son">
    <h1>我是子组件 enent</h1>
    <button @click="handler(1, 2)">click me</button>
    <button @click="handler('a', 'b')">click me</button>
  </div>
</template>

<script setup lang="ts">
  let $emit = defineEmits(['xxx', 'click'])
  const handler = (param1: number, param2: number) => $emit('xxx', param1, param2)
</script>

<style scoped>
  .son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
  }
</style>
