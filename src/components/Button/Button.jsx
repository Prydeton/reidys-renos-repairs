import { forwardRef } from 'react'

import { StyledButton } from './Button.styles'

const Button = forwardRef(({
  type = 'button',
  ...props
}, ref) => (
  <StyledButton
    type={type}
    as={props.href ? 'a' : 'button'}
    ref={ref}
    {...props}
  />
))

export default Button
