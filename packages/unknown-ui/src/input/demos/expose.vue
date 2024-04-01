<docs>
---
title: 使用内置方法
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value = ref('unknown-ui')

const inputRef = ref()

function handleFocus() {
  inputRef.value?.focus()
}
</script>

<template>
  <div class="components-wrapper">
    <div>{{ value }}</div>
    <UInput ref="inputRef" v-model="value" />
    <UButton type="primary" @click="handleFocus">
      Focus
    </UButton>
  </div>
</template>

<style scoped>
.components-wrapper {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}
</style>
