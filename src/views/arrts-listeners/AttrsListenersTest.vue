<template>
  <div class="box">
    <h1>userAttrs</h1>
    <el-button type="primary" size="smail" :icon="Edit"></el-button>
    <HintButton _type="primary" _size="smail" :_icon="Edit" _title="编辑按钮"></HintButton>
  </div>
</template>

<script setup lang="ts">
  import HintButton from './HintButton.vue'
  import { Edit } from '@element-plus/icons-vue'
</script>

<style scoped>
  .box {
    width: 100vw;
    height: 400px;
    background-color: yellowgreen;
  }
</style>
