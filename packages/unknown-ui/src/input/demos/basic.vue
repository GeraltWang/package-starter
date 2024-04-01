<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('unknown-ui')
</script>

<template>
  <div class="components-wrapper">
    <div>{{ value }}</div>
    <UInput v-model="value" />
  </div>
</template>

<style scoped>
.components-wrapper {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}
</style>
