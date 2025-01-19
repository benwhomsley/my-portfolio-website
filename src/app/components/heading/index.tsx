import { ElementType } from 'react'
import { getStyles } from './helpers'

export const Heading = ({
  component: Component,
  children,
  className,
}: {
  component: ElementType
  children: React.ReactNode
  className?: string
}) => {
  return (
    <Component className={`${getStyles(Component)} ${className}`}>
      {children}
    </Component>
  )
}

export default Heading
