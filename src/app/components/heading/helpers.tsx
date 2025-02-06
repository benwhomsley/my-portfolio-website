import { ElementType } from 'react'

export const getStyles = (component: ElementType) => {
  if (component === 'h1') return 'text-6xl sm:text-8xl font-bold text-gray-100'
  if (component === 'h2') return 'text-4xl sm:text-6xl font-bold text-gray-100'
  if (component === 'h3') return 'text-2xl sm:text-4xl font-bold text-gray-100'
  if (component === 'h4') return 'text-xl sm:text-2xl font-bold text-gray-100'
  if (component === 'h5')
    return 'text-lg sm:text-xl font-bold text-gray-100 leading-6'
}
