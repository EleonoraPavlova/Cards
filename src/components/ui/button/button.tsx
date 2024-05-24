import { ComponentPropsWithoutRef } from 'react'
import s from './button.module.scss'
import { clsx } from 'clsx'

export type ButtonProps = {
  as: any
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
  variant = 'primary',
  fullWidth,
  className,
  as: Component = 'button',
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={clsx(s.button, s[variant], fullWidth && s.fullWidth, className)}
      {...rest}
    />
  )
}
