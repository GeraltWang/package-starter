<docs>
---
title: 使用 vnode 作为内容
---
</docs>

<script setup lang="tsx">
import { Notification } from 'unknown-ui'
import { defineComponent, h } from 'vue'

const CustomContent = defineComponent({
  setup() {
    return () => (
      <p style={{ color: 'skyblue' }}>这是一条自定义内容</p>
    )
  },
})

const showNotification = () => {
  Notification.info({
    title: '通知',
    content: h(CustomContent),
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
