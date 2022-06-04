interface Props {
  isTrue: boolean
  children: React.ReactElement
}

export const If: React.FC<Props> = ({ isTrue, children }) => (isTrue ? children : null)
