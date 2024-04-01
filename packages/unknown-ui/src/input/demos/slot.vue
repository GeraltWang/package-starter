<docs>
---
title: 输入框插槽
---
</docs>

<script setup lang="ts">
import { ref } from 'vue'

const value1 = ref('small')

const value2 = ref('default')

const value3 = ref('large')
</script>

<template>
  <div class="components-wrapper">
    <UInput v-model="value1" size="small">
      <template #prefix>
        A
      </template>
    </UInput>
    <UInput v-model="value2">
      <template #suffix>
        B
      </template>
    </UInput>
    <UInput v-model="value3" size="large">
      <template #prefix>
        AA
      </template>
      <template #suffix>
        BB
      </template>
    </UInput>
  </div>
</template>

<style scoped>
.components-wrapper {
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}
</style>
