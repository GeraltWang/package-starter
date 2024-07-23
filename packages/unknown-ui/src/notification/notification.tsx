import type { PropType } from 'vue'
import { uniqueId } from 'lodash-es'
import { TransitionGroup, defineComponent, onMounted, ref } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import type { NotificationConfig, NotificationInstance, NotificationProps } from './interface'

export default defineComponent({
  name: 'UNotification',
  props: {
    onReady: {
      type: Function as PropType<(instance: NotificationInstance) => void>,
    },
  },
  setup(props, { expose }) {
    const { c } = useClassNames('notification')

    const notificationQueue = ref<NotificationConfig[]>([])

    /**
     * Add notification
     * @param config notification config
     * @returns
     */
    const add = (config: NotificationProps) => {
      // Generate unique id for each notification
      const instance: NotificationConfig = {
        ...config,
        _id: uniqueId('notification_'),
      }

      // Close notification
      const close = () => {
        notificationQueue.value = notificationQueue.value.filter(item => item._id !== instance._id)
        if (instance._timer)
          clearTimeout(instance._timer)
      }

      // Set timer to close notification
      if (instance.duration !== 0) {
        instance._timer = setTimeout(() => {
          close()
        }, instance.duration || 3000)
      }

      notificationQueue.value.push(instance)

      return close
    }

    const onReady = () => {
      props.onReady?.({
        add,
      })
    }

    onMounted(() => {
      onReady()
    })

    expose({
      add,
    })

    return () => {
      const renderNotification = () => {
        const cls = {
          [c('item')]: true,
        }

        const titleCls = {
          [c('item', 'title')]: true,
        }

        const contentCls = {
          [c('item', 'content')]: true,
        }

        return notificationQueue.value.map(item => (
          <div class={cls} key={item._id} role="alert">
            <div class={titleCls}>
              {item.title}
            </div>
            <div class={contentCls}>
              {item.content}
            </div>
          </div>
        ))
      }

      const notificationCls = {
        [c()]: true,
      }

      return (
        <>
          <div class={notificationCls}>
            <TransitionGroup name="uu-slide-right" tag="div">
              {renderNotification()}
            </TransitionGroup>
          </div>
        </>
      )
    }
  },
})
