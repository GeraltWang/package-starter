<script setup lang="ts">
import { useClassNames } from '@unknown-ui/utils'

defineOptions({
  name: 'UButton',
})

const props = withDefaults(defineProps<Props>(), {
  type: 'default',
  outline: 'default',
  disabled: false,
  size: 'default',
})

const emit = defineEmits(['click'])

interface Props {
  type?: 'default' | 'primary' | 'success' | 'warning' | 'error'
  outline?: 'default' | 'dashed' | 'none'
  disabled?: boolean
  size?: 'default' | 'small' | 'large'
}

const { c, cx, cm } = useClassNames('button')

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm(props.type))]: true,
    [c('outline', cm(props.outline))]: true,
    [c('size', cm(props.size))]: true,
  }
})

function handleClick(e: Event) {
  emit('click', e)
}
</script>

<template>
  <button :class="cls" :disabled="props.disabled" @click="handleClick">
    <slot />
  </button>
</template>

<style scoped>

</style>
