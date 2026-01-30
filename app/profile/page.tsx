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
  LinkIcon,
  MoreHorizontal,
  Heart,
  MessageSquare,
  Share2,
  Send,
  Image as ImageIcon,
  Edit3,
  Camera,
  Award,
  Star,
  Briefcase,
  CheckCircle,
  GraduationCap,
  Building2,
  Plus,
  Pencil,
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/feed' },
  { icon: User, label: 'Profile', href: '/profile', active: true },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio' },
  { icon: Search, label: 'Explore', href: '/explore' },
  { icon: Bookmark, label: 'Saved', href: '/saved' },
]

const tabs = ['Profile', 'Posts', 'Portfolio', 'Reviews']

const experience = [
  {
    id: 1,
    title: 'Master Electrician',
    company: 'Smith Electric Services',
    companyLogo: '/images/companies/smith-electric.jpg',
    type: 'Self-employed',
    startDate: 'Jan 2015',
    endDate: 'Present',
    duration: '10 yrs',
    location: 'Austin, TX',
    description: 'Owner and lead electrician specializing in commercial and residential electrical projects. Managing a team of 5 journeyman electricians. Completed over 500 projects including warehouse rewiring, smart home installations, and industrial panel upgrades.',
  },
  {
    id: 2,
    title: 'Journeyman Electrician',
    company: 'Austin Power & Light',
    companyLogo: '/images/companies/austin-power.jpg',
    type: 'Full-time',
    startDate: 'Mar 2010',
    endDate: 'Dec 2014',
    duration: '4 yrs 10 mos',
    location: 'Austin, TX',
    description: 'Performed electrical installations, maintenance, and repairs for commercial buildings. Specialized in troubleshooting complex electrical systems and ensuring code compliance.',
  },
  {
    id: 3,
    title: 'Electrical Apprentice',
    company: 'Texas Electrical Contractors',
    companyLogo: '/images/companies/texas-electrical.jpg',
    type: 'Full-time',
    startDate: 'Jun 2006',
    endDate: 'Feb 2010',
    duration: '3 yrs 9 mos',
    location: 'Houston, TX',
    description: 'Completed 4-year apprenticeship program while gaining hands-on experience in residential and commercial electrical work under master electricians.',
  },
]

const education = [
  {
    id: 1,
    school: 'Austin Community College',
    logo: '/images/schools/acc.jpg',
    degree: 'Associate of Applied Science',
    field: 'Electrical Technology',
    startYear: '2004',
    endYear: '2006',
  },
  {
    id: 2,
    school: 'Texas Electrical Training Institute',
    logo: '/images/schools/teti.jpg',
    degree: 'Apprenticeship Certificate',
    field: 'Electrical Apprenticeship Program',
    startYear: '2006',
    endYear: '2010',
  },
]

const posts = [
  {
    id: 1,
    content: 'Just completed a full commercial rewiring project for a 50,000 sq ft warehouse. 3 weeks ahead of schedule! The key was proper planning and having a great team. Always measure twice, wire once! ⚡',
    images: ['/images/posts/electrical-work.jpg'],
    timestamp: '2h ago',
    likes: 234,
    comments: 45,
    shares: 12,
  },
  {
    id: 2,
    content: 'Safety first! Reminder to always double-check your PPE before starting any job. Today I spotted a frayed wire that could have been dangerous. Stay vigilant out there! 🔒',
    images: [],
    timestamp: '1d ago',
    likes: 189,
    comments: 32,
    shares: 28,
  },
  {
    id: 3,
    content: 'Proud to announce I just received my Master Electrician certification after 10 years in the trade. Never stop learning! 📜✨',
    images: [],
    timestamp: '3d ago',
    likes: 567,
    comments: 89,
    shares: 45,
  },
]

const skills = [
  { name: 'Commercial Wiring', endorsements: 47 },
  { name: 'Residential Electrical', endorsements: 38 },
  { name: 'Panel Upgrades', endorsements: 32 },
  { name: 'Troubleshooting', endorsements: 29 },
  { name: 'Code Compliance', endorsements: 24 },
]

const certifications = [
  { name: 'Master Electrician License', issuer: 'State of Texas', year: '2024' },
  { name: 'OSHA 30-Hour', issuer: 'OSHA', year: '2023' },
  { name: 'EPA 608 Certification', issuer: 'EPA', year: '2022' },
]

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)

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

            {/* Main Profile Content */}
            <div className="lg:col-span-9 space-y-4">
              {/* Profile Header */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                {/* Cover Photo */}
                <div className="h-48 sm:h-56 bg-gradient-to-r from-blue-600 to-blue-800 relative">
                  <button className="absolute bottom-4 right-4 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors">
                    <Camera className="w-5 h-5" />
                  </button>
                </div>

                {/* Profile Info */}
                <div className="px-6 pb-6">
                  <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between -mt-12 sm:-mt-8 mb-4">
                    <div className="flex flex-col sm:flex-row sm:items-end gap-4">
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full border-4 border-white overflow-hidden shadow-lg">
                          <Image
                            src="/images/workers/electrician.jpg"
                            alt="John Smith"
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <button className="absolute bottom-2 right-2 p-1.5 bg-blue-600 rounded-full text-white hover:bg-blue-700 transition-colors">
                          <Camera className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="mt-4 sm:mt-0 sm:mb-2">
                        <div className="flex items-center gap-2">
                          <h1 className="text-2xl font-bold text-gray-900">John Smith</h1>
                          <CheckCircle className="w-6 h-6 text-blue-600 fill-blue-600" />
                        </div>
                        <p className="text-sm text-gray-500">Master Electrician</p>
                        <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Austin, TX
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-3 h-3" /> 15 years exp.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-4 sm:mt-0">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center gap-2">
                        <Edit3 className="w-4 h-4" /> Edit Profile
                      </button>
                      <button className="p-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Bio */}
                  <p className="text-gray-700 mb-4">
                    Licensed Master Electrician with 15+ years of experience in commercial and residential projects.
                    Passionate about safety, quality work, and mentoring the next generation of tradespeople.
                    Available for consultations and large-scale projects.
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 py-4 border-t border-gray-100">
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">1,234</p>
                      <p className="text-sm text-gray-500">Connections</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">56</p>
                      <p className="text-sm text-gray-500">Posts</p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">4.9</p>
                      <p className="text-sm text-gray-500 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" /> Rating
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-xl font-bold text-gray-900">89</p>
                      <p className="text-sm text-gray-500">Reviews</p>
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100 text-sm">
                    <a href="#" className="flex items-center gap-1 text-blue-600 hover:underline">
                      <LinkIcon className="w-4 h-4" /> johnsmith-electric.com
                    </a>
                    <span className="flex items-center gap-1 text-gray-500">
                      <Calendar className="w-4 h-4" /> Joined March 2020
                    </span>
                  </div>
                </div>

                {/* Tabs */}
                <div className="border-t border-gray-200">
                  <div className="flex">
                    {tabs.map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`flex-1 py-4 text-sm font-medium transition-colors relative ${
                          activeTab === tab
                            ? 'text-blue-600'
                            : 'text-gray-500 hover:text-gray-700'
                        }`}
                      >
                        {tab}
                        {activeTab === tab && (
                          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Content */}
              {activeTab === 'Profile' && (
                <div className="space-y-4">
                  {/* About / Summary */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-lg font-semibold text-gray-900">About</h2>
                      <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                        <Pencil className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Licensed Master Electrician with 15+ years of experience in commercial and residential electrical projects.
                      I specialize in complex rewiring projects, smart home installations, and industrial electrical systems.
                      <br /><br />
                      Passionate about safety, quality work, and mentoring the next generation of tradespeople.
                      I believe in doing the job right the first time and building lasting relationships with clients.
                      <br /><br />
                      Available for consultations, large-scale commercial projects, and emergency electrical services in the Austin, TX area.
                    </p>
                  </div>

                  {/* Experience */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Experience</h2>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {experience.map((exp, index) => (
                        <div key={exp.id} className={`flex gap-4 ${index !== experience.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}>
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Building2 className="w-6 h-6 text-gray-400" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-900">{exp.title}</h3>
                            <p className="text-gray-700">{exp.company} · {exp.type}</p>
                            <p className="text-sm text-gray-500">{exp.startDate} - {exp.endDate} · {exp.duration}</p>
                            <p className="text-sm text-gray-500">{exp.location}</p>
                            {exp.description && (
                              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{exp.description}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Education</h2>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-6">
                      {education.map((edu, index) => (
                        <div key={edu.id} className={`flex gap-4 ${index !== education.length - 1 ? 'pb-6 border-b border-gray-100' : ''}`}>
                          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <GraduationCap className="w-6 h-6 text-gray-400" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{edu.school}</h3>
                            <p className="text-gray-700">{edu.degree}, {edu.field}</p>
                            <p className="text-sm text-gray-500">{edu.startYear} - {edu.endYear}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Licenses & Certifications */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Licenses & Certifications</h2>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {certifications.map((cert, index) => (
                        <div key={index} className={`flex gap-4 ${index !== certifications.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-blue-600" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-900">{cert.name}</h3>
                            <p className="text-gray-700">{cert.issuer}</p>
                            <p className="text-sm text-gray-500">Issued {cert.year}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-semibold text-gray-900">Skills</h2>
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Plus className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                          <Pencil className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {skills.map((skill, index) => (
                        <div key={index} className={`${index !== skills.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-gray-900">{skill.name}</h3>
                          </div>
                          <p className="text-sm text-gray-500 mt-1">{skill.endorsements} endorsements</p>
                        </div>
                      ))}
                    </div>
                    <button className="mt-4 text-blue-600 font-medium text-sm hover:underline">
                      Show all {skills.length} skills
                    </button>
                  </div>
                </div>
              )}

              {activeTab === 'Posts' && (
                <div className="space-y-4">
                  {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-xl shadow-sm border border-gray-200">
                      <div className="p-4 pb-3">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                              <Image
                                src="/images/workers/electrician.jpg"
                                alt="John Smith"
                                width={48}
                                height={48}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <div className="flex items-center gap-1">
                                <h3 className="font-semibold text-gray-900">John Smith</h3>
                                <CheckCircle className="w-4 h-4 text-blue-600 fill-blue-600" />
                              </div>
                              <p className="text-sm text-gray-500">Master Electrician</p>
                              <p className="text-xs text-gray-400">{post.timestamp}</p>
                            </div>
                          </div>
                          <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full">
                            <MoreHorizontal className="w-5 h-5" />
                          </button>
                        </div>
                      </div>

                      <div className="px-4 pb-3">
                        <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
                      </div>

                      {post.images.length > 0 && (
                        <div className="bg-gray-100 aspect-video relative">
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <ImageIcon className="w-12 h-12" />
                          </div>
                        </div>
                      )}

                      <div className="px-4 py-2 flex items-center justify-between text-sm text-gray-500 border-b border-gray-100">
                        <div className="flex items-center gap-1">
                          <span className="flex -space-x-1">
                            <span className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                              <Heart className="w-3 h-3 text-white fill-white" />
                            </span>
                          </span>
                          <span className="ml-1">{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span>{post.comments} comments</span>
                          <span>{post.shares} shares</span>
                        </div>
                      </div>

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
                </div>
              )}


              {activeTab === 'Portfolio' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="text-center py-12">
                    <FolderOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Portfolio Coming Soon</h3>
                    <p className="text-gray-500">Showcase your best work here</p>
                  </div>
                </div>
              )}

              {activeTab === 'Reviews' && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Reviews Coming Soon</h3>
                    <p className="text-gray-500">Client reviews will appear here</p>
                  </div>
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
          <Link href="/profile" className="flex flex-col items-center gap-1 px-3 py-1 text-blue-600">
            <User className="w-6 h-6" />
            <span className="text-xs font-medium">Profile</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}
