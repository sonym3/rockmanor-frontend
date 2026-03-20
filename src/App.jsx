import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import BookAppointment from './components/BookAppointment'
import Reviews from './components/Reviews'
import ProfessionalServices from './components/ProfessionalServices'
import StayConnected from './components/StayConnected'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <BookAppointment />
      <Reviews />
      <ProfessionalServices />
      <StayConnected />
    </div>
  )
}

export default App
