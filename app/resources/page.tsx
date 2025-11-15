import { getEducationalResources, getSubjectCategories } from '@/lib/cosmic'
import ResourceCard from '@/components/ResourceCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function ResourcesPage() {
  const [resources, categories] = await Promise.all([
    getEducationalResources(),
    getSubjectCategories()
  ])

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gradient">
        Educational Resources
      </h1>
      
      <CategoryFilter categories={categories} />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {resources.map(resource => (
          <ResourceCard key={resource.id} resource={resource} />
        ))}
      </div>
      
      {resources.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No resources available at the moment. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}