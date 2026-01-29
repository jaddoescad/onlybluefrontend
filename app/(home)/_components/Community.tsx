import Link from 'next/link'

const posts = [
  {
    author: 'Mike Johnson',
    role: 'Master Electrician',
    initials: 'MJ',
    color: 'bg-yellow-500',
    content: 'Just finished this commercial panel upgrade. 400A service with whole-building surge protection. Proud of how clean it came out!',
    hasImage: true,
    likes: 147,
    comments: 23,
    time: '2h ago',
  },
  {
    author: 'Sarah Chen',
    role: 'Welder',
    initials: 'SC',
    color: 'bg-pink-500',
    content: 'Pro tip: Always take photos before you close up walls. Saved me twice this month when customers had questions about pipe routing.',
    hasImage: false,
    likes: 289,
    comments: 45,
    time: '4h ago',
  },
  {
    author: 'James Williams',
    role: 'Carpenter',
    initials: 'JW',
    color: 'bg-blue-500',
    content: 'Custom built-ins completed today. Solid oak with hand-cut dovetails. 3 weeks of work but the homeowner was thrilled.',
    hasImage: true,
    likes: 356,
    comments: 67,
    time: '6h ago',
  },
]

export default function Community() {
  return (
    <section id="community" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Community</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            See what everyone&apos;s sharing
          </h2>
          <p className="text-xl text-gray-600">
            Real projects, real advice, real connections. Join the conversation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ring-2 ring-gray-100 ${post.color}`}>
                    <span className="text-white font-semibold">{post.initials}</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900">{post.author}</h4>
                    <p className="text-sm text-gray-500">{post.role}</p>
                  </div>
                  <span className="text-xs text-gray-400">{post.time}</span>
                </div>
                <p className="text-gray-700 leading-relaxed">{post.content}</p>
              </div>
              {post.hasImage && (
                <div className="relative h-52 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Project Photo</span>
                </div>
              )}
              <div className="p-4 border-t border-gray-100 flex items-center gap-6">
                <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  <span className="text-sm font-medium">{post.likes}</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span className="text-sm font-medium">{post.comments}</span>
                </button>
                <button className="ml-auto text-gray-400 hover:text-blue-600 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/auth?mode=signup"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/25"
          >
            Join the community
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
