import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Main Page/Home';
import ContactForm from './Components/Contact Form/ContactForm';
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/contact-form' Component={ContactForm}></Route>
      </Routes>
    <Footer />
    </>
  )
}

export default App
