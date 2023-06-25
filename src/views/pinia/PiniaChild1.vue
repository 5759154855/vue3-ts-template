<template>
  <div class="son">
    <h1>子组件1</h1>
    <p>{{ infoStore.count }} -- {{ infoStore.total }}</p>
    <slot name="anran"></slot>
    <hr />
    <slot name="date"></slot>
    <hr />
    <ul>
      <li v-for="(item, index) in todos" :key="item.id">
        <slot :$row="item" :$index="index"></slot>
      </li>
    </ul>
    <el-button @click="handler">点击我修改</el-button>
  </div>
</template>

<script setup lang="ts">
  import useInfoStore from '@/store/modules/info'
  let infoStore = useInfoStore()
  let handler = () => {
    infoStore.updateNum(10, 20)
  }
  defineProps(['todos'])
</script>

<style scoped>
  .son {
    width: 300px;
    height: 400px;
    background-color: hotpink;
  }
</style>
