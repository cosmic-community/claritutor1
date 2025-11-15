import { getSubjectCategories, getStudyTemplates, getActiveAnnouncements } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import SubjectGrid from '@/components/SubjectGrid'
import TemplateShowcase from '@/components/TemplateShowcase'
import AnnouncementBanner from '@/components/AnnouncementBanner'

export default async function Home() {
  const [categories, templates, announcements] = await Promise.all([
    getSubjectCategories(),
    getStudyTemplates(),
    getActiveAnnouncements()
  ])

  // Get featured templates only
  const featuredTemplates = templates.filter(t => t.metadata?.is_featured)

  return (
    <div className="space-y-12">
      {announcements.length > 0 && (
        <AnnouncementBanner announcements={announcements} />
      )}
      
      <Hero />
      
      <section>
        <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
          Explore Subjects
        </h2>
        <SubjectGrid categories={categories} />
      </section>
      
      {featuredTemplates.length > 0 && (
        <section>
          <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
            Popular Study Templates
          </h2>
          <TemplateShowcase templates={featuredTemplates} />
        </section>
      )}
    </div>
  )
}