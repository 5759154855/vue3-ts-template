<template>
  <div class="son">
    <h1>我是子组件 model</h1>
    <p>money:{{ money }}</p>
    <p>age:{{ age }}</p>
    <el-button @click="$emit('update:money', money - 1000)">money - 1000</el-button>
    <el-button @click="handle">money + 1000</el-button>
    <br />
    <el-button @click="$emit('update:age', age - 1)">age - 1</el-button>
    <el-button @click="$emit('update:age', age + 1)">age + 1</el-button>
  </div>
</template>

<script setup lang="ts">
  let props = defineProps(['money', 'age'])
  let $emit = defineEmits(['update:money', 'update:age'])
  const handle = () => {
    $emit('update:money', props.money + 1000)
  }
</script>

<style scoped>
  .son {
    width: 400px;
    height: 200px;
    background-color: hotpink;
  }
</style>
