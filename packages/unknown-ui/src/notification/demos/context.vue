<docs>
---
title: 为组件注入 AppContext
---
</docs>

<script setup lang="tsx">
import { Notification, Button as UButton } from 'unknown-ui'
import { defineComponent, getCurrentInstance, h } from 'vue'

const context = getCurrentInstance()?.appContext

const CustomContent = defineComponent({
  setup() {
    return () => (
      <p style={{ color: 'skyblue' }}>
        这是一条自定义内容
        <UButton>点击查看</UButton>
      </p>
    )
  },
})

const showNotification = () => {
  Notification.info({
    title: '通知',
    content: h(CustomContent),
    duration: 5000,
    appContext: context,
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
