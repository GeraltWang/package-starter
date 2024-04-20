<docs>
---
title: 触发方式
---
</docs>

<script setup lang="ts"></script>

<template>
  <div class="components-wrapper">
    <UTooltip placement="top" trigger="click">
      <UButton type="primary">
        click to trigger
      </UButton>
      <template #content>
        <div>这是一个tooltip</div>
      </template>
    </UTooltip>
  </div>
</template>

<style scoped>
.components-wrapper {
	/* display: flex; */
	/* flex-flow: column wrap; */
	/* gap: 10px; */
}
</style>
