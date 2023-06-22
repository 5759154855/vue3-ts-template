<template>
  <div class="son">
    <h1>我是子组件 enent</h1>
    <button @click="handler">click me</button>
    <button @click="$emit('click', 'a', 'b')">click me</button>
  </div>
</template>

<script setup lang="ts">
  let $emit = defineEmits(['xxx', 'click'])
  const handler = () => $emit('xxx', 1, 2)
</script>

<style scoped>
  .son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
  }
</style>
