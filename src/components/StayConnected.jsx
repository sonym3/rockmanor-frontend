import { useState } from 'react'
import { Instagram, Facebook, Mail, Phone, MapPin, Send } from 'lucide-react'

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.93a8.18 8.18 0 004.79 1.52V7.01a4.85 4.85 0 01-1.03-.32z" />
  </svg>
)

const socials = [
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: TikTokIcon, label: 'TikTok', href: '#' },
]

const navLinks = [
  ['#home', 'Home'],
  ['#why-us', 'Why Choose Us'],
  ['#services', 'Our Services'],
  ['#book', 'Book Appointment'],
  ['#reviews', 'Reviews'],
  ['#professional', 'Commercial Services'],
]

export default function StayConnected() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
  }

  return (
    <footer id="connect" className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-1">
              3 Steps<span className="text-teal-400">.</span>
            </h2>
            <p className="text-teal-400 text-xs font-medium mb-4 uppercase tracking-wider">
              Cleaning Services
            </p>
            <p className="text-blue-300 text-sm leading-relaxed mb-6">
              Professional residential and commercial cleaning services. Making your space sparkle, one
              clean at a time.
            </p>
            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-white/10 hover:bg-teal-500 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {navLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-blue-300 hover:text-teal-400 transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:9021111111"
                  className="flex items-start gap-3 text-blue-300 hover:text-white transition-colors group"
                >
                  <Phone size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">902-111-1111</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@3stepscleaning.com"
                  className="flex items-start gap-3 text-blue-300 hover:text-white transition-colors"
                >
                  <Mail size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">hello@3stepscleaning.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-teal-400 mt-0.5 flex-shrink-0" />
                <span className="text-blue-300 text-sm">Halifax, Nova Scotia, Canada</span>
              </li>
            </ul>
            <div className="mt-5 bg-white/5 rounded-xl p-4">
              <p className="text-xs font-semibold text-white mb-1.5">Service Hours</p>
              <p className="text-blue-300 text-xs">Mon – Fri: 7:00 AM – 9:00 PM</p>
              <p className="text-blue-300 text-xs">Saturday: 8:00 AM – 6:00 PM</p>
              <p className="text-blue-300 text-xs">Sunday: 9:00 AM – 5:00 PM</p>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-5">
              Stay Connected
            </h3>
            <p className="text-blue-300 text-sm mb-5 leading-relaxed">
              Subscribe for seasonal promotions, cleaning tips, and exclusive member discounts.
            </p>

            {subscribed ? (
              <div className="bg-teal-500/20 border border-teal-500/30 rounded-xl p-4 text-center">
                <p className="text-teal-400 text-sm font-bold">🎉 You're in!</p>
                <p className="text-teal-500/80 text-xs mt-1">Watch your inbox for great offers.</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2 mb-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 bg-white/10 border border-white/20 rounded-xl px-3 py-2.5 text-white placeholder-blue-400 text-sm focus:outline-none focus:border-teal-400 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-400 text-white p-2.5 rounded-xl transition-all hover:shadow-lg"
                  aria-label="Subscribe"
                >
                  <Send size={16} />
                </button>
              </form>
            )}

            <p className="text-blue-400 text-xs leading-relaxed">
              Follow us on Instagram{' '}
              <a href="#" className="text-teal-400 hover:text-teal-300 font-semibold">
                @3stepsclean
              </a>{' '}
              for before &amp; after photos, tips, and seasonal deals!
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-blue-400 text-sm">
            © {new Date().getFullYear()} 3 Steps Cleaning Service. All rights reserved.
          </p>
          <div className="flex gap-5 text-sm">
            <a href="#" className="text-blue-400 hover:text-teal-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:text-teal-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
