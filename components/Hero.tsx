import Link from 'next/link'
import { ArrowRight, BookOpen, Brain, Clock } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden rounded-2xl gradient-primary p-12 text-white">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">
          Welcome to Claritutor
        </h1>
        <p className="text-xl mb-8 opacity-90">
          Your AI-powered study companion for mastering any subject
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Link
            href="/subjects"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Start Learning
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
          <Link
            href="/help"
            className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-lg font-semibold hover:bg-white/30 transition-colors"
          >
            Learn More
          </Link>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 text-left">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Brain className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-2">AI-Powered Learning</h3>
            <p className="text-sm opacity-90">
              Get instant help with any subject, anytime
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <BookOpen className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-2">Study Templates</h3>
            <p className="text-sm opacity-90">
              Jump-start learning with proven prompts
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Clock className="w-10 h-10 mb-3" />
            <h3 className="font-semibold mb-2">Focus Timer</h3>
            <p className="text-sm opacity-90">
              Stay productive with timed study sessions
            </p>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full filter blur-3xl" />
      </div>
    </section>
  )
}