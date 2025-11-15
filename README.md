# Claritutor AI Study Assistant

![App Preview](https://imgix.cosmicjs.com/1d58c820-c1e3-11f0-9757-a1b2350abfc3-photo-1635070041078-e363dbe005cb-1763191375440.jpg?w=1200&h=300&fit=crop&auto=format,compress)

A comprehensive AI-powered educational web application that serves as a personal tutor for students, combining intelligent conversational AI with productivity tools to create a complete learning ecosystem.

## ✨ Features

- **AI-Powered Chat Interface**: Get instant, detailed explanations for any subject
- **8 Subject Categories**: Mathematics, Science, Computer Science, Literature, History, Languages, Arts, and General
- **Dashboard & Progress Tracking**: Monitor study streaks, conversations, and achievements
- **Study Templates**: Quick-start learning with proven educational prompts
- **Pomodoro Timer**: Stay focused with timed study sessions
- **Achievement Badges**: Earn rewards for consistent study habits
- **Educational Resources**: Access curated learning materials and guides
- **Dark/Light Mode**: Comfortable studying in any environment
- **Mobile Responsive**: Learn on any device, anywhere

## Clone this Project

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Project](https://img.shields.io/badge/Clone%20this%20Project-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmicjs.com/projects/new?clone_bucket=69180d15e7349beda291dd68&clone_repository=69180ff1e7349beda291ddf1)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> "Create a complete, production-ready Claritutor AI study assistant application with the following comprehensive specifications:

PRODUCT OVERVIEW
Claritutor is a comprehensive educational web application serving as a personal AI tutor for students, combining intelligent conversational AI with productivity tools to create a complete learning ecosystem. The application must be fully accessible, performant, and provide seamless user experience across all devices.

TECHNICAL ARCHITECTURE
Build using React 18 with TypeScript strict mode enabled, Vite 6 as build tool, Tailwind CSS 3.4 for styling with custom blue/indigo gradient design system, and Radix UI components for accessibility. Implement state management using React Context API with useReducer hooks. Use React Router v7 for client-side routing with file-based route structure. Configure Vite PWA plugin with Workbox for service worker implementation. Set up comprehensive testing with Vitest and React Testing Library for unit tests achieving 80% code coverage, plus Playwright for end-to-end testing of all critical user flows.

BACKEND INFRASTRUCTURE
Utilize Supabase as the full backend solution with PostgreSQL database, built-in authentication, and edge functions. Implement row-level security policies on every table ensuring data isolation. Create storage buckets for user exports with public read and owner write permissions. Configure headless CMS for all static content including subject categories and help articles in read-only mode with all branding elements removed from the interface.

DATABASE SCHEMA DESIGN
Create comprehensive table structure including profiles table with user metadata, study preferences, theme settings, and usage statistics. Implement conversations table with AI chat sessions including subject categorization across 8 predefined categories (Mathematics, Science, Literature, History, Languages, Computer Science, Arts, General) and favorite status tracking. Build messages table storing all chat interactions with role differentiation and timestamps. Design study_sessions table for Pomodoro timer tracking with duration and completion status. Establish proper foreign key relationships and indexes for optimal query performance.

AUTHENTICATION SYSTEM
Implement multi-provider authentication supporting email/password with secure password reset flow and guest mode with limited functionality. Configure Supabase Auth with custom user metadata storage. Create session management with automatic token refresh and secure logout functionality.

USER INTERFACE & EXPERIENCE
Develop clean, modern gradient-based UI with blue/indigo primary colors using mobile-first responsive design. Implement comprehensive dark/light mode support with system-level theme detection and persistence. Ensure smooth animations and transitions throughout the application. Create dual navigation system with mobile bottom navigation and desktop sidebar layout. Build welcome onboarding with feature carousel introducing key functionalities. Ensure full WCAG 2.2 AA compliance with keyboard navigation, focus management, and screen reader support.

CORE APPLICATION FEATURES

AI-Powered Chat Interface
Develop real-time conversational learning interface with context-aware educational responses. Implement subject-specific conversations across 8 predefined categories with intelligent categorization. Create message history preservation with conversation threading and context maintenance. Build export functionality for study notes in multiple formats. Implement favorite conversations system for quick access with visual indicators.

Dashboard & Progress Tracking
Design central hub with personalized greeting based on time of day. Implement comprehensive statistics overview including study streak counter tracking consecutive days of activity, total conversation count, and total study time in minutes. Create weekly progress tracking with visual indicators. Build recent conversation history with quick access. Develop subject category browsing system. Add motivational elements including streak badges and dynamic study tips.

Study Templates System
Implement pre-built educational prompts optimized for common student needs across all subject categories. Create categorized template system by subject area with usage tracking. Build quick-start conversation initialization with proven educational frameworks. Implement template featuring system based on popularity and effectiveness.

Pomodoro Study Timer
Build focus timer for productive study sessions with session tracking. Implement duration logging integrated with profile statistics. Create completion tracking with achievement recognition.

User Profile Management
Develop comprehensive profile system with customizable display name and avatar upload functionality. Implement study statistics aggregation with visual data representation. Create theme preference system with persistence across sessions. Build notification settings management. Implement favorite subjects tracking with personalized recommendations.

APPLICATION PAGES STRUCTURE

Welcome Page
Create engaging onboarding experience with feature introduction slides. Implement skip functionality for returning users.

Dashboard Page
Build central hub displaying personalized statistics, recent activity, and quick action buttons. Implement motivational elements and progress tracking.

Chat Page
Develop main AI conversation interface with subject categorization, real-time messaging, and export capabilities.

History Page
Create comprehensive conversation browser with search, filtering, and favorite management.

Profile Page
Build user settings interface with statistics display and personalization options.

Timer Page
Implement Pomodoro study timer with session tracking and completion logging.

Settings Page
Develop application configuration panel with theme, notification, and preference management.

Support Page
Create help resources section with educational content and assistance options.

INTEGRATION SPECIFICATIONS
Implement core LLM integration for AI responses with context-aware educational prompting system. Develop file handling system for conversation exports in multiple formats. Create real-time synchronization between chat sessions and user statistics.

PERFORMANCE OPTIMIZATIONS
Implement code splitting with lazy loading for route-based chunks. Configure image optimization with responsive sizing. Set up proper caching strategies for static assets and API responses. Optimize bundle size through tree shaking and dependency analysis.

ACCESSIBILITY REQUIREMENTS
Ensure full keyboard navigation with focus trap modals and logical tab order. Implement ARIA live regions for dynamic content updates. Create screen reader announcements for important state changes. Maintain color contrast ratios of 4.5:1 for normal text and 3:1 for large text. Provide alternative text for all meaningful images and icons.

DEPLOYMENT CONFIGURATION
Set up Vercel deployment configuration for optimal performance. Create Docker Compose setup for local development environment. Configure GitHub Actions CI/CD pipeline with automated testing, linting, and type checking. Set up environment variable management with comprehensive template.

TESTING STRATEGY
Implement unit tests for all React components with user interaction simulation. Create integration tests for key user flows including authentication, chat interactions, and timer functionality. Develop end-to-end tests covering critical happy paths and error scenarios.

The application must be delivered as a complete, deploy-ready codebase targeting students of all levels seeking an intelligent study companion that provides instant help, maintains study momentum, and tracks learning progress—all in a beautifully designed, accessible interface. Include comprehensive documentation with setup instructions and MIT license.

hide the badge of BUILT WITH COSMIC"

### Code Generation Prompt

> "Based on the content model I created for [Claritutor AI study assistant specifications], now build a complete web application that showcases this content. Include a modern, responsive design with proper navigation, content display, and user-friendly interface."

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## 🚀 Technologies

- **Frontend**: Next.js 16, React 19, TypeScript
- **Styling**: Tailwind CSS 3.4, Radix UI Components
- **CMS**: Cosmic for content management
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **AI Integration**: OpenAI API
- **State Management**: React Context API with useReducer
- **Deployment**: Vercel-ready

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ and Bun
- Cosmic bucket with configured content types
- Supabase project (for authentication and database)
- OpenAI API key (for AI chat functionality)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/claritutor.git
cd claritutor
```

2. Install dependencies:
```bash
bun install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

4. Configure your environment variables:
```
COSMIC_BUCKET_SLUG=your-bucket-slug
COSMIC_READ_KEY=your-read-key
COSMIC_WRITE_KEY=your-write-key
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
OPENAI_API_KEY=your-openai-api-key
```

5. Run the development server:
```bash
bun dev
```

6. Open [http://localhost:3000](http://localhost:3000) to see the application.

## 📚 Cosmic SDK Examples

```typescript
// Fetching subject categories
const { objects: categories } = await cosmic.objects
  .find({ type: 'subject-categories' })
  .props(['title', 'slug', 'metadata'])
  .depth(1)

// Fetching study templates
const { objects: templates } = await cosmic.objects
  .find({ type: 'study-templates' })
  .props(['title', 'metadata'])
  .depth(2)
```

## 🎨 Cosmic CMS Integration

This application uses [Cosmic](https://www.cosmicjs.com/docs) to manage:

- **Subject Categories**: 8 educational subject areas with descriptions and icons
- **Study Templates**: Pre-built prompts for common learning scenarios
- **Achievement Badges**: Gamification elements with unlock criteria
- **Educational Resources**: Learning materials and guides
- **Help Articles**: Support documentation
- **Feature Announcements**: System updates and new features

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Configure environment variables
4. Deploy!

### Deploy to Netlify

1. Build the project: `bun run build`
2. Deploy the `.next` folder
3. Configure environment variables
4. Set up redirects for Next.js

## 📄 License

MIT License - feel free to use this project for your educational needs!

<!-- README_END -->