import './App.css'

import Choose from "./components/Choose"
import Faq from './components/Faq'
import Footer from "./components/Footer";
import Hero from "./components/Hero"
import Ready from "./components/Ready";
import SocialProof from "./components/SocialProof"
import Testimonial from "./components/Testimonial"

export default function App() {

  return (
    <section className='wrapper'>
      <Hero />
      <SocialProof />
      <Choose />
      <Testimonial />
      <Faq/>
      <Ready/>
      <Footer />
    </section>
  )
}


