import { ChevronDown, Phone } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1662076061409-44eb521c12e4?q=80&w=1920&auto=format&fit=crop"
          alt="Professional cleaning service"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/90 via-blue-900/80 to-blue-800/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto py-24">
        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 text-teal-300 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full animate-pulse" />
          Trusted by 500+ Homes & Businesses
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-5 leading-tight tracking-tight">
          3 Steps
          <span className="block text-teal-400 mt-1">Cleaning Services</span>
        </h1>

        <p className="text-xl md:text-2xl text-blue-200 font-light mb-3">
          Residential &amp; Commercial Cleaning
        </p>
        <p className="text-blue-300 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          We bring the sparkle back to your home or office — professional, reliable, and thorough every single time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#book"
            className="w-full sm:w-auto bg-teal-500 hover:bg-teal-400 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-200 hover:shadow-xl hover:shadow-teal-500/30 hover:-translate-y-0.5"
          >
            Book Your Next Appointment
          </a>
          <a
            href="tel:9021111111"
            className="w-full sm:w-auto flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white/80 text-white font-semibold py-4 px-10 rounded-full text-lg transition-all duration-200 hover:bg-white/10"
          >
            <Phone size={20} />
            Call 902-111-1111
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-16 pt-8 border-t border-white/10">
          {[
            { value: '500+', label: 'Happy Clients' },
            { value: '5★', label: 'Average Rating' },
            { value: '3+', label: 'Years Experience' },
            { value: '100%', label: 'Satisfaction Guaranteed' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl font-bold text-teal-400">{stat.value}</div>
              <div className="text-blue-300 text-xs mt-0.5">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#why-us"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  )
}
