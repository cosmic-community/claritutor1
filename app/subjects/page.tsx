import { getSubjectCategories, getStudyTemplates } from '@/lib/cosmic'
import SubjectCard from '@/components/SubjectCard'

export default async function SubjectsPage() {
  const [categories, templates] = await Promise.all([
    getSubjectCategories(),
    getStudyTemplates()
  ])

  // Group templates by category
  const templatesByCategory = templates.reduce((acc, template) => {
    const categorySlug = template.metadata?.subject_category?.slug
    if (!categorySlug) return acc
    
    if (!acc[categorySlug]) {
      acc[categorySlug] = []
    }
    acc[categorySlug].push(template)
    return acc
  }, {} as Record<string, typeof templates>)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gradient">
        All Subject Categories
      </h1>
      
      <div className="grid gap-8">
        {categories.map(category => (
          <SubjectCard
            key={category.id}
            category={category}
            templates={templatesByCategory[category.slug] || []}
          />
        ))}
      </div>
    </div>
  )
}