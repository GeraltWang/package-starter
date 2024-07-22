import { defineComponent, isVNode } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassNames } from '@unknown-ui/utils'
import type { TableProps } from './interface'
import { Header } from './header'
import { Body } from './body'

export default defineComponent(
  (props: TableProps, { slots }) => {
    const { c } = useClassNames('table')

    return () => {
      const { columns, data } = props
      // 优先使用 columns 传入的列配置
      let validColumns: any[] = columns ?? []
      // 其次使用默认插槽传入的 TableColumn 组件
      if (validColumns.length === 0) {
        validColumns = []
        const children = filterEmpty(slots.default?.() || [])
        // 仅保留默认插槽传入的 TableColumn 组件
        children.forEach((child) => {
          if (isBaseType(child) || !isVNode(child))
            return

          if (child.type && (child as any).type.name && (child as any).type.name === 'UTableColumn')
            validColumns.push(child.props)
        })
      }

      const cls = {
        [c()]: true,
      }

      return (
        <table class={cls}>
          <Header columns={validColumns} v-slots={slots}></Header>
          <Body columns={validColumns} data={data} />
        </table>
      )
    }
  },
  {
    name: 'UTable',
    props: ['data', 'columns'],
  },
)
