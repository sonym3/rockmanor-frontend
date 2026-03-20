import { Shield, Clock, Star, Leaf, ThumbsUp, Users, Phone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Fully Insured & Bonded',
    description:
      'Every cleaner is background-checked, insured, and bonded — giving you complete peace of mind every visit.',
  },
  {
    icon: Clock,
    title: 'Flexible Scheduling',
    description:
      'Book mornings, evenings, or weekends. We work around your schedule, not the other way around.',
  },
  {
    icon: Star,
    title: 'Five-Star Quality',
    description:
      'Our meticulous attention to detail ensures every corner sparkles. We don\'t leave until you\'re fully satisfied.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'We use environmentally safe, non-toxic solutions — completely safe for children, pets, and the planet.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description:
      'Not happy? We\'ll come back and re-clean at no extra charge. Your satisfaction is always our top priority.',
  },
  {
    icon: Users,
    title: 'Trained Professionals',
    description:
      'All team members undergo rigorous training to deliver consistently exceptional, thorough results every time.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">Why 3 Steps</span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">
            The Clean Difference
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            We're not just another cleaning company — we're your trusted partner in maintaining a spotless,
            healthy environment, every time.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl bg-slate-50 hover:bg-blue-900 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 cursor-default"
            >
              <div className="w-12 h-12 bg-teal-100 group-hover:bg-teal-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <feature.icon
                  className="text-teal-600 group-hover:text-white transition-colors duration-300"
                  size={22}
                />
              </div>
              <h3 className="text-lg font-bold text-blue-900 group-hover:text-white mb-2 transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-slate-500 group-hover:text-blue-200 text-sm leading-relaxed transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Image Banner + CTA */}
        <div className="relative rounded-3xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1400&q=80"
            alt="Professional cleaning team at work"
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-blue-900/80 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-lg">
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                Ready for a cleaner space?
              </h3>
              <p className="text-blue-300 mb-6 text-sm md:text-base">
                Join hundreds of satisfied customers who trust 3 Steps with their home and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-7 rounded-full transition-all duration-200 hover:shadow-lg text-center text-sm"
                >
                  Book Your Next Appointment
                </a>
                <a
                  href="tel:9021111111"
                  className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-7 rounded-full transition-all duration-200 text-sm whitespace-nowrap"
                >
                  <Phone size={15} />
                  902-111-1111
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
