import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import BookAppointment from './components/BookAppointment'
import StayConnected from './components/StayConnected'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyChooseUs />
      <Services />
      <BookAppointment />
      <StayConnected />
    </div>
  )
}

export default App
