import { computed, defineComponent, onMounted, onUnmounted, ref } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import type { VirtualListProps } from './interface'

export default defineComponent(
  (props: VirtualListProps, { slots, emit }) => {
    const { c } = useClassNames('virtual-list')

    const scrollRef = ref<HTMLDivElement | null>(null)

    const containerHeight = computed(() => {
      if (scrollRef.value)
        return scrollRef.value.clientHeight
      return props.height || 300
    })

    const scrollTop = ref(0)

    const sliceData = computed(() => {
      const { itemHeight = 40, buffer = 5, data = [] } = props
      // 显示的 item 数量 向上取整
      const showCount = Math.ceil(containerHeight.value / itemHeight)
      // 当前滚动到的 item 索引 向下取整
      const countIndex = Math.floor(scrollTop.value / itemHeight) - buffer
      // 截取索引 开始 可能为负数，所以和 0 取最大值
      const startIndex = Math.max(0, countIndex)
      // 截取索引 结束
      const endIndex = showCount + buffer * 2 + countIndex

      return data.slice(startIndex, endIndex).map((item, index) => ({
        data: item,
        index: startIndex + index,
        key: `virtual-list-${startIndex + index}`,
        top: (startIndex + index) * itemHeight,
      }))
    })

    const handleScroll = () => {
      scrollTop.value = scrollRef.value?.scrollTop || 0
    }

    onMounted(() => {
      if (scrollRef.value)
        scrollRef.value?.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
      if (scrollRef.value)
        scrollRef.value?.removeEventListener('scroll', handleScroll)
    })

    const handleClick = (item: any) => {
      emit('clickItem', item)
    }

    return () => {
      const { itemHeight = 40, data = [] } = props

      const containerStyle = {
        height: `${containerHeight.value}px`,
      }

      const bodyHeight = data.length * itemHeight

      const bodyStyle = {
        height: `${bodyHeight}px`,
      }

      const cls = {
        [c()]: true,
      }

      const bodyCls = {
        [c('body')]: true,

      }

      const renderList = () => {
        const itemCls = {
          [c('item')]: true,
        }
        return sliceData.value.map(item => (
          <div class={itemCls} key={item.key} style={{ top: `${item.top}px`, height: `${itemHeight}px` }} onClick={() => handleClick(item)}>
            {slots['list-item'] && slots['list-item']?.(item)}
          </div>
        ))
      }

      return (
        <div ref={scrollRef} class={cls} style={containerStyle}>
          <div class={bodyCls} style={bodyStyle}>
            {renderList()}
          </div>
        </div>
      )
    }
  },
  {
    name: 'UVirtualList',
    props: ['height', 'itemHeight', 'buffer', 'data'],
    emits: ['clickItem'],
  },
)
