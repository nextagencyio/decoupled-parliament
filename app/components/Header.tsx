'use client'

import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import clsx from 'clsx'
import { Menu, X, Landmark, Phone, Mail, Clock } from 'lucide-react'

const navigationItems = [
  { name: 'Home', href: '/' },
  { name: 'Members', href: '/members' },
  { name: 'Committees', href: '/committees' },
  { name: 'Legislations', href: '/legislation' },
  { name: 'Sessions', href: '/sessions' },
  { name: 'News', href: '/news' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    const updateBannerHeight = () => {
      const bannerEl = document.querySelector('[class*="bg-amber-500"]') as HTMLElement
      setBannerHeight(bannerEl ? bannerEl.offsetHeight : 0)
    }
    updateBannerHeight()
    const observer = new MutationObserver(updateBannerHeight)
    observer.observe(document.body, { childList: true, subtree: true, attributes: true })
    window.addEventListener('resize', updateBannerHeight)
    return () => { observer.disconnect(); window.removeEventListener('resize', updateBannerHeight) }
  }, [])

  const getActiveTab = () => {
    if (pathname === '/') return 'Home'
    for (const item of navigationItems) {
      if (item.href !== '/' && pathname.startsWith(item.href)) {
        return item.name
      }
    }
    return null
  }

  const activeTab = getActiveTab()

  return (
    <header className="sticky z-50" style={{ top: bannerHeight }}>
      {/* Utility Bar */}
      <div className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-10 text-xs">
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Phone className="w-3 h-3" /> +355 42 555 000
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Mail className="w-3 h-3" /> info@parliament.ald
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3 h-3" /> Mon-Sat 9:00 AM - 5:00 PM
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200">
              <div className="flex-shrink-0 w-10 h-10 bg-primary-800 rounded-lg flex items-center justify-center">
                <Landmark className="w-5 h-5 text-accent-400" />
              </div>
              <div className="hidden sm:block">
                <span className="text-lg font-bold text-primary-900 font-display">Parliament of Aldoria</span>
                <span className="text-xs text-slate-400 block -mt-1 tracking-wider uppercase">The People&apos;s Legislature</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={clsx(
                    'px-4 py-2 text-sm font-medium transition-colors relative',
                    activeTab === item.name
                      ? 'text-primary-900 border-b-2 border-accent-500'
                      : 'text-slate-600 hover:text-primary-900'
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex items-center space-x-4">
              <Link
                href="/contact"
                className="hidden sm:inline-flex items-center bg-accent-500 text-primary-900 px-5 py-2 rounded-lg hover:bg-accent-600 transition-colors duration-200 font-semibold text-sm"
              >
                Contact Parliament
              </Link>

              <button
                type="button"
                className="lg:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-600 hover:text-primary-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open menu</span>
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-slate-200 py-4">
              <nav className="flex flex-col space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={clsx(
                      'px-4 py-3 rounded-lg text-sm font-medium transition-colors',
                      activeTab === item.name
                        ? 'bg-primary-50 text-primary-900'
                        : 'text-slate-600 hover:text-primary-900 hover:bg-slate-50'
                    )}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
