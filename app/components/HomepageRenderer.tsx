'use client'

import Header from './Header'
import HeroSection from './HeroSection'
import StatsSection from './StatsSection'
import CTASection from './CTASection'
import ErrorBoundary from './ErrorBoundary'
import { DrupalHomepage } from '@/lib/types'
import { Landmark, Users, FileText, CheckSquare, Globe, BookOpen, Shield } from 'lucide-react'

interface HomepageRendererProps {
  homepageContent: DrupalHomepage | null | undefined
}

const parliamentaryWork = [
  { icon: Landmark, title: 'Legislative Process', description: 'Bills, acts, and amendments are debated, scrutinized, and voted upon through a rigorous parliamentary process.' },
  { icon: Users, title: 'Representation', description: 'Elected members represent the interests, concerns, and aspirations of constituents from across the nation.' },
  { icon: FileText, title: 'Committee Oversight', description: 'Standing and select committees examine policy, hold hearings, and produce reports that shape national discourse.' },
  { icon: CheckSquare, title: 'Accountability', description: 'Parliament holds the government accountable through question time, debates, and investigative inquiries.' },
  { icon: Globe, title: 'International Relations', description: 'Parliamentary diplomacy and inter-parliamentary cooperation strengthen ties with legislatures worldwide.' },
  { icon: BookOpen, title: 'Public Records', description: 'Hansard, committee reports, and legislative archives ensure transparency and public access to proceedings.' },
]

const institutionalBodies = [
  'Legislative Sessions',
  'Standing Committees',
  'Public Records Office',
]

export default function HomepageRenderer({ homepageContent }: HomepageRendererProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <ErrorBoundary>
        <HeroSection homepageContent={homepageContent} />
      </ErrorBoundary>

      <ErrorBoundary>
        <StatsSection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Parliamentary Work Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Work
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              How Parliament Works
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              The Parliament of Aldoria fulfills its constitutional mandate through legislation, oversight, representation, and public engagement.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {parliamentaryWork.map((item, i) => {
              const Icon = item.icon
              return (
                <div
                  key={i}
                  className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors"
                >
                  <div className="w-10 h-10 bg-accent-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-accent-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-primary-900 mb-2">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Institutional Bodies Section */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-sm font-semibold text-slate-400 tracking-wider uppercase">
              Parliamentary Institutions
            </h3>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {institutionalBodies.map((body, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm font-medium">{body}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Icon Showcase Section */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-900 font-display">
              Democracy in Action
            </h2>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {[Landmark, Users, FileText, CheckSquare, Globe, BookOpen].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mb-2">
                  <Icon className="w-6 h-6 text-primary-700" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-accent-600 text-sm font-semibold tracking-wider uppercase mb-2">
              Our Parliament
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4 font-display">
              Serving the People of Aldoria
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              From chamber debates to committee hearings, Parliament works tirelessly to represent the will of the people.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { src: 'https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80&fit=crop', alt: 'Parliament building exterior' },
              { src: 'https://images.unsplash.com/photo-1555848962-6e79363ec58f?w=600&q=80&fit=crop', alt: 'Legislative chamber in session' },
              { src: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop', alt: 'Document signing ceremony' },
              { src: 'https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80&fit=crop', alt: 'Parliamentary committee meeting' },
            ].map((photo, i) => (
              <div key={i} className="relative h-56 rounded-lg overflow-hidden group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary-900/20 group-hover:bg-primary-900/10 transition-colors" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <ErrorBoundary>
        <CTASection homepageContent={homepageContent} />
      </ErrorBoundary>

      {/* Footer */}
      <footer className="bg-primary-950 text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-12 border-b border-primary-800">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
                  <Landmark className="w-4 h-4 text-primary-900" />
                </div>
                <span className="text-lg font-bold text-white font-display">Parliament of Aldoria</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                The supreme legislative body of the nation, serving the people of Aldoria through democratic governance.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Parliament</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/members" className="hover:text-accent-400 transition-colors">Members</a></li>
                <li><a href="/committees" className="hover:text-accent-400 transition-colors">Committees</a></li>
                <li><a href="/legislation" className="hover:text-accent-400 transition-colors">Legislation</a></li>
                <li><a href="/sessions" className="hover:text-accent-400 transition-colors">Sessions</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Resources</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li><a href="/news" className="hover:text-accent-400 transition-colors">News</a></li>
                <li><a href="/about" className="hover:text-accent-400 transition-colors">About Parliament</a></li>
                <li><a href="/contact" className="hover:text-accent-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 text-sm tracking-wider uppercase">Contact</h4>
              <ul className="space-y-2.5 text-slate-400 text-sm">
                <li>Parliament House</li>
                <li>Constitution Square, Aldoria City</li>
                <li className="pt-1">
                  <a href="mailto:info@parliament.ald" className="hover:text-accent-400 transition-colors">info@parliament.ald</a>
                </li>
                <li>
                  <a href="tel:+35542555000" className="hover:text-accent-400 transition-colors">+355 42 555 000</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} National Parliament of Aldoria. All rights reserved.
            </p>
            <div className="flex gap-6 text-slate-500 text-sm">
              <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
