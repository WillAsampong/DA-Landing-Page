import './App.css'
import Branding from './Components/Branding Section/Branding'
import Companies from './Components/Companies Section/Companies'
import Custome from './Components/Custome Section/Custome'
import Hero from './Components/Hero Section/Hero'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div className='container mx-auto bg-[#FDFCFC]'>
      <Navbar/>
      <Hero />
      <Companies />
      <Branding />
      <Custome />
    </div>
  )
}

export default App
