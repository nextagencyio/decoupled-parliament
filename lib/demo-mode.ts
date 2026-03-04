/**
 * Demo Mode Module
 *
 * This file contains ALL demo/mock mode functionality.
 * To remove demo mode from a real project:
 * 1. Delete this file (lib/demo-mode.ts)
 * 2. Delete the data/mock/ directory
 * 3. Delete app/components/DemoModeBanner.tsx
 * 4. Remove DemoModeBanner from app/layout.tsx
 * 5. Remove the demo mode check from app/api/graphql/route.ts
 */

import homepageData from '@/data/mock/homepage.json'
import membersData from '@/data/mock/members.json'
import committeesData from '@/data/mock/committees.json'
import legislationsData from '@/data/mock/legislation.json'
import sessionsData from '@/data/mock/sessions.json'
import newsData from '@/data/mock/news.json'
import routesData from '@/data/mock/routes.json'

export function isDemoMode(): boolean {
  return process.env.NEXT_PUBLIC_DEMO_MODE !== 'false'
}

const mockDataMap: Record<string, any> = {
  'homepage.json': homepageData,
  'members.json': membersData,
  'committees.json': committeesData,
  'legislation.json': legislationsData,
  'sessions.json': sessionsData,
  'news.json': newsData,
  'routes.json': routesData,
}

function loadMockData(filename: string): any {
  return mockDataMap[filename] || null
}

export function handleMockQuery(body: string): any {
  try {
    const { query, variables } = JSON.parse(body)

    if (variables?.path) {
      const routePath = variables.path
      const routes = loadMockData('routes.json')
      if (routes && routes[routePath]) {
        return routes[routePath]
      }
    }

    if (query.includes('GetHomepageData') || query.includes('nodeHomepages')) {
      return loadMockData('homepage.json')
    }

    if (query.includes('GetMembers') || query.includes('nodeMembers')) {
      return loadMockData('members.json')
    }

    if (query.includes('GetCommittees') || query.includes('nodeCommittees')) {
      return loadMockData('committees.json')
    }

    if (query.includes('GetLegislations') || query.includes('nodeLegislations')) {
      return loadMockData('legislation.json')
    }

    if (query.includes('GetSessions') || query.includes('nodeSessions')) {
      return loadMockData('sessions.json')
    }

    if (query.includes('GetNews') || query.includes('nodeNews')) {
      return loadMockData('news.json')
    }

    return { data: {} }
  } catch (error) {
    console.error('Mock query error:', error)
    return { data: {}, errors: [{ message: 'Mock data error' }] }
  }
}
