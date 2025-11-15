'use client'

import { useState } from 'react'
import type { HelpArticle } from '@/types'
import { ChevronDown, ChevronUp, PlayCircle } from 'lucide-react'

export default function HelpArticleCard({ article }: { article: HelpArticle }) {
  const [isExpanded, setIsExpanded] = useState(false)
  
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold">
            {article.metadata?.article_title}
          </h3>
          {article.metadata?.video_url && (
            <PlayCircle className="w-5 h-5 text-primary-500" />
          )}
        </div>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      
      {isExpanded && (
        <div className="px-6 pb-6 animate-slide-up">
          <div 
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: article.metadata?.content || '' }}
          />
          
          {article.metadata?.video_url && (
            <div className="mt-4">
              <a
                href={article.metadata.video_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary-500 hover:text-primary-600"
              >
                <PlayCircle className="w-5 h-5" />
                Watch Video Tutorial
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  )
}