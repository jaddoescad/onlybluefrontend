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
  Calendar,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Eye,
  Plus,
  Grid,
  List,
  Image as ImageIcon,
  Briefcase,
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/feed' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio', active: true },
  { icon: Search, label: 'Explore', href: '/explore' },
  { icon: Briefcase, label: 'Jobs', href: '/jobs' },
]

const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Repairs']

const portfolioItems = [
  {
    id: 1,
    title: 'Commercial Warehouse Rewiring',
    description: '50,000 sq ft warehouse complete electrical overhaul including new panel installation, LED lighting upgrade, and emergency systems.',
    category: 'Commercial',
    location: 'Austin, TX',
    date: 'Dec 2024',
    images: ['/images/portfolio/warehouse.jpg'],
    likes: 234,
    views: 1520,
    comments: 45,
  },
  {
    id: 2,
    title: 'Smart Home Installation',
    description: 'Full smart home electrical setup including automated lighting, smart thermostat integration, and home theater wiring.',
    category: 'Residential',
    location: 'Round Rock, TX',
    date: 'Nov 2024',
    images: ['/images/portfolio/smarthome.jpg'],
    likes: 189,
    views: 980,
    comments: 32,
  },
  {
    id: 3,
    title: 'Industrial Panel Upgrade',
    description: 'Upgraded 400A service panel to 800A for manufacturing facility. Included new bus bars, breakers, and safety disconnects.',
    category: 'Industrial',
    location: 'San Antonio, TX',
    date: 'Oct 2024',
    images: ['/images/portfolio/panel.jpg'],
    likes: 312,
    views: 2100,
    comments: 67,
  },
  {
    id: 4,
    title: 'Restaurant Kitchen Electrical',
    description: 'Complete kitchen electrical for new restaurant including commercial equipment circuits, hood ventilation, and emergency lighting.',
    category: 'Commercial',
    location: 'Austin, TX',
    date: 'Sep 2024',
    images: ['/images/portfolio/restaurant.jpg'],
    likes: 156,
    views: 890,
    comments: 28,
  },
  {
    id: 5,
    title: 'Home EV Charger Installation',
    description: 'Level 2 EV charger installation with dedicated 50A circuit and smart charging capabilities.',
    category: 'Residential',
    location: 'Cedar Park, TX',
    date: 'Aug 2024',
    images: ['/images/portfolio/evcharger.jpg'],
    likes: 278,
    views: 1340,
    comments: 52,
  },
  {
    id: 6,
    title: 'Emergency Generator Setup',
    description: 'Whole-home backup generator installation with automatic transfer switch and load management system.',
    category: 'Residential',
    location: 'Lakeway, TX',
    date: 'Jul 2024',
    images: ['/images/portfolio/generator.jpg'],
    likes: 198,
    views: 1120,
    comments: 38,
  },
]

export default function PortfolioPage() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState('All')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const filteredItems = activeCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)

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
                  placeholder="Search tradespeople, jobs, posts..."
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

            {/* Main Portfolio Content */}
            <div className="lg:col-span-9 space-y-4">
              {/* Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
                    <p className="text-gray-500 mt-1">Showcase your best work</p>
                  </div>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    <Plus className="w-5 h-5" />
                    Add Project
                  </button>
                </div>

                {/* Categories */}
                <div className="flex flex-wrap items-center gap-2 mt-6">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                {/* View Toggle & Filter */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">{filteredItems.length} projects</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'grid' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <Grid className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-lg transition-colors ${
                        viewMode === 'list' ? 'bg-blue-100 text-blue-600' : 'text-gray-400 hover:bg-gray-100'
                      }`}
                    >
                      <List className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Portfolio Grid */}
              {viewMode === 'grid' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      {/* Image */}
                      <div className="aspect-video bg-gray-100 relative group">
                        <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                          <ImageIcon className="w-16 h-16" />
                        </div>
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <button className="p-3 bg-white rounded-full text-gray-700 hover:bg-gray-100 transition-colors">
                            <Eye className="w-5 h-5" />
                          </button>
                        </div>
                        <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                          {item.category}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-2 mb-3">{item.description}</p>
                        <div className="flex items-center gap-3 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {item.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" /> {item.date}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" /> {item.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" /> {item.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" /> {item.comments}
                            </span>
                          </div>
                          <button className="p-1 text-gray-400 hover:text-gray-600">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row">
                        {/* Image */}
                        <div className="sm:w-64 h-48 sm:h-auto bg-gray-100 relative flex-shrink-0">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-300">
                            <ImageIcon className="w-12 h-12" />
                          </div>
                          <span className="absolute top-3 left-3 px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                            {item.category}
                          </span>
                        </div>

                        {/* Content */}
                        <div className="flex-1 p-4 sm:p-6">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-semibold text-gray-900 text-lg mb-1">{item.title}</h3>
                              <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-3 h-3" /> {item.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-3 h-3" /> {item.date}
                                </span>
                              </div>
                            </div>
                            <button className="p-1 text-gray-400 hover:text-gray-600">
                              <MoreHorizontal className="w-5 h-5" />
                            </button>
                          </div>
                          <p className="text-sm text-gray-500 mb-4">{item.description}</p>
                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <Heart className="w-4 h-4" /> {item.likes}
                            </span>
                            <span className="flex items-center gap-1">
                              <Eye className="w-4 h-4" /> {item.views}
                            </span>
                            <span className="flex items-center gap-1">
                              <MessageSquare className="w-4 h-4" /> {item.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
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
          <Link href="/explore" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <Search className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link href="/portfolio" className="flex flex-col items-center gap-1 px-3 py-1 text-blue-600">
            <FolderOpen className="w-6 h-6" />
            <span className="text-xs font-medium">Portfolio</span>
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
