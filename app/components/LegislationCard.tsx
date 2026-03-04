import Link from 'next/link'
import { DrupalLegislation } from '@/lib/types'
import { ArrowRight } from 'lucide-react'

interface LegislationCardProps {
  item: DrupalLegislation
}

export default function LegislationCard({ item }: LegislationCardProps) {
  return (
    <div className="bg-white border border-slate-200 rounded-lg p-6 hover:border-accent-300 transition-colors">
      {(item as any).billNumber && (
        <div className="text-accent-600 text-xs font-semibold tracking-wider uppercase mb-2">
          {(item as any).billNumber}
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
        View Bill <ArrowRight className="w-4 h-4 ml-1" />
      </Link>
    </div>
  )
}
