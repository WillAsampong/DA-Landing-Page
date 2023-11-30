import { useState } from "react"
import { Link } from "react-router-dom";
import DesktopNav from "./DesktopNav";

const Navbar = () => {
    const [open, setOpen] = useState(false);

  return (
    <div className={`flex justify-between ${open ? 'items-start': 'items-center'} h-12 transition-all duration-1000 ${open ? 'h-screen': 'h-15'} sticky w-3/4 mx-auto`}>
      <div className="logo">
       <p className="font-bold text-xl capitalize md:uppercase"><Link to='/'>digital agency</Link></p>
      </div>

      {open && <div className="links absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
        <nav>
            <ul className="flex flex-col gap-y-8">
                <li className="text-4xl">
                  <Link to='/' onClick={() => setOpen(false)}>Home</Link>
                </li>
                <li className="text-4xl">
                  <Link to='/about'>About</Link>
                </li>
                <li className="text-4xl">
                  <Link to='/testimonials'>Testimonials</Link>
                </li>
                <li className="text-4xl">
                  <Link to='/contact-form' onClick={() => setOpen(false)}>Contact</Link>
                </li>
            </ul>
        </nav>
      </div>}

      <DesktopNav />

      <div className="md:hidden menu">
        <button onClick={() => setOpen(!open)}>
            {open ? (<svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M18 6L6 18M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>) : (
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            height="24"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="currentColor"
            />
          </svg>          
        )}  
        </button>
      </div>
    </div>
  )
}

export default Navbar
