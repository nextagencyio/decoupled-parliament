import Link from 'next/link'
import { DrupalSession } from '@/lib/types'
import { ArrowRight } from 'lucide-react'

interface SessionCardProps {
  item: DrupalSession
}

export default function SessionCard({ item }: SessionCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors">
      {(item as any).location && (
        <div className="text-accent-600 text-xs font-semibold tracking-wider uppercase mb-2">
          {(item as any).location}
        </div>
      )}

      <h3 className="text-lg font-semibold text-primary-900 mb-2">
        {item.title}
      </h3>

      {(item as any).body?.processed && (
        <p className="text-slate-500 text-sm mb-4 line-clamp-2">
          {(item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 150)}
        </p>
      )}

      <Link
        href={item.path || '#'}
        className="inline-flex items-center text-accent-600 text-sm font-medium hover:text-accent-700 transition-colors"
      >
        View Details <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  )
}
