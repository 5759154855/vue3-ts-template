<template>
  <div class="box">
    <h1>我是父组件 enent</h1>
    <EventChild @xxx="handler" @click="handler"></EventChild>
  </div>
</template>

<script setup lang="ts">
  // vue3 import 默认注册 -- 只是 Vetur 提示 并不报错 不影响 不美观
  // import Chind
  // Module '"e:/project/vue3-ts-template/src/views/Event/EventChild.vue"' has no default export.Vetur(1192)
  import EventChild from './EventChild.vue'
  const handler = (param1, param2) => console.log(param1, param2)
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
