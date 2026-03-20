import { Building2, Home, Star, Check } from 'lucide-react'

const services = [
  {
    icon: Building2,
    title: 'Office & Commercial Cleaning',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description:
      'Keep your workplace clean, healthy, and impressive. We offer flexible scheduling — before or after business hours — to ensure zero disruption to your operations. A clean office boosts productivity and leaves a lasting impression on clients and staff alike.',
    bullets: [
      'Nightly, weekly, or monthly schedules',
      'Common areas, boardrooms & washrooms',
      'Post-construction cleanup',
      'COVID-safe sanitization protocols',
      'Retail stores, clinics & office buildings',
      'Tailored cleaning plans for your space',
    ],
    cta: 'Get a Commercial Quote',
  },
  {
    icon: Home,
    title: 'Moving & Airbnb Cleaning',
    image:
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80',
    description:
      "Moving in, moving out, or hosting on Airbnb? Our specialized teams ensure your property is spotless, guest-ready, or inspection-perfect every single time. We know how important first impressions are — whether it's for a new tenant, buyer, or overnight guest.",
    bullets: [
      'Move-in and move-out deep cleans',
      'Airbnb & short-term rental turnovers',
      'Same-day and next-day availability',
      'Full deposit-back guarantee',
      '5-star guest experience ready',
      'Linen changeover included on request',
    ],
    cta: 'Book a Moving Clean',
  },
  {
    icon: Star,
    title: 'Venues & Events',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description:
      'Planning a corporate event, wedding, or private party? We handle pre-event setup cleaning and full post-event cleanup so you can focus entirely on your guests. From intimate gatherings to large-scale functions, we leave your venue gleaming.',
    bullets: [
      'Pre-event deep cleaning & setup',
      'Post-event teardown & full cleanup',
      'Washroom maintenance during events',
      'Outdoor, tent & banquet hall cleaning',
      'Wedding venues & conference centres',
      'Flexible scheduling around your event',
    ],
    cta: 'Get an Event Quote',
  },
]

export default function ProfessionalServices() {
  return (
    <section id="professional" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">
            Specialized Services
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">
            Professional Cleaning Services
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Beyond residential cleaning — we're equipped to handle commercial spaces, property transitions,
            and special events with the same dedication and excellence.
          </p>
        </div>

        {/* Service Rows */}
        <div className="space-y-10">
          {services.map((service, i) => (
            <div
              key={i}
              className={`flex flex-col ${
                i % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
              } bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300`}
            >
              {/* Image */}
              <div className="md:w-2/5 h-64 md:h-auto overflow-hidden relative flex-shrink-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent" />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <service.icon className="text-teal-600" size={22} />
                  </div>
                  <h3 className="text-2xl font-bold text-blue-900">{service.title}</h3>
                </div>

                <p className="text-slate-500 mb-6 leading-relaxed">{service.description}</p>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mb-8">
                  {service.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={11} className="text-white" strokeWidth={3} />
                      </span>
                      {bullet}
                    </li>
                  ))}
                </ul>

                <div>
                  <a
                    href="#book"
                    className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:shadow-lg text-sm"
                  >
                    {service.cta}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
