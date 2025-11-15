// Base Cosmic object interface
export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

// Subject Categories
export interface SubjectCategory extends CosmicObject {
  type: 'subject-categories';
  metadata: {
    name: string;
    description: string;
    icon: string;
    color_theme: string;
    popular_topics?: string[];
    study_approach?: string;
    order: number;
  };
}

// Study Templates
export interface StudyTemplate extends CosmicObject {
  type: 'study-templates';
  metadata: {
    template_title: string;
    description: string;
    subject_category?: SubjectCategory;
    difficulty_level: {
      key: 'beginner' | 'intermediate' | 'advanced';
      value: string;
    };
    prompt_text: string;
    example_questions?: string[];
    expected_outcomes?: string;
    is_featured?: boolean;
    usage_count?: number;
  };
}

// Achievement Badges
export interface AchievementBadge extends CosmicObject {
  type: 'achievement-badges';
  metadata: {
    badge_name: string;
    description: string;
    icon: string;
    badge_image?: {
      url: string;
      imgix_url: string;
    };
    unlock_criteria: {
      type: string;
      value: number;
    };
    rarity: {
      key: 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';
      value: string;
    };
    points_value: number;
    is_active?: boolean;
  };
}

// Educational Resources
export interface EducationalResource extends CosmicObject {
  type: 'educational-resources';
  metadata: {
    resource_title: string;
    description: string;
    resource_type: {
      key: 'article' | 'video' | 'practice' | 'worksheet' | 'guide' | 'external';
      value: string;
    };
    subject_category?: SubjectCategory;
    content?: string;
    external_url?: string;
    difficulty_level: {
      key: 'beginner' | 'intermediate' | 'advanced';
      value: string;
    };
    thumbnail_image?: {
      url: string;
      imgix_url: string;
    };
    is_featured?: boolean;
  };
}

// Help Articles
export interface HelpArticle extends CosmicObject {
  type: 'help-articles';
  metadata: {
    article_title: string;
    content: string;
    category: {
      key: string;
      value: string;
    };
    order: number;
    related_articles?: HelpArticle[];
    video_url?: string;
  };
}

// Feature Announcements
export interface FeatureAnnouncement extends CosmicObject {
  type: 'feature-announcements';
  metadata: {
    announcement_title: string;
    content: string;
    priority: {
      key: 'low' | 'medium' | 'high' | 'critical';
      value: string;
    };
    target_audience: {
      key: 'all' | 'new' | 'active' | 'premium';
      value: string;
    };
    display_start_date: string;
    display_end_date?: string;
    cta_text?: string;
    cta_link?: string;
    is_active?: boolean;
  };
}

// User Profile (for local state)
export interface UserProfile {
  id: string;
  email?: string;
  display_name: string;
  avatar_url?: string;
  theme: 'light' | 'dark' | 'system';
  study_streak: number;
  total_conversations: number;
  total_study_time: number;
  favorite_subjects: string[];
  achievements: string[];
  created_at: string;
  last_active: string;
}

// Chat Message
export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant' | 'system';
  content: string;
  timestamp: string;
  subject_category?: string;
}

// Conversation
export interface Conversation {
  id: string;
  title: string;
  subject_category?: string;
  messages: ChatMessage[];
  is_favorite: boolean;
  created_at: string;
  updated_at: string;
}

// Study Session
export interface StudySession {
  id: string;
  duration: number;
  completed: boolean;
  created_at: string;
}

// Type guards
export function isSubjectCategory(obj: CosmicObject): obj is SubjectCategory {
  return obj.type === 'subject-categories';
}

export function isStudyTemplate(obj: CosmicObject): obj is StudyTemplate {
  return obj.type === 'study-templates';
}

export function isAchievementBadge(obj: CosmicObject): obj is AchievementBadge {
  return obj.type === 'achievement-badges';
}

export function isEducationalResource(obj: CosmicObject): obj is EducationalResource {
  return obj.type === 'educational-resources';
}

export function isHelpArticle(obj: CosmicObject): obj is HelpArticle {
  return obj.type === 'help-articles';
}

export function isFeatureAnnouncement(obj: CosmicObject): obj is FeatureAnnouncement {
  return obj.type === 'feature-announcements';
}

// Simple error helper for Cosmic SDK
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}