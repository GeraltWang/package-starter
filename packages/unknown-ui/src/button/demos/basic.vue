<docs>
---
title: 按钮类型
---
</docs>

<script setup lang="ts">
</script>

<template>
  <div class="components-wrapper">
    <UButton>default</UButton>
    <UButton disabled>
      disabled
    </UButton>
    <UButton type="primary">
      primary
    </UButton>
    <UButton type="success">
      success
    </UButton>
    <UButton type="warning">
      warning
    </UButton>
    <UButton type="error">
      error
    </UButton>
    <UButton outline="none">
      outline none
    </UButton>
    <UButton outline="dashed">
      outline dashed
    </UButton>
  </div>
</template>

<style scoped>
.components-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
