import { useState } from 'react'
import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Halifax, NS',
    rating: 5,
    date: 'November 2024',
    text: "Absolutely incredible service! My home has never looked this clean. The team was professional, thorough, and paid attention to every detail. I've already booked my next appointment!",
    service: 'Deep Clean',
    avatar: 'SM',
    color: 'bg-purple-500',
  },
  {
    name: 'James R.',
    location: 'Dartmouth, NS',
    rating: 5,
    date: 'October 2024',
    text: "I used 3 Steps for our office and was blown away. They worked efficiently, didn't disrupt our workflow, and left the space spotless. Team morale actually went up!",
    service: 'Office Cleaning',
    avatar: 'JR',
    color: 'bg-blue-500',
  },
  {
    name: 'Emily T.',
    location: 'Bedford, NS',
    rating: 5,
    date: 'October 2024',
    text: "Used them for a move-out clean and got my full deposit back! They were incredibly detailed — even cleaned inside the oven and refrigerator. Worth every single penny.",
    service: 'Moving Clean',
    avatar: 'ET',
    color: 'bg-rose-500',
  },
  {
    name: 'David L.',
    location: 'Truro, NS',
    rating: 5,
    date: 'September 2024',
    text: "I've tried several cleaning services in the area and 3 Steps is by far the best. Consistent quality every visit, always on time, and genuinely friendly staff.",
    service: 'Standard Clean',
    avatar: 'DL',
    color: 'bg-green-500',
  },
  {
    name: 'Michelle K.',
    location: 'Halifax, NS',
    rating: 5,
    date: 'September 2024',
    text: "Had 3 Steps clean our Airbnb between guests and the reviews have been so much better since! Guests keep commenting on how clean and fresh the space is. Game changer!",
    service: 'Airbnb Clean',
    avatar: 'MK',
    color: 'bg-amber-500',
  },
  {
    name: 'Ryan P.',
    location: 'Sackville, NS',
    rating: 5,
    date: 'August 2024',
    text: "The simple clean package is perfect for our family. Affordable, efficient, and reliable. The kids love coming home to a clean house every other week. Loyal customers!",
    service: 'Simple Clean',
    avatar: 'RP',
    color: 'bg-cyan-500',
  },
]

function StarRow({ rating }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          size={13}
          className={i < rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 fill-slate-200'}
        />
      ))}
    </div>
  )
}

export default function Reviews() {
  const [modalOpen, setModalOpen] = useState(false)
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', message: '', rating: 5 })
  const [feedbackSent, setFeedbackSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleFeedback = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(feedbackForm),
      })
    } catch {
      // still show success
    } finally {
      setFeedbackSent(true)
      setSubmitting(false)
    }
  }

  const closeModal = () => {
    setModalOpen(false)
    setFeedbackSent(false)
    setFeedbackForm({ name: '', email: '', message: '', rating: 5 })
  }

  return (
    <section id="reviews" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-teal-500 font-semibold text-sm uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-blue-900 mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={20} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-slate-600 font-semibold">4.9 / 5</span>
          </div>
          <p className="text-slate-400 text-sm">Based on 200+ verified reviews</p>
        </div>

        {/* Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="relative bg-slate-50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <Quote className="absolute top-5 right-5 text-teal-100" size={28} />

              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`w-11 h-11 rounded-full ${r.color} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="font-semibold text-blue-900 text-sm">{r.name}</div>
                  <div className="text-xs text-slate-400">{r.location}</div>
                </div>
              </div>

              <StarRow rating={r.rating} />
              <p className="text-slate-700 text-sm mt-3 leading-relaxed">"{r.text}"</p>

              <div className="mt-4 flex items-center justify-between">
                <span className="bg-teal-50 text-teal-600 text-xs font-semibold px-2.5 py-0.5 rounded-full">
                  {r.service}
                </span>
                <span className="text-xs text-slate-400">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-slate-50 rounded-3xl py-12 px-6">
          <h3 className="text-2xl font-bold text-blue-900 mb-2">Had a great experience?</h3>
          <p className="text-slate-500 mb-6">We'd love to hear from you. Your feedback helps us grow!</p>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-900 hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 hover:shadow-lg"
          >
            Send Us Your Feedback
          </button>
        </div>
      </div>

      {/* Feedback Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={(e) => e.target === e.currentTarget && closeModal()}
        >
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl">
            {feedbackSent ? (
              <div className="text-center py-6">
                <div className="text-5xl mb-4">🙏</div>
                <h3 className="text-2xl font-bold text-blue-900 mb-2">Thank You!</h3>
                <p className="text-slate-600 mb-6">Your feedback means the world to us.</p>
                <button
                  onClick={closeModal}
                  className="bg-teal-500 hover:bg-teal-400 text-white px-8 py-2.5 rounded-full font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-blue-900">Share Your Feedback</h3>
                  <button
                    onClick={closeModal}
                    className="text-slate-300 hover:text-slate-600 text-2xl leading-none transition-colors"
                  >
                    &times;
                  </button>
                </div>

                <form onSubmit={handleFeedback} className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Your Rating
                    </label>
                    <div className="flex gap-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setFeedbackForm((f) => ({ ...f, rating: star }))}
                          className="text-2xl transition-transform hover:scale-125"
                        >
                          {star <= feedbackForm.rating ? '⭐' : '☆'}
                        </button>
                      ))}
                    </div>
                  </div>

                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={feedbackForm.name}
                    onChange={(e) => setFeedbackForm((f) => ({ ...f, name: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-slate-800 text-sm"
                  />
                  <input
                    type="email"
                    placeholder="Email (optional)"
                    value={feedbackForm.email}
                    onChange={(e) => setFeedbackForm((f) => ({ ...f, email: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none text-slate-800 text-sm"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about your experience..."
                    value={feedbackForm.message}
                    onChange={(e) => setFeedbackForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100 outline-none resize-none text-slate-800 text-sm"
                  />
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-teal-500 hover:bg-teal-400 disabled:opacity-60 text-white font-bold py-3 rounded-xl transition-all"
                  >
                    {submitting ? 'Submitting...' : 'Submit Feedback'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  )
}
