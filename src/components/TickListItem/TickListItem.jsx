import { CheckSquare } from 'lucide-react'

import { TickListItemWrapper } from './TickListItem.styles'

const TickListItem = ({ text }) => <TickListItemWrapper>
  <CheckSquare />
  <p>{text}</p>
</TickListItemWrapper>

export default TickListItem
