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

const data = ref([
  { name: '张三', age: 18, address: '北京市朝阳区' },
  { name: '李四', age: 20, address: '北京市海淀区' },
  { name: '王五', age: 22, address: '北京市昌平区' },
])
</script>

<template>
  <div class="components-wrapper">
    <UTable :data="data" :columns="columns" />
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
