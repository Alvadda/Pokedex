import { Children } from 'react'

interface Props<T> {
  each: T[]
  render: (item: T, index: number) => JSX.Element
}

export const For = <T,>({ render, each }: Props<T>) => Children.toArray(each.map((item, index) => render(item, index) as JSX.Element))
