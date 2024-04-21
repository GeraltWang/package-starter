import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import type { HeaderProps } from './interface'

export const Header = defineComponent({
  name: 'Header',
  props: {
    columns: {
      type: Array as PropType<HeaderProps['columns']>,
      default: () => [],
    },
  },
  setup(props) {
    return () => {
      const RenderColumns = () => {
        return props.columns?.map((column) => {
          return <th>{column.title}</th>
        })
      }
      return (
        <thead>
          <tr>{RenderColumns()}</tr>
        </thead>
      )
    }
  },
})
