<docs>
---
title: 使用 column 组件渲染数据
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const data = ref([
  { name: '张三', age: 18, address: '北京市朝阳区' },
  { name: '李四', age: 20, address: '北京市海淀区' },
  { name: '王五', age: 22, address: '北京市昌平区' },
])
</script>

<template>
  <div class="components-wrapper">
    <UTable :data="data">
      <UTableColumn key="name" title="姓名" />
      <UTableColumn key="age" title="年龄" />
      <UTableColumn key="address" title="地址" />
    </UTable>
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
