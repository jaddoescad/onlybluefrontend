import Link from 'next/link'

const trades = [
  { name: 'Electricians', count: '12,400+', color: 'from-yellow-600 to-yellow-800' },
  { name: 'Plumbers', count: '9,800+', color: 'from-cyan-600 to-cyan-800' },
  { name: 'Carpenters', count: '11,200+', color: 'from-orange-600 to-orange-800' },
  { name: 'HVAC Techs', count: '7,600+', color: 'from-green-600 to-green-800' },
  { name: 'Welders', count: '5,400+', color: 'from-red-600 to-red-800' },
  { name: 'Mechanics', count: '8,900+', color: 'from-slate-600 to-slate-800' },
  { name: 'Masons', count: '4,200+', color: 'from-stone-600 to-stone-800' },
  { name: 'Roofers', count: '3,800+', color: 'from-emerald-600 to-emerald-800' },
]

export default function Trades() {
  return (
    <section id="trades" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Trades</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Find your trade community
          </h2>
          <p className="text-xl text-gray-600">
            Connect with professionals in your specific trade. Share specialized knowledge and grow together.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {trades.map((trade, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer aspect-[4/3] bg-gradient-to-br ${trade.color} hover:scale-105 transition-transform duration-300`}
            >
              <div className="absolute inset-0 bg-black/20"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-bold text-white text-lg">{trade.name}</h3>
                <p className="text-sm text-white/80 font-medium">{trade.count} members</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800"></div>
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative p-10 md:p-16 text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to join the network?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Create your profile in minutes. Connect with tradespeople in your area. Start building your professional reputation.
            </p>
            <Link
              href="/auth?mode=signup"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all hover:scale-105"
            >
              Get started free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
