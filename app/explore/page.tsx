'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
  Home,
  Search,
  Bell,
  MessageCircle,
  User,
  FolderOpen,
  Bookmark,
  Settings,
  LogOut,
  MapPin,
  Filter,
  Users,
  Building2,
  Briefcase,
  TrendingUp,
  Zap,
  Wrench,
  Hammer,
  Plus,
  Heart,
  CheckCircle,
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/feed' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio' },
  { icon: Search, label: 'Explore', href: '/explore', active: true },
  { icon: Briefcase, label: 'Jobs', href: '/jobs' },
]

const categories = [
  { name: 'All', icon: TrendingUp },
  { name: 'Electricians', icon: Zap },
  { name: 'Plumbers', icon: Wrench },
  { name: 'Carpenters', icon: Hammer },
  { name: 'HVAC', icon: Filter },
  { name: 'Welders', icon: Wrench },
]

const featuredPeople = [
  {
    id: 1,
    name: 'Mike Johnson',
    role: 'Master Electrician',
    location: 'Denver, CO',
    image: '/images/workers/electrician.jpg',
    verified: true,
    connections: 2340,
    rating: 4.9,
  },
  {
    id: 2,
    name: 'Sarah Martinez',
    role: 'Certified Welder',
    location: 'Houston, TX',
    image: '/images/workers/welder.jpg',
    verified: true,
    connections: 1890,
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Carlos Rodriguez',
    role: 'Licensed Plumber',
    location: 'Phoenix, AZ',
    image: '/images/workers/plumber.jpg',
    verified: false,
    connections: 1450,
    rating: 4.7,
  },
  {
    id: 4,
    name: 'David Chen',
    role: 'HVAC Technician',
    location: 'Seattle, WA',
    image: '/images/workers/hvac.jpg',
    verified: true,
    connections: 980,
    rating: 4.9,
  },
  {
    id: 5,
    name: 'Jamie Wilson',
    role: 'Master Carpenter',
    location: 'Portland, OR',
    image: '/images/workers/carpenter.jpg',
    verified: true,
    connections: 1670,
    rating: 4.8,
  },
  {
    id: 6,
    name: 'Lisa Park',
    role: 'General Contractor',
    location: 'Austin, TX',
    image: '/images/workers/realtor.jpg',
    verified: true,
    connections: 3200,
    rating: 5.0,
  },
]

const featuredCompanies = [
  {
    id: 1,
    name: 'PowerGrid Electric',
    industry: 'Electrical Services',
    location: 'Austin, TX',
    employees: '50-100',
    followers: 12500,
  },
  {
    id: 2,
    name: 'FlowMaster Plumbing',
    industry: 'Plumbing Services',
    location: 'Houston, TX',
    employees: '20-50',
    followers: 8900,
  },
  {
    id: 3,
    name: 'BuildRight Construction',
    industry: 'General Construction',
    location: 'Dallas, TX',
    employees: '100-200',
    followers: 25000,
  },
]

const trendingTopics = [
  { tag: '#ElectricalSafety', posts: '2.4k' },
  { tag: '#WeldingLife', posts: '1.8k' },
  { tag: '#PlumbingTips', posts: '1.2k' },
  { tag: '#ConstructionJobs', posts: '956' },
  { tag: '#TradesmenUnite', posts: '834' },
]

export default function ExplorePage() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/feed" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">OnlyBlue</span>
            </Link>

            <div className="flex-1 max-w-md mx-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search tradespeople, companies, jobs..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-100 border border-transparent rounded-full text-sm focus:bg-white focus:border-blue-500 focus:outline-none transition-all"
                />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
                <Bell className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  5
                </span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full relative">
                <MessageCircle className="w-6 h-6" />
                <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>
              <div className="relative ml-2">
                <button
                  onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                  className="w-9 h-9 rounded-full bg-gray-300 overflow-hidden cursor-pointer ring-2 ring-transparent hover:ring-blue-500 transition-all"
                >
                  <Image
                    src="/images/workers/electrician.jpg"
                    alt="Profile"
                    width={36}
                    height={36}
                    className="w-full h-full object-cover"
                  />
                </button>
                {profileDropdownOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      onClick={() => setProfileDropdownOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50">
                      <div className="px-4 py-3 border-b border-gray-100">
                        <p className="font-semibold text-gray-900">John Smith</p>
                        <p className="text-sm text-gray-500">Master Electrician</p>
                      </div>
                      <Link
                        href="/profile"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <User className="w-5 h-5" />
                        <span>View Profile</span>
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                        onClick={() => setProfileDropdownOpen(false)}
                      >
                        <Settings className="w-5 h-5" />
                        <span>Settings</span>
                      </Link>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <Link
                          href="/company/create"
                          className="flex items-center gap-3 px-4 py-2.5 text-gray-700 hover:bg-gray-50 transition-colors"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <Plus className="w-5 h-5" />
                          <span>Create Company Page</span>
                        </Link>
                      </div>
                      <div className="border-t border-gray-100 mt-2 pt-2">
                        <button
                          className="flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors w-full"
                          onClick={() => setProfileDropdownOpen(false)}
                        >
                          <LogOut className="w-5 h-5" />
                          <span>Logout</span>
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Sidebar */}
            <aside className="hidden lg:block lg:col-span-3">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-20">
                <nav className="py-2">
                  {navigationItems.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`flex items-center gap-3 px-4 py-2.5 transition-colors ${
                        item.active
                          ? 'text-blue-600 bg-blue-50 border-l-2 border-blue-600'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main Explore Content */}
            <div className="lg:col-span-6 space-y-4">
              {/* Search Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">Explore</h1>
                <p className="text-gray-500 mb-6">Discover tradespeople, companies, and opportunities</p>

                {/* Category Pills */}
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => setActiveCategory(category.name)}
                      className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category.name
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      <category.icon className="w-4 h-4" />
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Featured Tradespeople */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    Featured Tradespeople
                  </h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See all</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {featuredPeople.map((person) => (
                    <div
                      key={person.id}
                      className="border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={person.image}
                            alt={person.name}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1">
                            <h3 className="font-semibold text-gray-900 truncate">{person.name}</h3>
                            {person.verified && (
                              <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-600 flex-shrink-0" />
                            )}
                          </div>
                          <p className="text-sm text-gray-500 truncate">{person.role}</p>
                          <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                            <MapPin className="w-3 h-3" /> {person.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span>{person.connections.toLocaleString()} connections</span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                            {person.rating}
                          </span>
                        </div>
                        <button className="p-1.5 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Featured Companies */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    Featured Companies
                  </h2>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See all</button>
                </div>
                <div className="space-y-4">
                  {featuredCompanies.map((company) => (
                    <div
                      key={company.id}
                      className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="w-14 h-14 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-7 h-7 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900">{company.name}</h3>
                        <p className="text-sm text-gray-500">{company.industry}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {company.location} · {company.employees} employees · {company.followers.toLocaleString()} followers
                        </p>
                      </div>
                      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-full text-sm font-medium hover:bg-blue-50 transition-colors">
                        Follow
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 self-start">
              {/* Trending Topics */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-blue-600" />
                    Trending
                  </h3>
                </div>
                <div className="space-y-3">
                  {trendingTopics.map((topic, index) => (
                    <Link
                      key={index}
                      href={`/explore?tag=${topic.tag}`}
                      className="block hover:bg-gray-50 -mx-2 px-2 py-1.5 rounded-lg transition-colors"
                    >
                      <p className="font-medium text-gray-900">{topic.tag}</p>
                      <p className="text-sm text-gray-500">{topic.posts} posts</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Job Opportunities */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                    Jobs Near You
                  </h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See all</button>
                </div>
                <div className="space-y-3">
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <h4 className="font-medium text-gray-900 text-sm">Journeyman Electrician</h4>
                    <p className="text-xs text-gray-500">PowerGrid Electric · Austin, TX</p>
                    <p className="text-xs text-green-600 mt-1">$35-45/hr</p>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <h4 className="font-medium text-gray-900 text-sm">Licensed Plumber</h4>
                    <p className="text-xs text-gray-500">FlowMaster Plumbing · Houston, TX</p>
                    <p className="text-xs text-green-600 mt-1">$30-40/hr</p>
                  </div>
                  <div className="p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer">
                    <h4 className="font-medium text-gray-900 text-sm">HVAC Technician</h4>
                    <p className="text-xs text-gray-500">CoolAir Systems · Dallas, TX</p>
                    <p className="text-xs text-green-600 mt-1">$28-38/hr</p>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="text-xs text-gray-400 px-2">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <Link href="/about" className="hover:text-gray-600">About</Link>
                  <Link href="/help" className="hover:text-gray-600">Help</Link>
                  <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
                  <Link href="/terms" className="hover:text-gray-600">Terms</Link>
                </div>
                <p className="mt-2">© 2025 OnlyBlue. All rights reserved.</p>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 lg:hidden z-50">
        <div className="flex items-center justify-around py-2">
          <Link href="/feed" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <Home className="w-6 h-6" />
            <span className="text-xs">Home</span>
          </Link>
          <Link href="/explore" className="flex flex-col items-center gap-1 px-3 py-1 text-blue-600">
            <Search className="w-6 h-6" />
            <span className="text-xs font-medium">Explore</span>
          </Link>
          <Link href="/portfolio" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <FolderOpen className="w-6 h-6" />
            <span className="text-xs">Portfolio</span>
          </Link>
          <Link href="/messages" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500 relative">
            <MessageCircle className="w-6 h-6" />
            <span className="absolute top-0 right-2 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
            <span className="text-xs">Messages</span>
          </Link>
          <Link href="/profile" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <User className="w-6 h-6" />
            <span className="text-xs">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
