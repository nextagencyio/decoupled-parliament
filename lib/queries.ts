import { gql } from '@apollo/client'

// Homepage query with stats
export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    nodeHomepages(first: 1) {
      nodes {
        id
        title
        path
        heroTitle
        heroSubtitle
        heroDescription {
          processed
        }
        statsItems {
          ... on ParagraphStatItem {
            id
            number
            label
          }
        }
        featuredItemsTitle
        ctaTitle
        ctaDescription {
          processed
        }
        ctaPrimary
        ctaSecondary
      }
    }
  }
`

// Members of Parliament
export const GET_MEMBERS = gql`
  query GetMembers($first: Int = 50) {
    nodeMembers(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeMember {
          body {
            processed
            summary
          }
          party {
            ... on TermInterface {
              id
              name
            }
          }
          constituency
          position
          firstElected
          email
          phone
          photo {
            url
            alt
            width
            height
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_MEMBER_BY_PATH = gql`
  query GetMemberByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeMember {
            id
            title
            path
            body {
              processed
            }
            party {
              ... on TermInterface {
                id
                name
              }
            }
            constituency
            position
            firstElected
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Committees
export const GET_COMMITTEES = gql`
  query GetCommittees($first: Int = 20) {
    nodeCommittees(first: $first, sortKey: TITLE) {
      nodes {
        id
        title
        path
        ... on NodeCommittee {
          body {
            processed
            summary
          }
          chairName
          memberCount
          committeeType {
            ... on TermInterface {
              id
              name
            }
          }
          meetingSchedule
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM]) {
              name
              url
              width
              height
            }
          }
        }
      }
    }
  }
`

export const GET_COMMITTEE_BY_PATH = gql`
  query GetCommitteeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeCommittee {
            id
            title
            path
            body {
              processed
            }
            chairName
            memberCount
            committeeType {
              ... on TermInterface {
                id
                name
              }
            }
            meetingSchedule
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
        }
      }
    }
  }
`

// Legislation
export const GET_LEGISLATIONS = gql`
  query GetLegislations($first: Int = 20) {
    nodeLegislations(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeLegislation {
          body {
            processed
            summary
          }
          billNumber
          sponsor
          introducedDate {
            timestamp
          }
          legislationStatus
          committeeReferral
          category {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

export const GET_LEGISLATION_BY_PATH = gql`
  query GetLegislationByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeLegislation {
            id
            title
            path
            body {
              processed
            }
            billNumber
            sponsor
            introducedDate {
              timestamp
            }
            legislationStatus
            committeeReferral
            category {
              ... on TermInterface {
                id
                name
              }
            }
          }
        }
      }
    }
  }
`

// Parliamentary Sessions
export const GET_SESSIONS = gql`
  query GetSessions($first: Int = 20) {
    nodeSessions(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeSession {
          body {
            processed
            summary
          }
          sessionDate {
            timestamp
          }
          endTime {
            timestamp
          }
          location
          sessionType {
            ... on TermInterface {
              id
              name
            }
          }
          agendaUrl
          broadcastUrl
        }
      }
    }
  }
`

export const GET_SESSION_BY_PATH = gql`
  query GetSessionByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeSession {
            id
            title
            path
            body {
              processed
            }
            sessionDate {
              timestamp
            }
            endTime {
              timestamp
            }
            location
            sessionType {
              ... on TermInterface {
                id
                name
              }
            }
            agendaUrl
            broadcastUrl
          }
        }
      }
    }
  }
`

// News
export const GET_NEWS = gql`
  query GetNews($first: Int = 20) {
    nodeNewsItems(first: $first, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            processed
            summary
          }
          image {
            url
            alt
            width
            height
            variations(styles: [LARGE, MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

export const GET_NEWS_BY_PATH = gql`
  query GetNewsByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
        }
      }
    }
  }
`

// Generic route query for pages and other content
export const GET_NODE_BY_PATH = gql`
  query GetNodeByPath($path: String!) {
    route(path: $path) {
      ... on RouteInternal {
        entity {
          ... on NodePage {
            id
            title
            body {
              processed
            }
          }
          ... on NodeMember {
            id
            title
            path
            body {
              processed
            }
            party {
              ... on TermInterface {
                id
                name
              }
            }
            constituency
            position
            firstElected
            email
            phone
            photo {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeCommittee {
            id
            title
            path
            body {
              processed
            }
            chairName
            memberCount
            committeeType {
              ... on TermInterface {
                id
                name
              }
            }
            meetingSchedule
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
          }
          ... on NodeLegislation {
            id
            title
            path
            body {
              processed
            }
            billNumber
            sponsor
            introducedDate {
              timestamp
            }
            legislationStatus
            committeeReferral
            category {
              ... on TermInterface {
                id
                name
              }
            }
          }
          ... on NodeSession {
            id
            title
            path
            body {
              processed
            }
            sessionDate {
              timestamp
            }
            endTime {
              timestamp
            }
            location
            sessionType {
              ... on TermInterface {
                id
                name
              }
            }
            agendaUrl
            broadcastUrl
          }
          ... on NodeNews {
            id
            title
            path
            created {
              timestamp
            }
            body {
              processed
            }
            image {
              url
              alt
              width
              height
              variations(styles: [LARGE, MEDIUM]) {
                name
                url
                width
                height
              }
            }
            category {
              ... on TermInterface {
                id
                name
              }
            }
            featured
          }
          ... on NodeHomepage {
            id
            title
            heroTitle
            heroSubtitle
            heroDescription {
              processed
            }
            statsItems {
              ... on ParagraphStatItem {
                id
                number
                label
              }
            }
            featuredItemsTitle
            ctaTitle
            ctaDescription {
              processed
            }
            ctaPrimary
            ctaSecondary
          }
        }
      }
    }
  }
`

// Featured legislation for homepage (limit to 3)
export const GET_FEATURED_LEGISLATIONS = gql`
  query GetFeaturedLegislations {
    nodeLegislations(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeLegislation {
          billNumber
          legislationStatus
          category {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`

// Featured news for homepage
export const GET_FEATURED_NEWS = gql`
  query GetFeaturedNews {
    nodeNewsItems(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        created {
          timestamp
        }
        ... on NodeNews {
          body {
            summary
          }
          image {
            url
            alt
            variations(styles: [MEDIUM, THUMBNAIL]) {
              name
              url
              width
              height
            }
          }
          category {
            ... on TermInterface {
              id
              name
            }
          }
          featured
        }
      }
    }
  }
`

// Upcoming sessions for homepage
export const GET_UPCOMING_SESSIONS = gql`
  query GetUpcomingSessions {
    nodeSessions(first: 3, sortKey: CREATED_AT) {
      nodes {
        id
        title
        path
        ... on NodeSession {
          sessionDate {
            timestamp
          }
          location
          sessionType {
            ... on TermInterface {
              id
              name
            }
          }
        }
      }
    }
  }
`
