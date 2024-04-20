import { computed, createVNode, defineComponent, ref } from 'vue'
import type { PropType, VNode } from 'vue'
import { offset, useFloating } from '@floating-ui/vue'
import type { Placement } from '@floating-ui/vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassNames } from '@unknown-ui/utils'

export default defineComponent({
  name: 'UTooltip',
  props: {
    placement: {
      type: String as PropType<Placement>,
      default: 'bottom-center',
    },
    content: {
      type: String as PropType<string>,
    },
    trigger: {
      type: String as PropType<'hover' | 'click'>,
      default: 'hover',
    },
  },
  setup(props, { slots }) {
    const reference = ref(null)
    const floating = ref(null)
    const placement = computed(() => props.placement)
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
      middleware: [offset(10)],
    })

    const { c } = useClassNames('tooltip')

    const show = ref(false)

    let timer: ReturnType<typeof setTimeout> | undefined

    const handleMouseEnter = () => {
      if (props.trigger !== 'hover')
        return
      show.value = true
    }

    const handleMouseLeave = () => {
      timer = setTimeout(() => {
        show.value = false
      }, 150)
    }

    const handleClick = () => {
      if (props.trigger !== 'click')
        return
      show.value = true
    }

    return () => {
      const RenderTooltip = () => {
        if (!reference.value)
          return null

        if (!show.value)
          return null

        const cls = {
          [c()]: true,
        }

        const events = {
          onMouseenter: () => {
            if (timer)
              clearTimeout(timer)
            timer = undefined
          },
          onMouseleave: () => {
            show.value = false
          },
        }

        return (
          <div class={cls} ref={floating} style={floatingStyles.value} {...events}>
            {slots.content ? slots.content?.() : props.content}
          </div>
        )
      }

      const children = filterEmpty(slots.default?.())

      if (children && children.length < 1)
        return null

      if (children.length > 1) {
        console.warn('UTooltip can only contain one element')
        return children
      }

      const node = children[0]

      if (isBaseType(node)) {
        console.warn('UTooltip must contain a component or element')
        return node
      }

      const events = {
        onMouseenter: handleMouseEnter,
        onMouseleave: handleMouseLeave,
        onClick: handleClick,
      }

      const ReferenceNode = createVNode(node as VNode, {
        ref: reference,
        ...events,
      })
      return (
        <>
          {ReferenceNode}
          {RenderTooltip()}
        </>
      )
    }
  },
})
