import type { EducationalResource } from '@/types'
import { ExternalLink, FileText, Video, BookOpen } from 'lucide-react'

export default function ResourceCard({ resource }: { resource: EducationalResource }) {
  const getResourceIcon = () => {
    switch (resource.metadata?.resource_type?.key) {
      case 'video': return <Video className="w-5 h-5" />
      case 'article': return <FileText className="w-5 h-5" />
      case 'guide': return <BookOpen className="w-5 h-5" />
      default: return <FileText className="w-5 h-5" />
    }
  }
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700 overflow-hidden">
      {resource.metadata?.thumbnail_image && (
        <img
          src={`${resource.metadata.thumbnail_image.imgix_url}?w=400&h=200&fit=crop&auto=format,compress`}
          alt={resource.metadata?.resource_title}
          width={400}
          height={200}
          className="w-full h-48 object-cover"
        />
      )}
      
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {getResourceIcon()}
          <span className="text-sm text-gray-600 dark:text-gray-400">
            {resource.metadata?.resource_type?.value}
          </span>
        </div>
        
        <h3 className="text-lg font-semibold mb-2">
          {resource.metadata?.resource_title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
          {resource.metadata?.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-xs px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded">
            {resource.metadata?.difficulty_level?.value}
          </span>
          
          {resource.metadata?.external_url && (
            <a
              href={resource.metadata.external_url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-primary-500 hover:text-primary-600 text-sm"
            >
              View
              <ExternalLink className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}