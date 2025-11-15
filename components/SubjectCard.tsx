import type { SubjectCategory, StudyTemplate } from '@/types'
import ReactMarkdown from 'react-markdown'

export default function SubjectCard({ 
  category, 
  templates 
}: { 
  category: SubjectCategory
  templates: StudyTemplate[]
}) {
  return (
    <div id={category.slug} className="bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 border border-gray-200 dark:border-gray-700">
      <div className="flex items-start gap-4 mb-6">
        <div className="text-5xl">{category.metadata?.icon}</div>
        <div>
          <h2 className="text-2xl font-bold mb-2">{category.metadata?.name}</h2>
          <p className="text-gray-600 dark:text-gray-400">
            {category.metadata?.description}
          </p>
        </div>
      </div>
      
      {category.metadata?.popular_topics && category.metadata.popular_topics.length > 0 && (
        <div className="mb-6">
          <h3 className="font-semibold mb-3">Popular Topics</h3>
          <div className="flex flex-wrap gap-2">
            {category.metadata.popular_topics.map(topic => (
              <span
                key={topic}
                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm"
                style={{ borderColor: category.metadata?.color_theme }}
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {category.metadata?.study_approach && (
        <div className="mb-6 prose dark:prose-invert max-w-none">
          <ReactMarkdown>{category.metadata.study_approach}</ReactMarkdown>
        </div>
      )}
      
      {templates.length > 0 && (
        <div>
          <h3 className="font-semibold mb-3">Available Templates</h3>
          <div className="space-y-2">
            {templates.slice(0, 3).map(template => (
              <div
                key={template.id}
                className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
              >
                <div className="font-medium">{template.metadata?.template_title}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {template.metadata?.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}