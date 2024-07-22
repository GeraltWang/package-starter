<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const dataList = ref(Array.from({ length: 1000 }).map((_, index) => ({
  id: index + 1,
  name: `name-${index + 1}`,
})))
</script>

<template>
  <div class="components-wrapper">
    <UVirtualList :data="dataList" :height="600">
      <template #list-item="{ data }">
        {{ JSON.stringify(data) }}
      </template>
    </UVirtualList>
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
}
</style>
