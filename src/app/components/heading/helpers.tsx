import { ElementType } from 'react'

export const getStyles = (component: ElementType) => {
  if (component === 'h1') return 'text-8xl font-bold text-gray-100'
  if (component === 'h2') return 'text-6xl font-bold text-gray-100'
  if (component === 'h3') return 'text-2xl font-bold text-gray-100'
  if (component === 'h4') return 'text-xl font-bold text-gray-100'
  if (component === 'h5') return 'text-md font-bold text-gray-100'
}
