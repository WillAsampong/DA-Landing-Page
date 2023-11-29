import './App.css'
import Branding from './Components/Branding Section/Branding'
import Companies from './Components/Companies Section/Companies'
import Contact from './Components/Contact Section/Contact'
import Custome from './Components/Custome Section/Custome'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero Section/Hero'
import Navbar from './Components/Navbar/Navbar'
import Testimonials from './Components/Testimonials Section/Testimonials'

function App() {
  return (
    <>
      <div className='w-3/4 mx-auto'>
        
        <Navbar/>
        <Hero />
        <Companies />
        <Branding />
        <Custome />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App
