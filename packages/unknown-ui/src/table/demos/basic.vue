<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const columns = ref([
  { title: '姓名', key: 'name' },
  { title: '年龄', key: 'age' },
  { title: '地址', key: 'address' },
])
</script>

<template>
  <div class="components-wrapper">
    <UTable :columns="columns" />
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
