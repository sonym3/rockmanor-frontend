import { Check } from 'lucide-react'

const services = [
  {
    title: 'Simple Clean',
    price: 175,
    badge: null,
    tag: 'Great for maintenance',
    image:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    description:
      'A quick, efficient clean to keep your space fresh and tidy between deeper sessions. Perfect for regular upkeep.',
    features: [
      'Dusting all accessible surfaces',
      'Vacuuming and mopping floors',
      'Kitchen surface wipe-down',
      'Bathroom quick clean',
      'Trash removal',
      'Window sill & ledge cleaning',
    ],
  },
  {
    title: 'Standard Clean',
    price: 239,
    badge: 'Most Popular',
    tag: 'Best value',
    image:
      'https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=800&q=80',
    description:
      'Our most requested package — a thorough, top-to-bottom clean covering all the key areas of your home or office.',
    features: [
      'Everything in Simple Clean',
      'Inside microwave & appliance exteriors',
      'Detailed bathroom scrubbing & disinfecting',
      'Cabinet exterior wiping',
      'Baseboards and door frames',
      'Light switches & handles',
      'Bed making (fresh linens provided)',
    ],
  },
  {
    title: 'Deep Clean',
    price: 350,
    badge: 'Most Thorough',
    tag: 'Move-in/out ready',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description:
      'The ultimate cleaning experience — every nook, cranny, and corner receives the full attention it deserves.',
    features: [
      'Everything in Standard Clean',
      'Inside oven and refrigerator',
      'Behind and under all appliances',
      'Interior windows cleaned',
      'Inside all cabinets and drawers',
      'Grout scrubbing and tile detailing',
      'Blinds, fans & ceiling fixtures',
      'Deep carpet and upholstery treatment',
    ],
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">Our Services</span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">
            Choose Your Clean
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From quick touch-ups to thorough deep cleans — we have a package for every need and budget.
            All prices are starting rates.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col ${
                service.badge === 'Most Popular' ? 'ring-2 ring-teal-500' : ''
              }`}
            >
              {service.badge && (
                <div
                  className={`absolute top-4 right-4 z-10 text-xs font-bold px-3 py-1 rounded-full shadow-md ${
                    service.badge === 'Most Popular'
                      ? 'bg-teal-500 text-white'
                      : 'bg-blue-900 text-white'
                  }`}
                >
                  {service.badge}
                </div>
              )}

              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Body */}
              <div className="p-7 flex flex-col flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-blue-900">{service.title}</h3>
                  <div className="text-right ml-4 flex-shrink-0">
                    <div className="text-xs text-slate-400">Starting at</div>
                    <div className="text-2xl font-bold text-teal-600">${service.price}</div>
                  </div>
                </div>

                <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-2.5 py-0.5 rounded-full mb-3 w-fit">
                  {service.tag}
                </span>

                <p className="text-slate-500 text-sm mb-5 leading-relaxed">{service.description}</p>

                <ul className="space-y-2 mb-7 flex-1">
                  {service.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check size={15} className="text-teal-500 mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#book"
                  className={`w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg ${
                    service.badge === 'Most Popular'
                      ? 'bg-teal-500 hover:bg-teal-400 text-white hover:shadow-teal-200'
                      : 'bg-blue-900 hover:bg-blue-800 text-white'
                  }`}
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
