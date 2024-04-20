import { computed, createVNode, defineComponent, ref } from 'vue'
import type { PropType, VNode } from 'vue'
import { useFloating } from '@floating-ui/vue'
import type { Placement } from '@floating-ui/vue'
import { filterEmpty, isBaseType } from '@v-c/utils'

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
  },
  setup(props, { slots }) {
    const reference = ref(null)
    const floating = ref(null)
    const placement = computed(() => props.placement)
    const { floatingStyles } = useFloating(reference, floating, {
      placement,
    })

    return () => {
      const RenderTooltip = () => {
        if (!reference.value)
          return null
        return (
          <div ref={floating} style={floatingStyles.value}>
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

      const ReferenceNode = createVNode(node as VNode, {
        ref: reference,
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
