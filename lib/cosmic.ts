import { createBucketClient } from '@cosmicjs/sdk'
import type { 
  SubjectCategory, 
  StudyTemplate, 
  AchievementBadge,
  EducationalResource,
  HelpArticle,
  FeatureAnnouncement
} from '@/types'

// Changed: Import hasStatus from types instead of declaring it locally
import { hasStatus } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

// Fetch subject categories
export async function getSubjectCategories(): Promise<SubjectCategory[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'subject-categories' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const categories = response.objects as SubjectCategory[]
    return categories.sort((a, b) => (a.metadata?.order || 0) - (b.metadata?.order || 0))
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch subject categories')
  }
}

// Fetch study templates
export async function getStudyTemplates(categorySlug?: string): Promise<StudyTemplate[]> {
  try {
    const query: Record<string, any> = { type: 'study-templates' }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(2)
    
    let templates = response.objects as StudyTemplate[]
    
    // Filter by category if provided
    if (categorySlug) {
      templates = templates.filter(t => 
        t.metadata?.subject_category?.slug === categorySlug
      )
    }
    
    // Sort featured templates first
    return templates.sort((a, b) => {
      if (a.metadata?.is_featured && !b.metadata?.is_featured) return -1
      if (!a.metadata?.is_featured && b.metadata?.is_featured) return 1
      return (b.metadata?.usage_count || 0) - (a.metadata?.usage_count || 0)
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch study templates')
  }
}

// Fetch achievement badges
export async function getAchievementBadges(): Promise<AchievementBadge[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'achievement-badges' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const badges = response.objects as AchievementBadge[]
    return badges.filter(b => b.metadata?.is_active !== false)
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch achievement badges')
  }
}

// Fetch educational resources
export async function getEducationalResources(categorySlug?: string): Promise<EducationalResource[]> {
  try {
    const query: Record<string, any> = { type: 'educational-resources' }
    
    const response = await cosmic.objects
      .find(query)
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(2)
    
    let resources = response.objects as EducationalResource[]
    
    // Filter by category if provided
    if (categorySlug) {
      resources = resources.filter(r => 
        r.metadata?.subject_category?.slug === categorySlug
      )
    }
    
    // Sort featured resources first
    return resources.sort((a, b) => {
      if (a.metadata?.is_featured && !b.metadata?.is_featured) return -1
      if (!a.metadata?.is_featured && b.metadata?.is_featured) return 1
      return 0
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch educational resources')
  }
}

// Fetch help articles
export async function getHelpArticles(category?: string): Promise<HelpArticle[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'help-articles' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(2)
    
    let articles = response.objects as HelpArticle[]
    
    // Filter by category if provided
    if (category) {
      articles = articles.filter(a => 
        a.metadata?.category?.key === category
      )
    }
    
    // Sort by order
    return articles.sort((a, b) => 
      (a.metadata?.order || 0) - (b.metadata?.order || 0)
    )
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch help articles')
  }
}

// Fetch feature announcements
export async function getActiveAnnouncements(): Promise<FeatureAnnouncement[]> {
  try {
    const response = await cosmic.objects
      .find({ type: 'feature-announcements' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)
    
    const now = new Date()
    const announcements = response.objects as FeatureAnnouncement[]
    
    // Filter active announcements within date range
    return announcements.filter(a => {
      if (!a.metadata?.is_active) return false
      
      const startDate = new Date(a.metadata.display_start_date)
      if (startDate > now) return false
      
      if (a.metadata.display_end_date) {
        const endDate = new Date(a.metadata.display_end_date)
        if (endDate < now) return false
      }
      
      return true
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch announcements')
  }
}