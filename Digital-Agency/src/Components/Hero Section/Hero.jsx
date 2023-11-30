import businessPeopleImage from '../../assets/business-people-discussing-business-idea.jpg';
import { useNavigate } from 'react-router-dom';


const Hero = () => {
    const navigate = useNavigate();
  return (
    <section className="flex flex-col justify-center md:justify-start mt-12 mb-20 md:flex-row md:justify-between">
        <div className="hero-text flex flex-col gap-y-8 mb-8 md:my-auto md:max-w-md">
            <h1 className="text-4xl font-bold text-center md:text-left">Building Products, Brands & Experience</h1>
            <div className="">
                <p className="text-lg text-center md:text-left">Digital Agency is your online team mangement tool that easy and prompt</p>
            </div>
            <div className="contact flex justify-center md:justify-start">
                <button className="uppercase bg-buttonColor p-2 text-white rounded-lg" onClick={() => navigate('contact-form')}>Contact us</button>
            </div>
        </div>
        <div className="hero-img flex justify-center basis-1/2">
            <img src={businessPeopleImage} alt="" />
        </div>
    </section>
  )
}

export default Hero
