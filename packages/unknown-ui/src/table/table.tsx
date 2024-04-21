import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import type { TableProps } from './interface'
import { Header } from './header'

export default defineComponent({
  name: 'UTable',
  props: {
    data: {
      type: Array as PropType<TableProps['data']>,
      default: () => [],
    },
    columns: {
      type: Array as PropType<TableProps['columns']>,
      default: () => [],
    },
  },
  setup(props, { slots }) {
    return () => {
      return (
        <table>
          <Header columns={props.columns} v-slots={slots}></Header>
          <tbody>
            <tr>
              <td>a</td>
              <td>b</td>
              <td>c</td>
              <td>d</td>
            </tr>
          </tbody>
        </table>
      )
    }
  },
})
