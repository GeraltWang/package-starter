import type { PropType } from 'vue'
import { defineComponent } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import type { HeaderProps } from './interface'

export const Header = defineComponent({
  name: 'UTableHeader',
  props: {
    columns: {
      type: Array as PropType<HeaderProps['columns']>,
      default: () => [],
    },
  },
  setup(props) {
    const { c } = useClassNames('table')

    return () => {
      const cellCls = {
        [c('cell')]: true,
        [c('header-cell')]: true,
      }

      const RenderColumns = () => {
        return props.columns?.map((column) => {
          return <th class={cellCls}>{column.title}</th>
        })
      }

      const cls = {
        [c('header')]: true,
      }

      const rowCls = {
        [c('row')]: true,
        [c('header-row')]: true,
      }

      return (
        <thead class={cls}>
          <tr class={rowCls}>{RenderColumns()}</tr>
        </thead>
      )
    }
  },
})
