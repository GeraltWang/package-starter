export interface ButtonProps {
  type?: ButtonType
  outline?: ButtonOutline
  disabled?: boolean
  size?: ButtonSize
}

export type ButtonType = 'default' | 'primary' | 'success' | 'warning' | 'error'

export type ButtonOutline = 'default' | 'dashed' | 'none'

export type ButtonSize = 'default' | 'small' | 'large'
