<template>
  <div class="son">
    <h1>子组件2</h1>
    <p>{{ infoStore.count }}</p>
    <ul>
      <li v-for="item in todoStore.todos" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
    <el-button @click="updateTodo">添加啦啦啦</el-button>
    <p>{{ todoStore.arr }} 相加 = {{ todoStore.total }}</p>
  </div>
</template>

<script setup lang="ts">
  import useInfoStore from '@/store/modules/info'
  import useTodoStore from '@/store/modules/todo'
  let infoStore = useInfoStore()
  let todoStore = useTodoStore()
  console.log('todoStore', todoStore)

  const updateTodo = () => {
    todoStore.updataTodo()
  }
</script>

<style scoped>
  .son {
    width: 300px;
    height: 400px;
    background-color: hotpink;
  }
</style>
