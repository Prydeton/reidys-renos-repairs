import { FC, ReactNode } from 'react'

import { StyledButton } from './Button.styles'

interface ButtonProps {
  children: ReactNode,
  type?: string,
  href?: string,
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({
  type = 'button',
  ...props
}) => (
  <StyledButton
    type={type}
    as={props.href ? 'a' : 'button'}
    {...props}
  />
)

export default Button
