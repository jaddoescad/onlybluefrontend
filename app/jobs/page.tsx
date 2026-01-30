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
  DollarSign,
  Clock,
  Building2,
  Briefcase,
  Filter,
  Share2,
  Plus,
  CheckCircle,
} from 'lucide-react'

const navigationItems = [
  { icon: Home, label: 'Home', href: '/feed' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: FolderOpen, label: 'Portfolio', href: '/portfolio' },
  { icon: Search, label: 'Explore', href: '/explore' },
  { icon: Briefcase, label: 'Jobs', href: '/jobs', active: true },
]

const jobTypes = ['All Jobs', 'Full-time', 'Part-time', 'Contract', 'Temporary']

const jobs = [
  {
    id: 1,
    title: 'Master Electrician',
    company: 'PowerGrid Electric',
    companyLogo: '/images/companies/powergrid.jpg',
    location: 'Austin, TX',
    type: 'Full-time',
    salary: '$75,000 - $95,000/year',
    posted: '2 hours ago',
    applicants: 12,
    description: 'We are seeking an experienced Master Electrician to lead our commercial projects team. The ideal candidate will have 10+ years of experience and hold a valid Master Electrician license.',
    requirements: ['Master Electrician License', '10+ years experience', 'Commercial project experience', 'Team leadership skills'],
    urgent: true,
    saved: false,
  },
  {
    id: 2,
    title: 'Journeyman Plumber',
    company: 'FlowMaster Plumbing',
    companyLogo: '/images/companies/flowmaster.jpg',
    location: 'Houston, TX',
    type: 'Full-time',
    salary: '$55,000 - $70,000/year',
    posted: '5 hours ago',
    applicants: 8,
    description: 'Join our growing team! We need a skilled Journeyman Plumber for residential and light commercial work. Great benefits and company vehicle provided.',
    requirements: ['Journeyman Plumber License', '5+ years experience', 'Valid driver\'s license', 'Own basic tools'],
    urgent: false,
    saved: true,
  },
  {
    id: 3,
    title: 'HVAC Service Technician',
    company: 'CoolAir Systems',
    companyLogo: '/images/companies/coolair.jpg',
    location: 'Dallas, TX',
    type: 'Full-time',
    salary: '$50,000 - $65,000/year',
    posted: '1 day ago',
    applicants: 23,
    description: 'Looking for an HVAC technician to handle service calls and installations. EPA certification required. We offer competitive pay and ongoing training.',
    requirements: ['EPA 608 Certification', '3+ years experience', 'HVAC installation experience', 'Customer service skills'],
    urgent: false,
    saved: false,
  },
  {
    id: 4,
    title: 'Certified Welder - MIG/TIG',
    company: 'SteelWorks Fabrication',
    companyLogo: '/images/companies/steelworks.jpg',
    location: 'San Antonio, TX',
    type: 'Contract',
    salary: '$35 - $45/hour',
    posted: '2 days ago',
    applicants: 15,
    description: '6-month contract with potential for permanent hire. Must be certified in both MIG and TIG welding. Structural steel experience preferred.',
    requirements: ['AWS Certification', 'MIG/TIG proficiency', 'Blueprint reading', '5+ years experience'],
    urgent: true,
    saved: false,
  },
  {
    id: 5,
    title: 'Residential Electrician',
    company: 'HomeWire Electric',
    companyLogo: '/images/companies/homewire.jpg',
    location: 'Phoenix, AZ',
    type: 'Full-time',
    salary: '$45,000 - $60,000/year',
    posted: '3 days ago',
    applicants: 31,
    description: 'Growing residential electrical company seeking licensed electrician. New construction and remodel work. Excellent growth opportunities.',
    requirements: ['Journeyman Electrician License', '3+ years residential', 'New construction experience', 'Customer focused'],
    urgent: false,
    saved: false,
  },
  {
    id: 6,
    title: 'Apprentice Carpenter',
    company: 'BuildRight Construction',
    companyLogo: '/images/companies/buildright.jpg',
    location: 'Denver, CO',
    type: 'Full-time',
    salary: '$35,000 - $45,000/year',
    posted: '4 days ago',
    applicants: 45,
    description: 'Great opportunity for someone starting their carpentry career! We provide on-the-job training and support for apprenticeship program enrollment.',
    requirements: ['High school diploma', 'Basic tool knowledge', 'Eager to learn', 'Reliable transportation'],
    urgent: false,
    saved: false,
  },
]

const savedSearches = [
  { name: 'Electrician jobs in Austin', count: 24 },
  { name: 'Remote estimator positions', count: 8 },
  { name: 'HVAC Texas', count: 15 },
]

export default function JobsPage() {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false)
  const [activeJobType, setActiveJobType] = useState('All Jobs')
  const [selectedJob, setSelectedJob] = useState(jobs[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')

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
                  placeholder="Search jobs..."
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
              <div className="space-y-4 sticky top-20">
                {/* Navigation */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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

                {/* Saved Searches */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Saved Searches</h3>
                  <div className="space-y-2">
                    {savedSearches.map((search, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-2 hover:bg-gray-50 rounded-lg transition-colors"
                      >
                        <p className="text-sm text-gray-700 truncate">{search.name}</p>
                        <p className="text-xs text-gray-400">{search.count} new jobs</p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Job Preferences */}
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-3">Job Preferences</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Open to work</span>
                      <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Job alerts</span>
                      <div className="w-10 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                        <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <button className="mt-4 text-sm text-blue-600 font-medium hover:underline">
                    Edit preferences
                  </button>
                </div>
              </div>
            </aside>

            {/* Job Listings */}
            <div className="lg:col-span-5 space-y-4">
              {/* Search Filters */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Job title or keyword"
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      value={locationQuery}
                      onChange={(e) => setLocationQuery(e.target.value)}
                      placeholder="City, state, or zip"
                      className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:outline-none"
                    />
                  </div>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Search
                  </button>
                </div>

                {/* Job Type Filters */}
                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100">
                  {jobTypes.map((type) => (
                    <button
                      key={type}
                      onClick={() => setActiveJobType(type)}
                      className={`px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeJobType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Results Header */}
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600">{jobs.length} jobs found</p>
                <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-gray-900">
                  <Filter className="w-4 h-4" />
                  More filters
                </button>
              </div>

              {/* Job Cards */}
              <div className="space-y-3">
                {jobs.map((job) => (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job)}
                    className={`bg-white rounded-xl shadow-sm border-2 p-4 cursor-pointer transition-all ${
                      selectedJob?.id === job.id
                        ? 'border-blue-500'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-6 h-6 text-gray-400" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{job.title}</h3>
                            <p className="text-sm text-gray-600">{job.company}</p>
                          </div>
                          {job.urgent && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                              Urgent
                            </span>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {job.type}
                          </span>
                          <span className="flex items-center gap-1 text-green-600 font-medium">
                            <DollarSign className="w-3 h-3" /> {job.salary}
                          </span>
                        </div>
                        <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                          <span className="text-xs text-gray-400">{job.posted} · {job.applicants} applicants</span>
                          <button
                            className={`p-1.5 rounded-full transition-colors ${
                              job.saved
                                ? 'text-blue-600 bg-blue-50'
                                : 'text-gray-400 hover:text-gray-600 hover:bg-gray-100'
                            }`}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <Bookmark className={`w-4 h-4 ${job.saved ? 'fill-blue-600' : ''}`} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Detail Panel */}
            <aside className="hidden lg:block lg:col-span-4">
              {selectedJob && (
                <div className="bg-white rounded-xl shadow-sm border border-gray-200 sticky top-20 overflow-hidden">
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Building2 className="w-8 h-8 text-gray-400" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-xl font-bold text-gray-900">{selectedJob.title}</h2>
                        <p className="text-gray-600">{selectedJob.company}</p>
                        <p className="text-sm text-gray-500 mt-1">{selectedJob.location} · {selectedJob.type}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <button className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                        Apply Now
                      </button>
                      <button className="p-2.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        <Bookmark className="w-5 h-5" />
                      </button>
                      <button className="p-2.5 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50 transition-colors">
                        <Share2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 max-h-[calc(100vh-300px)] overflow-y-auto">
                    {/* Salary & Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-3 bg-green-50 rounded-lg">
                        <p className="text-xs text-green-600 font-medium">Salary</p>
                        <p className="text-sm font-semibold text-green-700">{selectedJob.salary}</p>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg">
                        <p className="text-xs text-blue-600 font-medium">Job Type</p>
                        <p className="text-sm font-semibold text-blue-700">{selectedJob.type}</p>
                      </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">About this job</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{selectedJob.description}</p>
                    </div>

                    {/* Requirements */}
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Requirements</h3>
                      <ul className="space-y-2">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Company Info */}
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <h3 className="font-semibold text-gray-900 mb-3">About {selectedJob.company}</h3>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center border border-gray-200">
                          <Building2 className="w-6 h-6 text-gray-400" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{selectedJob.company}</p>
                          <p className="text-sm text-gray-500">50-100 employees</p>
                        </div>
                      </div>
                      <button className="mt-3 text-sm text-blue-600 font-medium hover:underline">
                        View company page
                      </button>
                    </div>
                  </div>
                </div>
              )}
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
          <Link href="/explore" className="flex flex-col items-center gap-1 px-3 py-1 text-gray-500">
            <Search className="w-6 h-6" />
            <span className="text-xs">Explore</span>
          </Link>
          <Link href="/jobs" className="flex flex-col items-center gap-1 px-3 py-1 text-blue-600">
            <Briefcase className="w-6 h-6" />
            <span className="text-xs font-medium">Jobs</span>
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
