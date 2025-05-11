// components/Navbar.tsx
"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Navbar() {
  const path = usePathname()

  const links = [
    { href: '/',          label: 'Home'     },
    { href: '/about',     label: 'About'    },
    { href: '/posts',     label: 'Blog'     },
    { href: '/projects', label: 'Projects' },
    { href: '/wiki',      label: 'Wiki'      },
    { href: '/tracking',  label: 'Tracking'  },
    { href: '/contact',   label: 'Contact'   },
  ]

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-blue-100/80 shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Nav links (desktop) */}
          <div className="hidden md:flex space-x-8">
            {links.map(({ href, label }) => {
              const isActive = path === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    relative px-2 py-1 text-sm font-medium transition
                    ${isActive 
                      ? 'text-blue-600' 
                      : 'text-gray-700 hover:text-gray-900'}
                  `}
                >
                  {label}
                  {/* underline bar */}
                  <span
                    className={`
                      absolute left-0 -bottom-1 h-0.5 w-full bg-blue-600
                      transition-all
                      ${isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />
                </Link>
              )
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            {/* You can hook this up to toggle a mobile menu */}
            <button aria-label="Toggle menu" className="p-2 rounded-md hover:bg-gray-200">
              <svg className="h-6 w-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
