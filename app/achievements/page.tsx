import { getAchievementBadges } from '@/lib/cosmic'
import BadgeCard from '@/components/BadgeCard'

export default async function AchievementsPage() {
  const badges = await getAchievementBadges()

  // Group badges by rarity
  const badgesByRarity = badges.reduce((acc, badge) => {
    const rarity = badge.metadata?.rarity?.value || 'Common'
    if (!acc[rarity]) {
      acc[rarity] = []
    }
    acc[rarity].push(badge)
    return acc
  }, {} as Record<string, typeof badges>)

  const rarityOrder = ['Legendary', 'Epic', 'Rare', 'Uncommon', 'Common']

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gradient">
        Achievement Badges
      </h1>
      
      <div className="space-y-12">
        {rarityOrder.map(rarity => {
          const rarityBadges = badgesByRarity[rarity]
          if (!rarityBadges || rarityBadges.length === 0) return null
          
          return (
            <section key={rarity}>
              <h2 className="text-2xl font-semibold mb-4">
                {rarity} Badges
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {rarityBadges.map(badge => (
                  <BadgeCard key={badge.id} badge={badge} />
                ))}
              </div>
            </section>
          )
        })}
      </div>
    </div>
  )
}