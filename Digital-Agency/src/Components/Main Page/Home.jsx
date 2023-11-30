import Branding from '../Branding Section/Branding'
import Companies from '../Companies Section/Companies'
import Contact from '../Contact Section/Contact'
import Custome from '../Custome Section/Custome'
import Hero from '../Hero Section/Hero'
import Testimonials from '../Testimonials Section/Testimonials'

const Home = () => {
  return (
    <div>
      <div className='w-3/4 mx-auto'>
        <Hero />
        <Companies />
        <Branding />
        <Custome />
        <Testimonials />
        <Contact />
      </div>
    </div>
  )
}

export default Home
