<docs>
---
title: 点击触发通知
---
</docs>

<script setup lang="ts">
import { Notification } from 'unknown-ui'

const showNotification = () => {
  Notification.info({
    title: '通知',
    content: '这是一条通知',
    duration: 5000,
  })
}
</script>

<template>
  <div class="components-wrapper">
    <UButton type="primary" @click="showNotification">
      click me
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
