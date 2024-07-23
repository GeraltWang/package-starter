import { createVNode, render } from 'vue'
import Notification from './notification'
import type { NotificationInstance, NotificationProps } from './interface'

export const createNotification = () => {
  let instance: NotificationInstance

  const info = (config: NotificationProps) => {
    if (!instance) {
      const body = document.body
      const vm = createVNode(Notification, {
        onReady: (i: NotificationInstance) => {
          instance = i
          instance.add(config)
        },
      })
      if (config.appContext)
        vm.appContext = config.appContext
      render(vm, body)
    }
    else {
      instance.add(config)
    }
  }

  return {
    info,
  }
}
