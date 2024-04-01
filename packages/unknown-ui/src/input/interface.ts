export interface InputProps {
  modelValue?: string
  disabled?: boolean
  size?: InputSize
  outline?: boolean
}

export type InputSize = 'small' | 'default' | 'large'

export const originalInputAttrs = [
  'autocomplete',
  'autofocus',
  'placeholder',
]
