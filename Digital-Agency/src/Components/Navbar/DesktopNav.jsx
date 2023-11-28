

const DesktopNav = () => {
    return (
      <div className="">
        <nav>
            <ul className="hidden md:flex items-center gap-x-8 ">
                <li className="text-xl hover:text-fontColor1"><a href="#">Home</a></li>
                <li className="text-xl hover:text-fontColor1"><a href="#">About</a></li>
                <li className="text-xl hover:text-fontColor1"><a href="#">Testimonials</a></li>
                <li className="text-xl hover:text-fontColor1"><a href="#">Contact</a></li>
            </ul>
        </nav>
      </div>
    );
  };

export default DesktopNav
