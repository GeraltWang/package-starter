<script setup lang="ts">
import { nextTick, onMounted, ref, useSlots } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import type { InputProps } from './interface'

defineOptions({
  name: 'UInput',
})

const props = withDefaults(defineProps<InputProps>(), {
  size: 'default',
})

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

defineSlots<{
  prefix(): any
  suffix(): any
}>()

const slots = useSlots()

const { c, cx, cm, ce } = useClassNames('input')

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c(cm(props.size))]: !!props.size,
    // [c(cm(props.type))]: true,
    // [c('outline', cm(props.outline))]: true,
    // [c('size', cm(props.size))]: true,
  }
})

const inputCls = cx(() => {
  return {
    [c('input')]: true,
  }
})

const inputRef = ref<HTMLInputElement | null>(null)

function setInputValue() {
  const _input = inputRef.value
  if (!_input || _input.value === props.modelValue)
    return
  _input.value = props.modelValue ?? ''
}

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  if (props.modelValue === target.value)
    return
  emit('update:modelValue', target.value)
  nextTick(() => {
    setInputValue()
  })
}

onMounted(() => {
  setInputValue()
})
</script>

<template>
  <div :class="cls">
    <span v-if="slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" :class="inputCls" :value="modelValue" type="text" :disabled="props.disabled" @input="handleInput">
    <span v-if="slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style scoped>

</style>
