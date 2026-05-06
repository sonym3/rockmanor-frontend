import { Search, ThumbsUp, Clock, Shield, Leaf, Phone } from 'lucide-react'

const features = [
  {
    icon: Search,
    title: 'Attention to Detail',
    description:
      'Our commitment to excellence is reflected in our diligent attention to detail. We leave no corner unturned, ensuring that every nook and cranny of your space is thoroughly cleaned and refreshed.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description:
      'Your satisfaction is our top priority. We go above and beyond to ensure that you are delighted with our services. If there are any concerns or areas that require further attention, we will gladly address them promptly.',
  },
  {
    icon: Clock,
    title: 'Reliable',
    description:
      'Count on our team for dependable and consistent cleaning services. We understand the importance of punctuality and will always arrive at your scheduled appointments promptly.',
  },
  {
    icon: Shield,
    title: 'Insured',
    description:
      'Rest easy knowing that we are fully insured. Our comprehensive coverage provides you with peace of mind, ensuring that any unforeseen incidents or damages are properly handled.',
  },
  {
    icon: Leaf,
    title: 'Eco-Friendly Products',
    description:
      'Eco-friendly products are available at your request, keeping your space clean while being kind to the environment.',
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About */}
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">About Us</span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-6">
            Who We Are
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
            3-Steps Cleaning Services is a registered and insured locally-owned cleaning company, committed
            to serving the Halifax Regional Municipality and its surroundings. We offer a range of services
            tailored to meet your needs — including deep cleaning, end of tenancy cleaning, move-in/out
            cleaning, and post-construction cleaning. We also provide services for commercial spaces,
            including offices and apartment buildings. We take pride in our work and prioritize customer
            satisfaction, offering excellent quality at a reasonable price.
          </p>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">Why 3 Steps</span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">
            The Clean Difference
          </h2>
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
                Join satisfied customers who trust 3 Steps with their home and business.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#book"
                  className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-7 rounded-full transition-all duration-200 hover:shadow-lg text-center text-sm"
                >
                  Book Your Next Appointment
                </a>
                <a
                  href="tel:9027896801"
                  className="flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-semibold py-3 px-7 rounded-full transition-all duration-200 text-sm whitespace-nowrap"
                >
                  <Phone size={15} />
                  902-789-6801
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
