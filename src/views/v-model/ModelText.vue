<template>
  <div class="box">
    <h1>我是父组件 model-money:{{ money }}</h1>
    <el-button @click="handler">借10元</el-button>
    <hr />
    <Chind ref="chind" v-model:money="money" v-model:age="age"></Chind>
  </div>
</template>

<script setup lang="ts">
  import Chind from './ModelChild.vue'
  import { Ref, ref } from 'vue'
  let money: Ref<number> = ref(10000)
  let age: Ref<number> = ref(18)
  let chind = ref()
  defineExpose({
    money
  })
  const handler = () => {
    money.value += 10
    chind.value.my_money -= 10
  }
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 500px;
    background-color: yellowgreen;
  }
</style>
