import type { AchievementBadge } from '@/types'
import { Trophy, Target, Star } from 'lucide-react'

export default function BadgeCard({ badge }: { badge: AchievementBadge }) {
  const getRarityColor = () => {
    switch (badge.metadata?.rarity?.key) {
      case 'legendary': return 'bg-yellow-100 dark:bg-yellow-900 text-yellow-600 dark:text-yellow-300 border-yellow-300 dark:border-yellow-700'
      case 'epic': return 'bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 border-purple-300 dark:border-purple-700'
      case 'rare': return 'bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 border-blue-300 dark:border-blue-700'
      case 'uncommon': return 'bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 border-green-300 dark:border-green-700'
      default: return 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 border-gray-300 dark:border-gray-600'
    }
  }
  
  return (
    <div className={`rounded-xl p-6 border-2 ${getRarityColor()}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="text-5xl">{badge.metadata?.icon}</div>
        <div className="flex items-center gap-1">
          <Star className="w-5 h-5" />
          <span className="font-semibold">{badge.metadata?.points_value} pts</span>
        </div>
      </div>
      
      <h3 className="text-xl font-bold mb-2">
        {badge.metadata?.badge_name}
      </h3>
      
      <p className="text-sm mb-4 opacity-90">
        {badge.metadata?.description}
      </p>
      
      {badge.metadata?.unlock_criteria && (
        <div className="flex items-center gap-2 text-sm">
          <Target className="w-4 h-4" />
          <span>
            {badge.metadata.unlock_criteria.type}: {badge.metadata.unlock_criteria.value}
          </span>
        </div>
      )}
      
      <div className="mt-4 pt-4 border-t border-current opacity-30">
        <span className="text-xs font-semibold">
          {badge.metadata?.rarity?.value} Badge
        </span>
      </div>
    </div>
  )
}