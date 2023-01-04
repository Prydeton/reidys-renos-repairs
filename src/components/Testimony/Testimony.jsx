import { TestimonyContainer, TestimonyContent } from './Testimony.styles'

const Testimony = ({text}) => <TestimonyContainer>
  <TestimonyContent>
    <span>"</span>
    <p>{text}</p>
    <span>"</span>
  </TestimonyContent>
</TestimonyContainer>

export default Testimony
