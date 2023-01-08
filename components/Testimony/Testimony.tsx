import { FC } from 'react'

import { TestimonyContainer, TestimonyContent } from './Testimony.styles'

interface TestimonyProps {
  text: string
}

const Testimony: FC<TestimonyProps> = ({text}) => <TestimonyContainer>
  <TestimonyContent>
    <span>"</span>
    <p>{text}</p>
    <span>"</span>
  </TestimonyContent>
</TestimonyContainer>

export default Testimony
