export interface GenericResponse<T> {
  nodes: GenericItem<T>[]
}

export interface GenericItem<T> {
  node?: T
}
