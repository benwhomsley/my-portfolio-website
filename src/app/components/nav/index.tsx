'use client'

import { useState } from 'react'
import OpenForWorkBadge from '../open-for-work-badge'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export const Nav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full max-w-[1200px] mx-auto z-10 backdrop-blur-sm bg-black/50">
      <div className="flex items-center justify-between p-4">
        <OpenForWorkBadge />

        <ul className="hidden sm:flex flex-row gap-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a className="link-underline font-medium" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="sm:hidden relative z-[110] flex h-8 w-8 flex-col items-center justify-center gap-1.5"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              isOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${
              isOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {isOpen && (
        <ul className="sm:hidden flex flex-col gap-4 px-4 pb-6 text-sm">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                className="link-underline font-medium"
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  )
}

export default Nav
