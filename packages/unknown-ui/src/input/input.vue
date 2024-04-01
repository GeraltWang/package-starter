<script setup lang="ts">
import { nextTick, onMounted, ref, useAttrs, useSlots } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import { omit, pick } from 'lodash-es'
import { type InputProps, originalInputAttrs } from './interface'

defineOptions({
  name: 'UInput',
  inheritAttrs: false,
})

const props = withDefaults(defineProps<InputProps>(), {
  size: 'default',
  outline: true,
})

const emit = defineEmits<{
  'update:modelValue': [string]
}>()

defineSlots<{
  prefix(): any
  suffix(): any
}>()

const attrs = useAttrs()

const slots = useSlots()

const { c, cx, cm, ce } = useClassNames('input')

const cls = cx(() => {
  return {
    [c()]: true,
    [c(cm('disabled'))]: props.disabled,
    [c('size', cm(props.size))]: !!props.size,
    [c(cm('outline'))]: props.outline,
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

function focus() {
  inputRef.value?.focus()
}

function blur() {
  inputRef.value?.blur()
}

defineExpose({
  focus,
  blur,
})

onMounted(() => {
  setInputValue()
})
</script>

<template>
  <div :class="cls" v-bind="omit(attrs, originalInputAttrs)">
    <span v-if="slots.prefix" :class="c(ce('prefix'))">
      <slot name="prefix" />
    </span>
    <input ref="inputRef" :class="inputCls" v-bind="pick(attrs, originalInputAttrs)" :value="modelValue" type="text" :disabled="props.disabled" @input="handleInput">
    <span v-if="slots.suffix" :class="c(ce('suffix'))">
      <slot name="suffix" />
    </span>
  </div>
</template>

<style scoped>

</style>
