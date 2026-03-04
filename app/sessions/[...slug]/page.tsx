import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { headers } from 'next/headers'
import Link from 'next/link'
import { getServerApolloClient } from '@/lib/apollo-client'
import { GET_SESSION_BY_PATH } from '@/lib/queries'
import { DrupalSession } from '@/lib/types'
import Header from '../../components/Header'
import ResponsiveImage from '../../components/ResponsiveImage'
import { ArrowLeft } from 'lucide-react'

export const revalidate = 300

interface PageProps {
  params: Promise<{ slug: string[] }>
}

interface SessionByPathData {
  route: {
    entity: DrupalSession
  } | null
}

async function getSession(path: string): Promise<DrupalSession | null> {
  try {
    const requestHeaders = await headers()
    const apolloClient = getServerApolloClient(requestHeaders)
    const { data } = await apolloClient.query<SessionByPathData>({
      query: GET_SESSION_BY_PATH,
      variables: { path },
      fetchPolicy: 'cache-first',
    })
    return data?.route?.entity || null
  } catch (error) {
    console.error('Error fetching session:', error)
    return null
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const path = `/sessions/${slug.join('/')}`
  const item = await getSession(path)

  if (!item) {
    return { title: 'Session Not Found | Parliament of Aldoria' }
  }

  return {
    title: `${item.title} | Parliament of Aldoria`,
    description: ((item as any).body?.processed ? (item as any).body.processed.replace(/<[^>]*>/g, '').substring(0, 160) : '') || `Learn more about ${item.title}.`,
  }
}

export default async function SessionDetailPage({ params }: PageProps) {
  const { slug } = await params
  const path = `/sessions/${slug.join('/')}`
  const item = await getSession(path)

  if (!item) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/sessions"
            className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Sessions
          </Link>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            {item.title}
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">


              {(item as any).body?.processed && (
                <div className="bg-white rounded-xl shadow-sm p-8">
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: (item as any).body.processed }}
                  />
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Details</h3>
                <dl className="space-y-4">
                  {(item as any).location && (
                    <div>
                      <dt className="text-sm text-gray-500">Location</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).location}</dd>
                    </div>
                  )}
                  {(item as any).agendaUrl && (
                    <div>
                      <dt className="text-sm text-gray-500">Agenda/Order Paper URL</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).agendaUrl}</dd>
                    </div>
                  )}
                  {(item as any).broadcastUrl && (
                    <div>
                      <dt className="text-sm text-gray-500">Live Broadcast URL</dt>
                      <dd className="font-semibold text-gray-900">{(item as any).broadcastUrl}</dd>
                    </div>
                  )}
                </dl>
                <div className="mt-8">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-3 bg-blue-700 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
