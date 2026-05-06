const services = [
  {
    title: 'Deep Cleaning',
    image:
      'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80',
    description:
      'Deep cleaning refers to a thorough and intensive cleaning process that goes beyond regular cleaning tasks. It involves cleaning and sanitizing areas that are often overlooked during routine cleaning, such as behind appliances, inside cabinets, and in hard-to-reach corners. Deep cleaning typically includes tasks like scrubbing grout, washing windows (interior), and removing dust and dirt from surfaces. It aims to eliminate deep-seated dirt, allergens, and bacteria, resulting in a cleaner and healthier living or working environment.',
  },
  {
    title: 'Move-In Cleaning',
    image:
      'https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?auto=format&fit=crop&w=800&q=80',
    description:
      'Consider hiring 3-Steps Cleaning Services to take care of your move-in cleaning needs. Move-in cleaning is an extensive cleaning process that occurs before individuals or families move into a new residence. Our services typically involve cleaning the entire space, including all rooms, bathrooms, kitchen appliances, floors, windows, and surfaces. Our goal is to ensure that your new home is thoroughly sanitized and ready for you to settle in comfortably. Move-in cleaning tasks may encompass dusting, vacuuming, mopping, surface wiping, debris removal, and disinfection of high-touch areas.',
  },
  {
    title: 'End of Tenancy / Move-Out Cleaning',
    image:
      'https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=800&q=80',
    description:
      'If you require assistance with your move-out cleaning, 3-Steps Cleaning Services is at your service. We specialize in thorough cleaning of rental properties when tenants are preparing to move out. Our aim is to leave the property in a clean and presentable condition for the next occupants or for the landlord\'s inspection. We offer a range of tasks such as dusting, vacuuming, mopping, cleaning appliances, and wiping surfaces, striving to meet cleanliness standards and ensure the satisfaction of both the landlord and incoming tenants.',
  },
  {
    title: 'Post Construction / Renovation Cleaning',
    image:
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80',
    description:
      '3-Steps Cleaning Services also offers post-construction cleaning services. After construction or renovation projects, our team can efficiently clean and sanitize the space, removing dust, debris, and any other construction-related residue. We are experienced in handling the unique cleaning requirements that arise after construction, ensuring that the area is left spotless and ready for occupancy or final touches. Our post-construction cleaning services encompass thorough cleaning of surfaces, floors, interior windows, fixtures, and any other areas affected by the construction process.',
  },
  {
    title: 'Office Cleaning',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description:
      '3-Steps Cleaning Services offers professional office space cleaning services. We recognize the significance of maintaining a clean and presentable workspace. Our team is committed to delivering comprehensive cleaning solutions that cater to the specific requirements of your office. By entrusting us with your office cleaning needs, we aim to create a clean and inviting environment that contributes to a pleasant and productive work atmosphere for everyone in your workspace.',
  },
  {
    title: 'Venues & Events Cleaning',
    image:
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    description:
      'Hosting an event? 3-Steps Cleaning Services offers reliable venue and event cleaning to ensure your space stays clean and presentable. We keep your space spotless before, during, and after any event — whether it\'s a corporate function, wedding, private party, or any other occasion.',
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
            What We Offer
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            From residential deep cleans to commercial spaces and special events — we have a service for every need.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col"
            >
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
                <h3 className="text-xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed flex-1">{service.description}</p>
                <a
                  href="#book"
                  className="w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 hover:shadow-lg bg-blue-900 hover:bg-blue-800 text-white"
                >
                  Request a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
