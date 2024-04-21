export interface ColumnType {
  title?: string
  key?: string
}

export interface HeaderProps {
  columns: ColumnType[]
}

export interface TableProps {
  data?: any[]
  columns: ColumnType[]
}
