import type { App } from 'vue'
import Table from './table'

Table.install = (app: App) => {
  app.component(Table.name!, Table)
}

export default Table
