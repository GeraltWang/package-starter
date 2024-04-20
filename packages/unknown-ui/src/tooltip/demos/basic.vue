<docs>
---
title: 基础使用
---
</docs>

<script setup lang="ts"></script>

<template>
  <div class="components-wrapper">
    <UTooltip placement="top">
      <button>tooltip</button>
      <template #content>
        <div>这是一个tooltip</div>
      </template>
    </UTooltip>
  </div>
</template>

<style scoped>
.components-wrapper {
	display: flex;
	flex-flow: column wrap;
	gap: 10px;
}
</style>
