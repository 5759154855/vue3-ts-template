<template>
  <div class="son">
    <h1>我是子组件 model</h1>
    <p>自己的钱：{{ my_money }}</p>
    <el-button @click="handler1($parent)">还我100元</el-button>
    <hr />
    <p>money:{{ money }}</p>
    <p>age:{{ age }}</p>
    <el-button @click="$emit('update:money', money - 1000)">money - 1000</el-button>
    <el-button @click="handler">money + 1000</el-button>
    <br />
    <el-button @click="$emit('update:age', age - 1)">age - 1</el-button>
    <el-button @click="$emit('update:age', age + 1)">age + 1</el-button>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  let my_money = ref(1000)
  let props = defineProps(['money', 'age'])
  let $emit = defineEmits(['update:money', 'update:age'])
  defineExpose({
    my_money
  })
  const handler = () => {
    $emit('update:money', props.money + 1000)
  }
  interface ModelText {
    money: number
  }
  const handler1 = (parent: ModelText) => {
    my_money.value += 100
    parent.money -= 100
  }
</script>

<style scoped>
  .son {
    width: 400px;
    background-color: hotpink;
  }
</style>
