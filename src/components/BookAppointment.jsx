import { useState, useRef, useEffect } from 'react'
import { Calendar, Clock, MapPin, User, FileText, Phone } from 'lucide-react'

const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY

const CLEANING_TYPES = [
  { value: 'deep', label: 'Deep Cleaning' },
  { value: 'move_in', label: 'Move-In Cleaning' },
  { value: 'move_out', label: 'End of Tenancy / Move-Out Cleaning' },
  { value: 'post_construction', label: 'Post Construction / Renovation Cleaning' },
  { value: 'office', label: 'Office Cleaning' },
  { value: 'event', label: 'Venues & Events Cleaning' },
]

const TIME_SLOTS = Array.from({ length: 15 }, (_, i) => {
  const hour = 7 + i
  const period = hour >= 12 ? 'PM' : 'AM'
  const displayHour = hour > 12 ? hour - 12 : hour
  return {
    value: `${String(hour).padStart(2, '0')}:00`,
    label: `${displayHour}:00 ${period}`,
  }
})

const inputCls =
  'w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none transition-all text-slate-800 bg-white text-sm'
const labelCls = 'block text-sm font-semibold text-slate-700 mb-1.5'

function SectionHeader({ icon: Icon, title }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center flex-shrink-0">
        <Icon className="text-teal-600" size={20} />
      </div>
      <h3 className="text-xl font-bold text-blue-900">{title}</h3>
    </div>
  )
}

export default function BookAppointment() {
  const [form, setForm] = useState({
    cleaningType: 'deep',
    rooms: '',
    bathrooms: '',
    date: '',
    time: '09:00',
    recurring: 'no',
    details: '',
    specialRequests: '',
    street: '',
    unit: '',
    buzzer: '',
    city: '',
    postalCode: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  })

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const dateRef = useRef(null)
  const [error, setError] = useState('')
  const [turnstileToken, setTurnstileToken] = useState('')
  const turnstileRef = useRef(null)
  const widgetIdRef = useRef(null)

  const resetForm = () => {
    setForm({
      cleaningType: 'deep',
      rooms: '',
      bathrooms: '',
      date: '',
      time: '09:00',
      recurring: 'no',
      details: '',
      specialRequests: '',
      street: '',
      unit: '',
      buzzer: '',
      city: '',
      postalCode: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
    })
    setSubmitted(false)
    setError('')
    setTurnstileToken('')
  }

  const selectedType = CLEANING_TYPES.find((t) => t.value === form.cleaningType)
  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }))
  const today = new Date().toLocaleDateString('en-CA')

  // Render the Cloudflare Turnstile widget once its script has loaded.
  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || submitted) return
    let cancelled = false
    const render = () => {
      if (cancelled || !window.turnstile || !turnstileRef.current || widgetIdRef.current !== null) return
      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        callback: (token) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      })
    }
    render()
    const interval = setInterval(() => {
      if (window.turnstile) {
        clearInterval(interval)
        render()
      }
    }, 200)
    return () => {
      cancelled = true
      clearInterval(interval)
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [submitted])

  const resetTurnstile = () => {
    setTurnstileToken('')
    if (window.turnstile && widgetIdRef.current !== null) {
      window.turnstile.reset(widgetIdRef.current)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.date || form.date < today) {
      setError('Please select a valid future date for your appointment.')
      dateRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
      return
    }
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setError('Please complete the verification below before submitting.')
      return
    }
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, turnstileToken }),
      })
      if (res.ok) {
        setSubmitted(true)
        setTimeout(() => {
          document.getElementById('book').scrollIntoView({ behavior: 'smooth' })
        }, 50)
      } else {
        setError('Something went wrong. Please try again or call us directly.')
        resetTurnstile()
      }
    } catch {
      setError('Unable to connect. Please call 902-789-6801 to book your appointment.')
      resetTurnstile()
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <section id="book" className="py-20 md:py-28 bg-blue-900">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl">
            <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl">✅</span>
            </div>
            <h2 className="text-3xl font-bold text-blue-900 mb-4">Booking Received!</h2>
            <p className="text-slate-600 mb-2 text-lg">
              Thank you, <strong>{form.firstName}</strong>!
            </p>
            <p className="text-slate-500 mb-8">
              We've received your booking request and will confirm your appointment via email at{' '}
              <strong>{form.email}</strong> within 24 hours.
            </p>
            <p className="text-slate-400 text-sm mb-6">
              Need immediate assistance? Call us at{' '}
              <a href="tel:9027896801" className="text-teal-600 font-semibold">
                902-789-6801
              </a>
            </p>
            <button
              onClick={resetForm}
              className="bg-teal-500 hover:bg-teal-400 text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Book Another Appointment
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="book" className="py-20 md:py-28 bg-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-teal-400 font-semibold text-sm uppercase tracking-widest">Free Quote</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-2 mb-4">Book Your Appointment</h2>
          <p className="text-blue-300 max-w-2xl mx-auto text-lg">
            Fill out the form below and we'll get back to you with a confirmed booking within 24 hours.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Form Panels */}
            <div className="lg:col-span-2 space-y-6">
              {/* Service Details */}
              <div className="bg-white rounded-3xl p-6 md:p-8 overflow-hidden">
                <SectionHeader icon={FileText} title="Service Details" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Type of Cleaning *</label>
                    <select
                      required
                      value={form.cleaningType}
                      onChange={(e) => set('cleaningType', e.target.value)}
                      className={inputCls}
                    >
                      {CLEANING_TYPES.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelCls}>Number of Rooms</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 3"
                      value={form.rooms}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '')
                        set('rooms', val)
                      }}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Number of Bathrooms</label>
                    <input
                      type="text"
                      inputMode="numeric"
                      placeholder="e.g. 2"
                      value={form.bathrooms}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '')
                        set('bathrooms', val)
                      }}
                      className={inputCls}
                    />
                  </div>

                  <div ref={dateRef} className="min-w-0 w-full overflow-hidden">
                    <label className={labelCls}>
                      <span className="flex items-center gap-1.5">
                        <Calendar size={13} /> Appointment Date *
                      </span>
                    </label>
                    <div className="overflow-hidden w-full">
                      <input
                        type="date"
                        required
                        min={today}
                        value={form.date}
                        onChange={(e) => set('date', e.target.value)}
                        className={`${inputCls} block w-full max-w-full`}
                      />
                    </div>
                    {form.date && form.date < today && (
                      <p className="text-xs text-red-500 mt-1">Please select a future date.</p>
                    )}
                  </div>

                  <div>
                    <label className={labelCls}>
                      <span className="flex items-center gap-1.5">
                        <Clock size={13} /> Appointment Time *
                      </span>
                    </label>
                    <select
                      required
                      value={form.time}
                      onChange={(e) => set('time', e.target.value)}
                      className={inputCls}
                    >
                      {TIME_SLOTS.map((slot) => (
                        <option key={slot.value} value={slot.value}>
                          {slot.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelCls}>Do you require recurring appointments?</label>
                    <div className="flex gap-6 mt-1">
                      {['yes', 'no'].map((opt) => (
                        <label key={opt} className="flex items-center gap-2 cursor-pointer">
                          <input
                            type="radio"
                            name="recurring"
                            value={opt}
                            checked={form.recurring === opt}
                            onChange={() => set('recurring', opt)}
                            className="accent-teal-500 w-4 h-4"
                          />
                          <span className="text-slate-700 font-medium capitalize text-sm">
                            {opt === 'yes' ? 'Yes, recurring' : 'No, one-time'}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="sm:col-span-2">
                    <label className={labelCls}>Details / Special Requests</label>
                    <textarea
                      rows={4}
                      maxLength={500}
                      value={form.specialRequests}
                      onChange={(e) => set('specialRequests', e.target.value)}
                      placeholder="Please describe the space, size, and any specific requirements or areas of concern..."
                      className={`${inputCls} resize-none`}
                    />
                    <p className="text-xs text-slate-400 mt-1 text-right">
                      {form.specialRequests.length}/500
                    </p>
                  </div>
                </div>
              </div>

              {/* Service Address */}
              <div className="bg-white rounded-3xl p-6 md:p-8">
                <SectionHeader icon={MapPin} title="Service Address" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label className={labelCls}>Street Address *</label>
                    <input
                      type="text"
                      required
                      placeholder="123 Main Street"
                      value={form.street}
                      onChange={(e) => set('street', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Unit / Apt</label>
                    <input
                      type="text"
                      placeholder="Unit 4B"
                      value={form.unit}
                      onChange={(e) => set('unit', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Buzzer Code</label>
                    <input
                      type="text"
                      placeholder="#1234"
                      value={form.buzzer}
                      onChange={(e) => set('buzzer', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>City *</label>
                    <input
                      type="text"
                      required
                      placeholder="Halifax"
                      value={form.city}
                      onChange={(e) => set('city', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Postal Code *</label>
                    <input
                      type="text"
                      required
                      placeholder="B3J 2N2"
                      maxLength={7}
                      value={form.postalCode}
                      onChange={(e) => set('postalCode', e.target.value.toUpperCase())}
                      pattern="[A-Za-z]\d[A-Za-z][ ]?\d[A-Za-z]\d"
                      title="Enter a valid Canadian postal code (e.g. B3J 2N2)"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-6 md:p-8">
                <SectionHeader icon={User} title="Contact Information" />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className={labelCls}>First Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jane"
                      value={form.firstName}
                      onChange={(e) => set('firstName', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Last Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Smith"
                      value={form.lastName}
                      onChange={(e) => set('lastName', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={(e) => set('email', e.target.value)}
                      className={inputCls}
                    />
                  </div>
                  <div>
                    <label className={labelCls}>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      inputMode="numeric"
                      placeholder="9025551234"
                      maxLength={10}
                      value={form.phone}
                      onChange={(e) => {
                        const val = e.target.value.replace(/\D/g, '').slice(0, 10)
                        set('phone', val)
                      }}
                      pattern="\d{10}"
                      title="Enter a 10-digit phone number"
                      className={inputCls}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl">
                  <h3 className="text-xl font-bold text-blue-900 mb-6">Booking Summary</h3>

                  <div className="bg-teal-50 rounded-2xl p-5 text-center mb-5">
                    <div className="text-3xl mb-2">📋</div>
                    <p className="text-sm font-bold text-teal-700">Custom Quote</p>
                    <p className="text-xs text-teal-600 mt-1 leading-relaxed">
                      We'll contact you with a personalized quote based on your specific needs.
                    </p>
                  </div>

                  <div className="bg-slate-50 rounded-2xl p-4 space-y-2 mt-5">
                    <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide mb-2">
                      Selected
                    </p>
                    <div className="text-sm font-medium text-blue-900">{selectedType?.label}</div>
                    {form.date && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Calendar size={11} className="text-teal-500" />
                        {new Date(form.date + 'T00:00:00').toLocaleDateString('en-CA', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </div>
                    )}
                    {form.time && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <Clock size={11} className="text-teal-500" />
                        {TIME_SLOTS.find((s) => s.value === form.time)?.label}
                      </div>
                    )}
                    {form.city && (
                      <div className="flex items-center gap-1.5 text-xs text-slate-500">
                        <MapPin size={11} className="text-teal-500" />
                        {form.city}
                        {form.postalCode ? `, ${form.postalCode}` : ''}
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
                      {error}
                    </div>
                  )}

                  {TURNSTILE_SITE_KEY && (
                    <div ref={turnstileRef} className="mt-4 flex justify-center" />
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full mt-6 bg-teal-500 hover:bg-teal-400 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-4 rounded-2xl transition-all duration-200 hover:shadow-lg hover:shadow-teal-200 text-base"
                  >
                    {loading ? 'Submitting...' : 'Request Booking'}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <Phone size={13} />
                    <span>
                      Or call{' '}
                      <a href="tel:9027896801" className="text-teal-600 font-semibold">
                        902-789-6801
                      </a>
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 text-center mt-2">
                    By submitting, you agree to be contacted by our team to confirm your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}
