<docs>
---
title: 输入框尺寸
---
`input` 输入框组件 `size` 使用例子
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('small')

const value2 = ref('default')

const value3 = ref('large')
</script>

<template>
  <div class="components-wrapper">
    <UInput v-model="value1" size="small" />
    <UInput v-model="value2" />
    <UInput v-model="value3" size="large" />
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-flow: column wrap;
	gap: 10px;
}
</style>
