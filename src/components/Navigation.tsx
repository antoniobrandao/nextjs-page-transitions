'use client'

import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation'
import './Navigation.css'

const navigationLinks = [
  { id: 1, name: 'Home', path: '/' },
  { id: 2, name: 'About', path: '/about' },
]

export default function Navigation() {
  // this logic is just to highlight the active link (adding the 'active' className to the active link)
  const pathname = usePathname()
  const isActive = (path: string) => path === pathname

  return (
    <div className="nav flex gap-4 w-screen items-center mb-8">
      {navigationLinks.map(link => {
        return (
          <Link key={link.id} href={link.path} className={isActive(link.path) ? 'active' : ''}>
            {link.name}
          </Link>
        )
      })}
      <Link href="/this-route-doesnt-exist" className={!isActive('/') && !isActive('/about') ? 'active' : ''}>
        <button>404</button>
      </Link>
    </div>
  )
}
