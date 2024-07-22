import { defineComponent } from 'vue'
import { useClassNames } from '@unknown-ui/utils'
import type { BodyProps } from './interface'

export const Body = defineComponent(
  (props: BodyProps = { columns: [], data: [] }) => {
    const { c } = useClassNames('table')

    return () => {
      const { columns, data } = props

      const cellCls = {
        [c('cell')]: true,
        [c('body-cell')]: true,
      }

      const renderCell = (dataItem: any) => {
        return columns?.map((v) => {
          return <td class={cellCls}>{v.key ? dataItem[v.key] : null}</td>
        })
      }

      const rowCls = {
        [c('row')]: true,
        [c('body-row')]: true,
      }

      const renderData = () => {
        return data?.map(dataItem => (
          <tr class={rowCls}>{renderCell(dataItem)}</tr>
        ))
      }

      const cls = {
        [c('body')]: true,
      }

      return (
        <tbody class={cls}>
          {renderData()}
        </tbody>
      )
    }
  },
  {
    props: ['data', 'columns'],
  },
)
