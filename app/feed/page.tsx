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
  Briefcase,
  FolderOpen,
  Bookmark,
  Settings,
  LogOut,
  Image as ImageIcon,
  Video,
  MapPin,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Share2,
  Send,
  Plus,
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/feed', active: true },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio' },
  { icon: Search, label: 'Explore', href: '/explore' },
  { icon: Bookmark, label: 'Saved', href: '/saved' },
]

const posts = [
  {
    id: 1,
    author: {
      name: 'Mike Johnson',
      role: 'Master Electrician',
      location: 'Denver, CO',
      image: '/images/workers/electrician.jpg',
      verified: true,
    },
    content: 'Just completed a full commercial rewiring project for a 50,000 sq ft warehouse. 3 weeks ahead of schedule! The key was proper planning and having a great team. Always measure twice, wire once! ⚡',
    images: ['/images/posts/electrical-work.jpg'],
    timestamp: '2h ago',
    likes: 234,
    comments: 45,
    shares: 12,
  },
  {
    id: 2,
    author: {
      name: 'Sarah Martinez',
      role: 'Certified Welder',
      location: 'Houston, TX',
      image: '/images/workers/welder.jpg',
      verified: true,
    },
    content: 'Proud to share my latest custom fabrication work - a decorative steel staircase for a local art gallery. 200+ hours of precision welding. This is why I love what I do! 🔥',
    images: ['/images/posts/welding-work.jpg'],
    timestamp: '4h ago',
    likes: 567,
    comments: 89,
    shares: 34,
  },
  {
    id: 3,
    author: {
      name: 'Carlos Rodriguez',
      role: 'Licensed Plumber',
      location: 'Phoenix, AZ',
      image: '/images/workers/plumber.jpg',
      verified: false,
    },
    content: 'Quick tip for my fellow plumbers: When dealing with hard water buildup in older homes, try a 50/50 vinegar solution before reaching for harsh chemicals. Better for pipes, better for the environment. 💧',
    images: [],
    timestamp: '6h ago',
    likes: 189,
    comments: 67,
    shares: 45,
  },
]

const suggestedConnections = [
  { name: 'David Chen', role: 'HVAC Technician', image: '/images/workers/hvac.jpg', mutual: 12 },
  { name: 'Jamie Wilson', role: 'Carpenter', image: '/images/workers/carpenter.jpg', mutual: 8 },
  { name: 'Lisa Park', role: 'Real Estate Agent', image: '/images/workers/realtor.jpg', mutual: 5 },
]


export default function FeedPage() {
  const [postContent, setPostContent] = useState('')
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/feed" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">O</span>
              </div>
              <span className="text-xl font-bold text-gray-900 hidden sm:block">OnlyBlue</span>
            </Link>

            {/* Search Bar */}
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

            {/* Right Actions */}
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
                {/* Profile Card */}
                <div className="relative">
                  <div className="h-20 bg-gradient-to-r from-blue-600 to-blue-800"></div>
                  <div className="px-4 pb-4">
                    <div className="relative -mt-10 mb-3">
                      <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden">
                        <Image
                          src="/images/workers/electrician.jpg"
                          alt="Your profile"
                          width={80}
                          height={80}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    <h3 className="font-semibold text-gray-900">John Smith</h3>
                    <p className="text-sm text-gray-500">Master Electrician</p>
                    <p className="text-xs text-gray-400 flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" /> Austin, TX
                    </p>
                  </div>
                  <div className="border-t border-gray-100 px-4 py-3 grid grid-cols-2 gap-4 text-center">
                    <div>
                      <p className="text-lg font-semibold text-gray-900">1,234</p>
                      <p className="text-xs text-gray-500">Connections</p>
                    </div>
                    <div>
                      <p className="text-lg font-semibold text-gray-900">56</p>
                      <p className="text-xs text-gray-500">Posts</p>
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <nav className="border-t border-gray-100 py-2">
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
                      {item.badge && (
                        <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  ))}
                </nav>

              </div>
            </aside>

            {/* Main Feed */}
            <div className="lg:col-span-6 space-y-4">
              {/* Create Post */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <Image
                      src="/images/workers/electrician.jpg"
                      alt="Your profile"
                      width={40}
                      height={40}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <textarea
                      value={postContent}
                      onChange={(e) => setPostContent(e.target.value)}
                      placeholder="Share your work, tips, or ask the community..."
                      className="w-full resize-none border-none focus:outline-none text-gray-700 placeholder:text-gray-400 min-h-[60px]"
                    />
                    <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-3">
                      <div className="flex items-center gap-1">
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <ImageIcon className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Video className="w-5 h-5" />
                        </button>
                        <button className="p-2 text-gray-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <MapPin className="w-5 h-5" />
                        </button>
                      </div>
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
                        Post
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Posts */}
              {posts.map((post) => (
                <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
                  {/* Post Header */}
                  <div className="p-4 pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                          <Image
                            src={post.author.image}
                            alt={post.author.name}
                            width={48}
                            height={48}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="flex items-center gap-1">
                            <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
                            {post.author.verified && (
                              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                          <p className="text-sm text-gray-500">{post.author.role}</p>
                          <p className="text-xs text-gray-400 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {post.author.location} · {post.timestamp}
                          </p>
                        </div>
                      </div>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="px-4 pb-3">
                    <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                  </div>

                  {/* Post Image */}
                  {post.images.length > 0 && (
                    <div className="bg-gray-100 aspect-video relative">
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <ImageIcon className="w-12 h-12" />
                      </div>
                    </div>
                  )}

                  {/* Engagement Stats */}
                  <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <span className="flex -space-x-1">
                        <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                          <Heart className="w-3 h-3 text-white fill-white" />
                        </span>
                        <span className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                          <span className="text-xs">👍</span>
                        </span>
                      </span>
                      <span className="ml-1">{post.likes}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span>{post.comments} comments</span>
                      <span>{post.shares} shares</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="px-4 py-1 flex items-center justify-around">
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
                      <Heart className="w-5 h-5" />
                      <span className="font-medium">Like</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
                      <MessageSquare className="w-5 h-5" />
                      <span className="font-medium">Comment</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
                      <Share2 className="w-5 h-5" />
                      <span className="font-medium">Share</span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors flex-1 justify-center">
                      <Send className="w-5 h-5" />
                      <span className="font-medium">Send</span>
                    </button>
                  </div>
                </article>
              ))}

              {/* Load More */}
              <button className="w-full py-3 text-blue-600 font-medium hover:bg-blue-50 rounded-xl transition-colors">
                Load more posts
              </button>
            </div>

            {/* Right Sidebar */}
            <aside className="hidden lg:block lg:col-span-3 space-y-4 sticky top-20 self-start">
              {/* Suggested Connections */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold text-gray-900">People you may know</h3>
                  <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">See all</button>
                </div>
                <div className="space-y-4">
                  {suggestedConnections.map((person, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={person.image}
                          alt={person.name}
                          width={48}
                          height={48}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-gray-900 truncate">{person.name}</h4>
                        <p className="text-sm text-gray-500 truncate">{person.role}</p>
                        <p className="text-xs text-gray-400">{person.mutual} mutual connections</p>
                      </div>
                      <button className="p-2 border border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition-colors">
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>


              {/* Footer */}
              <div className="text-xs text-gray-400 px-2">
                <div className="flex flex-wrap gap-x-2 gap-y-1">
                  <Link href="/about" className="hover:text-gray-600">About</Link>
                  <Link href="/help" className="hover:text-gray-600">Help</Link>
                  <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
                  <Link href="/terms" className="hover:text-gray-600">Terms</Link>
                  <Link href="/careers" className="hover:text-gray-600">Careers</Link>
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
          <Link href="/feed" className="flex flex-col items-center gap-1 px-3 py-1 text-blue-600">
            <Home className="w-6 h-6" />
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link href="/explore" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <Search className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link href="/jobs" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <Briefcase className="w-6 h-6" />
            <span className="text-xs">Jobs</span>
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
