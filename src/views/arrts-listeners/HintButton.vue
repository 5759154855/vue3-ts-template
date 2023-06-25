<template>
  <div class="son">
    <el-button :type="$attrs._type" :size="$attrs._size" :icon="$attrs._icon" :title="$attrs._title"></el-button>
  </div>
</template>

<script setup lang="ts">
  import { useAttrs } from 'vue'
  let $attrs = useAttrs()
</script>

<style scoped>
  .son {
    width: 300px;
    height: 300px;
    background-color: hotpink;
  }
</style>
