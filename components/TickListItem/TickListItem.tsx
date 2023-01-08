import { FC } from 'react'
import { CheckSquare } from 'lucide-react'

import { TickListItemWrapper } from './TickListItem.styles'

interface TickListItemProps {
  text: string
}

const TickListItem: FC<TickListItemProps> = ({ text }) => <TickListItemWrapper>
  <CheckSquare />
  <p>{text}</p>
</TickListItemWrapper>

export default TickListItem
