import { getHelpArticles } from '@/lib/cosmic'
import HelpArticleCard from '@/components/HelpArticleCard'

export default async function HelpPage() {
  const articles = await getHelpArticles()

  // Group articles by category
  const articlesByCategory = articles.reduce((acc, article) => {
    const category = article.metadata?.category?.value || 'General'
    if (!acc[category]) {
      acc[category] = []
    }
    acc[category].push(article)
    return acc
  }, {} as Record<string, typeof articles>)

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-gradient">
        Help & Support
      </h1>
      
      <div className="space-y-12">
        {Object.entries(articlesByCategory).map(([category, categoryArticles]) => (
          <section key={category}>
            <h2 className="text-2xl font-semibold mb-4">
              {category}
            </h2>
            <div className="grid gap-4">
              {categoryArticles.map(article => (
                <HelpArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
        ))}
      </div>
      
      {articles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            Help articles coming soon!
          </p>
        </div>
      )}
    </div>
  )
}