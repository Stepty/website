// components/Footer.tsx
import Link from 'next/link'
import { Instagram, Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const socials = [
    { href: 'https://instagram.com/ni_stephen', icon: <Instagram size={20} />, label: 'Twitter' },
    { href: 'https://github.com/Stepty', icon: <Github size={20} />, label: 'GitHub' },
    { href: 'https://linkedin.com/in/stephen-ni-991b1b265', icon: <Linkedin size={20} />, label: 'LinkedIn' },
    { href: 'mailto:stephen7ni@gmail.com', icon: <Mail size={20} />, label: 'Email' },
  ]

  return (
    <footer className="border-t pt-8 pb-6 bg-blue-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-gray-600 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Stephen Ni. All rights reserved.
        </p>
        <div className="flex space-x-6">
          {socials.map(({ href, icon, label }) => (
            <Link
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-gray-900 transition"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
