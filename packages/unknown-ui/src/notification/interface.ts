import type { AppContext, VNode } from 'vue'

export interface NotificationConfig {
  title: string | VNode
  content: string | VNode
  duration?: number
  appContext?: AppContext
  _id?: string
  _timer?: ReturnType<typeof setTimeout>
}

export type NotificationProps = Omit<NotificationConfig, '_id' | '_timer'>

export interface NotificationInstance {
  add: (config: NotificationConfig) => (() => void)
}
