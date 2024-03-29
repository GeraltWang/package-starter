<script setup lang="ts">
import { useClassNames } from '../gen-class'

const { c, ce, cm } = useClassNames('button')
</script>

<template>
  <div :class="c('primary')">
    {{ c('primary', ce('wrapper'), cm('large')) }}
  </div>
</template>

<style scoped>

</style>
