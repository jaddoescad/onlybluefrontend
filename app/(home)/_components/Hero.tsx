'use client'

import Link from 'next/link'
import Image from 'next/image'

const workers = [
  // Left side (top to bottom)
  {
    name: 'Mike',
    role: 'Electrician',
    image: '/images/workers/electrician.jpg',
    ringColor: 'ring-yellow-400',
    position: 'top-[18%] left-[1%] lg:top-[15%] lg:left-[8%]',
    delay: '0s',
    desktopOnly: true,
  },
  {
    name: 'Carlos',
    role: 'Plumber',
    image: '/images/workers/plumber.jpg',
    ringColor: 'ring-cyan-400',
    position: 'top-[38%] left-[1%] lg:top-[35%] lg:left-[3%]',
    delay: '0.3s',
  },
  {
    name: 'Maria',
    role: 'HVAC Tech',
    image: '/images/workers/hvac.jpg',
    ringColor: 'ring-green-400',
    position: 'bottom-[22%] left-[4%] lg:bottom-[20%] lg:left-[10%]',
    delay: '0.4s',
  },
  // Right side (top to bottom)
  {
    name: 'Sarah',
    role: 'Welder',
    image: '/images/workers/welder.jpg',
    ringColor: 'ring-pink-400',
    position: 'top-[18%] right-[1%] lg:top-[10%] lg:right-[12%]',
    delay: '0.5s',
    desktopOnly: true,
  },
  {
    name: 'Jamie',
    role: 'Carpenter',
    image: '/images/workers/carpenter.jpg',
    ringColor: 'ring-orange-400',
    position: 'top-[44%] right-[1%] lg:top-[40%] lg:right-[5%]',
    delay: '0.7s',
  },
  {
    name: 'David',
    role: 'Real Estate Agent',
    image: '/images/workers/realtor.jpg',
    ringColor: 'ring-purple-400',
    position: 'bottom-[18%] right-[4%] lg:bottom-[15%] lg:right-[8%]',
    delay: '0.6s',
  },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-950 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Worker Profiles - Desktop only */}
      <div className="absolute inset-0 max-w-7xl mx-auto hidden lg:block">
        {workers.map((worker, index) => (
          <div
            key={index}
            className={`absolute ${worker.position} flex flex-col items-center animate-float z-10`}
            style={{ animationDelay: worker.delay }}
          >
            <div className={`w-28 h-28 rounded-full overflow-hidden ring-4 ${worker.ringColor} shadow-2xl`}>
              <Image
                src={worker.image}
                alt={worker.name}
                width={112}
                height={112}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="mt-2 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-gray-800 shadow-lg">
              {worker.role}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            50,000+ skilled professionals already connected
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight mb-6">
            Connect With
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Skilled Tradespeople
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-blue-100 max-w-2xl mx-auto mb-10 leading-relaxed">
            The social network built for blue-collar professionals. Share your craft, connect with peers, and build your reputation.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/feed"
              className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all shadow-xl shadow-black/20 hover:scale-105"
            >
              Get Started Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:bg-white/20 transition-all"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Mobile Worker Carousel */}
        <div className="mt-10 lg:hidden -mx-4 sm:-mx-6 overflow-hidden py-2">
          <div className="flex animate-scroll gap-6 w-max">
            {[...workers, ...workers, ...workers].map((worker, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className={`w-16 h-16 rounded-full overflow-hidden ring-2 ${worker.ringColor} shadow-xl`}>
                  <Image
                    src={worker.image}
                    alt={worker.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                  />
                </div>
                <span className="mt-2 text-xs text-white/80">{worker.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
