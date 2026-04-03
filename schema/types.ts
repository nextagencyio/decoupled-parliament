// Auto-generated TypeScript types from Drupal GraphQL schema.
// Run `decoupled-cli schema sync` to regenerate.

export interface NodeCommittee {
  id: string;
  body: { value: string; summary?: string };
  chairName: string;
  committeeType: any[];
  image: { url: string; alt: string; width: number; height: number };
  meetingSchedule: string;
  memberCount: number;
  path: string;
  title: string;
}

export interface NodeHomepage {
  id: string;
  ctaDescription: { value: string };
  ctaPrimary: string;
  ctaSecondary: string;
  ctaTitle: string;
  featuredItemsTitle: string;
  heroDescription: { value: string };
  heroSubtitle: string;
  heroTitle: string;
  path: string;
  statsItems: any[];
  title: string;
}

export interface ParagraphStatItem {
  id: string;
  label: string;
  number: string;
}

export interface NodeLegislation {
  id: string;
  billNumber: string;
  body: { value: string; summary?: string };
  category: any[];
  committeeReferral: string;
  introducedDate: { time: string };
  legislationStatus: string;
  path: string;
  sponsor: string;
  title: string;
}

export interface NodeMember {
  id: string;
  body: { value: string; summary?: string };
  constituency: string;
  email: string;
  firstElected: string;
  party: any[];
  path: string;
  phone: string;
  photo: { url: string; alt: string; width: number; height: number };
  position: string;
  title: string;
}

export interface NodeNews {
  id: string;
  body: { value: string; summary?: string };
  category: any[];
  featured: boolean;
  image: { url: string; alt: string; width: number; height: number };
  path: string;
  title: string;
}

export interface NodePage {
  id: string;
  body: { value: string; summary?: string };
  path: string;
  title: string;
}

export interface NodeSession {
  id: string;
  agendaUrl: string;
  body: { value: string; summary?: string };
  broadcastUrl: string;
  endTime: { time: string };
  location: string;
  path: string;
  sessionDate: { time: string };
  sessionType: any[];
  title: string;
}
