import { CheckSquare } from 'lucide-react'

import { ServiceTickWrapper } from './ServiceTick.styles'

const ServiceTick = ({ service }) => <ServiceTickWrapper>
  <CheckSquare />
  <p>{service}</p>
</ServiceTickWrapper>

export default ServiceTick
