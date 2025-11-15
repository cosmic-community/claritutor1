'use client'

import { useState, useEffect } from 'react'
import type { FeatureAnnouncement } from '@/types'
import { X, AlertCircle, Info, AlertTriangle, ChevronRight } from 'lucide-react'

export default function AnnouncementBanner({ announcements }: { announcements: FeatureAnnouncement[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDismissed, setIsDismissed] = useState(false)
  
  const current = announcements[currentIndex]
  
  useEffect(() => {
    if (announcements.length > 1) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % announcements.length)
      }, 10000)
      return () => clearInterval(timer)
    }
  }, [announcements.length])
  
  if (isDismissed || !current) return null
  
  const getPriorityIcon = () => {
    switch (current.metadata?.priority?.key) {
      case 'critical': return <AlertCircle className="w-5 h-5" />
      case 'high': return <AlertTriangle className="w-5 h-5" />
      default: return <Info className="w-5 h-5" />
    }
  }
  
  const getPriorityColor = () => {
    switch (current.metadata?.priority?.key) {
      case 'critical': return 'bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-900 dark:text-red-100'
      case 'high': return 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-900 dark:text-orange-100'
      case 'medium': return 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-900 dark:text-blue-100'
      default: return 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700'
    }
  }
  
  return (
    <div className={`relative rounded-lg border p-4 ${getPriorityColor()}`}>
      <div className="flex items-start gap-3">
        {getPriorityIcon()}
        <div className="flex-1">
          <h3 className="font-semibold mb-2">
            {current.metadata?.announcement_title}
          </h3>
          <div 
            className="text-sm opacity-90"
            dangerouslySetInnerHTML={{ __html: current.metadata?.content || '' }}
          />
          {current.metadata?.cta_text && current.metadata?.cta_link && (
            <a
              href={current.metadata.cta_link}
              className="inline-flex items-center gap-1 mt-3 font-semibold text-sm hover:underline"
            >
              {current.metadata.cta_text}
              <ChevronRight className="w-4 h-4" />
            </a>
          )}
        </div>
        <button
          onClick={() => setIsDismissed(true)}
          className="p-1 hover:bg-white/20 rounded"
          aria-label="Dismiss announcement"
        >
          <X className="w-5 h-5" />
        </button>
      </div>
      
      {announcements.length > 1 && (
        <div className="flex gap-1 justify-center mt-3">
          {announcements.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? 'bg-current' : 'bg-current opacity-30'
              }`}
              aria-label={`Go to announcement ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}