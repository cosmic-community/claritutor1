import Link from 'next/link'
import type { SubjectCategory } from '@/types'

export default function SubjectGrid({ categories }: { categories: SubjectCategory[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map(category => (
        <Link
          key={category.id}
          href={`/subjects#${category.slug}`}
          className="group p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 dark:border-gray-700"
        >
          <div className="text-4xl mb-4">{category.metadata?.icon}</div>
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-500 transition-colors">
            {category.metadata?.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
            {category.metadata?.description}
          </p>
          <div
            className="mt-4 h-1 rounded-full opacity-50"
            style={{ backgroundColor: category.metadata?.color_theme }}
          />
        </Link>
      ))}
    </div>
  )
}