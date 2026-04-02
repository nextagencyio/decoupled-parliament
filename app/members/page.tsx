import { getClient } from '@/lib/drupal-client'
import { Metadata } from 'next'
import { GET_MEMBERS } from '@/lib/queries'
import { MembersData } from '@/lib/types'
import Header from '../components/Header'
import MemberCard from '../components/MemberCard'

export const revalidate = 3600
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Members of Parliament | National Parliament of Aldoria',
  description: 'Find your elected representative. Browse all Members of Parliament by constituency, party, and position.',
}

async function getMembers() {
  try {
    const client = getClient()
    const { data } = await client.raw(GET_MEMBERS, { first: 50 })
    return data?.nodeMembers?.nodes || []
  } catch (error) {
    console.error('Error fetching members:', error)
    return []
  }
}

export default async function MembersPage() {
  const items = await getMembers()

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <section className="bg-gradient-to-br from-primary-800 via-primary-900 to-primary-950 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-accent-400 text-sm font-semibold tracking-wider uppercase mb-3">
              Your Representatives
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
              Members of Parliament
            </h1>
            <p className="text-lg text-slate-300">
              Find your elected representative. Contact your MP and learn about their work in Parliament.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {items.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-semibold text-gray-600 mb-2">No Members Yet</h2>
              <p className="text-gray-500">Members will appear here once content is imported.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((item) => (
                <MemberCard key={item.id} item={item} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
