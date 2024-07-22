export interface ColumnType {
  title?: string
  key?: string
}

export interface HeaderProps {
  columns?: ColumnType[]
}

export interface BodyProps {
  data?: any[]
  columns?: ColumnType[]
}

export interface TableProps {
  data?: any[]
  columns?: ColumnType[]
}
