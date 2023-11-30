import { Link } from "react-router-dom";

const DesktopNav = () => {
    return (
      <div className="">
        <nav>
            <ul className="hidden md:flex items-center gap-x-8 ">
                <li className="text-xl hover:text-fontColor1">
                  <Link to='/'>Home</Link>
                </li>
                <li className="text-xl hover:text-fontColor1">
                  <Link to='/about'>About</Link>
                </li>
                <li className="text-xl hover:text-fontColor1">
                  <Link to='/testimonials'>Testimonials</Link>
                </li>
                <li className="text-xl hover:text-fontColor1">
                  <Link to='/contact-form'>Contact</Link>
                </li>
            </ul>
        </nav>
      </div>
    );
  };

export default DesktopNav
