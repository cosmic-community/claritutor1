import type { StudyTemplate } from '@/types'
import { BookOpen, TrendingUp, Users } from 'lucide-react'

export default function TemplateShowcase({ templates }: { templates: StudyTemplate[] }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {templates.map(template => (
        <div
          key={template.id}
          className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
        >
          {template.metadata?.is_featured && (
            <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full text-xs font-semibold mb-3">
              Featured
            </span>
          )}
          
          <h3 className="text-lg font-semibold mb-2">
            {template.metadata?.template_title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
            {template.metadata?.description}
          </p>
          
          {template.metadata?.subject_category && (
            <div className="flex items-center gap-2 mb-3 text-sm">
              <span className="text-2xl">{template.metadata.subject_category.metadata?.icon}</span>
              <span className="text-gray-600 dark:text-gray-400">
                {template.metadata.subject_category.metadata?.name}
              </span>
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-1">
              <TrendingUp className="w-4 h-4" />
              <span>{template.metadata?.difficulty_level?.value}</span>
            </div>
            
            {template.metadata?.usage_count && template.metadata.usage_count > 0 && (
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{template.metadata.usage_count} uses</span>
              </div>
            )}
          </div>
          
          {template.metadata?.example_questions && template.metadata.example_questions.length > 0 && (
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2">
                Example Questions:
              </div>
              <ul className="space-y-1">
                {template.metadata.example_questions.slice(0, 2).map((q, i) => (
                  <li key={i} className="text-xs text-gray-600 dark:text-gray-400 truncate">
                    • {q}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}