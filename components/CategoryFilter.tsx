'use client'

import { useState } from 'react'
import type { SubjectCategory } from '@/types'

export default function CategoryFilter({ categories }: { categories: SubjectCategory[] }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => setSelectedCategory('all')}
        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
          selectedCategory === 'all'
            ? 'bg-primary-500 text-white'
            : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
        }`}
      >
        All Categories
      </button>
      
      {categories.map(category => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.slug)}
          className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
            selectedCategory === category.slug
              ? 'text-white'
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          style={{
            backgroundColor: selectedCategory === category.slug 
              ? category.metadata?.color_theme 
              : undefined
          }}
        >
          <span>{category.metadata?.icon}</span>
          <span>{category.metadata?.name}</span>
        </button>
      ))}
    </div>
  )
}