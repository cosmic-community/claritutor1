export default function Footer() {
  return (
    <footer className="mt-auto bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Claritutor. Empowering students worldwide.</p>
          <p className="mt-2 text-sm">
            Built with learning in mind 📚
          </p>
        </div>
      </div>
    </footer>
  )
}