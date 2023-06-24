<template>
  <div class="box">
    <h1>pinia</h1>
    <hr />
    <div class="container">
      <Child1 :todos="todos">
        <template v-slot:anran>
          <div>
            <pre>I am anran</pre>
          </div>
        </template>
        <template v-slot:date>
          <div>
            <p>today is 2023-06-25 00:22:00</p>
          </div>
        </template>
        <template v-slot="{ $row, $index }">
          <span :style="{ color: $row.done ? 'green' : 'red' }">{{ $row.title }}-{{ $index }}</span>
        </template>
      </Child1>
      <Child2></Child2>
    </div>
  </div>
</template>

<script setup lang="ts">
  import Child1 from './PiniaChild1.vue'
  import Child2 from './PiniaChild2.vue'
  import { ref } from 'vue'
  let todos = ref([
    { id: 1, title: '吃饭', done: true },
    { id: 2, title: '睡觉', done: false },
    { id: 3, title: '打豆豆', done: true },
    { id: 4, title: '打游戏', done: false }
  ])
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 600px;
    background-color: yellowgreen;
  }
  .container {
    display: flex;
    justify-content: space-between;
  }
</style>
