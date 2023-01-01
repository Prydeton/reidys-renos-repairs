import { StyledButton } from './Button.styles'

const Button = ({
  type = 'button',
  ...props
}) => (
  <StyledButton
    type={type}
    {...props}
  />
)

export default Button
