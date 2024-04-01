<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('')
</script>

<template>
  <div class="components-wrapper">
    <div>{{ value }}</div>
    <UInput v-model="value" autofocus placeholder="请输入" />
    <UInput v-model="value" :outline="false" autofocus placeholder="无边框" />
  </div>
</template>

<style scoped>
.components-wrapper {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}
</style>
