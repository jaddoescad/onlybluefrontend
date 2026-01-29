import { Users, ImageIcon, Award, MessageCircle, Briefcase, Shield } from 'lucide-react'

const features = [
  {
    icon: Users,
    title: 'Build Your Network',
    description: 'Connect with tradespeople in your area and industry. Grow your professional circle with real craftsmen.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: ImageIcon,
    title: 'Showcase Your Work',
    description: 'Share photos and videos of your best projects. Let your craftsmanship speak for itself.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    title: 'Earn Recognition',
    description: 'Get endorsed by peers for your skills. Build a reputation that opens doors to new opportunities.',
    gradient: 'from-orange-500 to-yellow-500',
  },
  {
    icon: MessageCircle,
    title: 'Trade Talk',
    description: 'Share tips, ask questions, and learn from experienced professionals in your field.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: Briefcase,
    title: 'Opportunity Feed',
    description: 'See what projects your network is working on. Discover collaboration opportunities.',
    gradient: 'from-red-500 to-orange-500',
  },
  {
    icon: Shield,
    title: 'Verified Skills',
    description: 'Verify your certifications and licenses. Stand out with verified credentials.',
    gradient: 'from-indigo-500 to-blue-500',
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="mt-3 text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Built for the trades
          </h2>
          <p className="text-xl text-gray-600">
            A professional network that understands what skilled tradespeople actually need.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
