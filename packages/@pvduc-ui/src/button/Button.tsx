import React, { FC } from 'react'

interface ButtonProps {
  isDisabled: boolean;
}

const Button: FC<ButtonProps> = ({ children }) => {
  return (
    <button
      role='button'
      type='submit'
    >
      {children}
    </button>
  )
}

export default Button
