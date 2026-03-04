// Shared types
export interface DrupalImage {
  url: string
  alt?: string
  width?: number
  height?: number
  variations?: ImageVariation[]
}

export interface ImageVariation {
  name: string
  url: string
  width: number
  height: number
}

export interface DrupalTerm {
  id: string
  name: string
  path?: string
}

// Base node type
export interface DrupalNode {
  __typename: string
  id: string
  title: string
  path: string
  body?: {
    processed: string
    summary?: string
  }
  image?: DrupalImage
}

// Paragraph types
export interface DrupalStatItem {
  id: string
  number: string
  label: string
}

// Homepage
export interface DrupalHomepage extends DrupalNode {
  heroTitle?: string
  heroSubtitle?: string
  heroDescription?: {
    processed: string
  }
  statsItems?: DrupalStatItem[]
  featuredItemsTitle?: string
  ctaTitle?: string
  ctaDescription?: {
    processed: string
  }
  ctaPrimary?: string
  ctaSecondary?: string
}

export interface HomepageData {
  nodeHomepages: {
    nodes: DrupalHomepage[]
  }
}

// Member of Parliament
export interface DrupalMember extends DrupalNode {
  party?: DrupalTerm[]
  constituency?: string
  position?: string
  firstElected?: string
  email?: string
  phone?: string
  photo?: DrupalImage
}

export interface MembersData {
  nodeMembers: {
    nodes: DrupalMember[]
  }
}

// Committee
export interface DrupalCommittee extends DrupalNode {
  chairName?: string
  memberCount?: number
  committeeType?: DrupalTerm[]
  meetingSchedule?: string
}

export interface CommitteesData {
  nodeCommittees: {
    nodes: DrupalCommittee[]
  }
}

// Legislation
export interface DrupalLegislation extends DrupalNode {
  billNumber?: string
  sponsor?: string
  introducedDate?: {
    timestamp: number
  }
  legislationStatus?: string
  committeeReferral?: string
  category?: DrupalTerm[]
}

export interface LegislationsData {
  nodeLegislations: {
    nodes: DrupalLegislation[]
  }
}

// Parliamentary Session
export interface DrupalSession extends DrupalNode {
  sessionDate?: {
    timestamp: number
  }
  endTime?: {
    timestamp: number
  }
  location?: string
  sessionType?: DrupalTerm[]
  agendaUrl?: string
  broadcastUrl?: string
}

export interface SessionsData {
  nodeSessions: {
    nodes: DrupalSession[]
  }
}

// News Article
export interface DrupalNews extends DrupalNode {
  category?: DrupalTerm[]
  featured?: boolean
}

export interface NewsData {
  nodeNewsItems: {
    nodes: DrupalNews[]
  }
}

// Basic Page
export interface DrupalPage extends DrupalNode {}

// Feature color type
export type FeatureColor = 'blue' | 'green' | 'purple' | 'yellow' | 'red' | 'indigo'
