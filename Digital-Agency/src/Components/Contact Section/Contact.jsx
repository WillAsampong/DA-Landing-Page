import customerSupportImg from '../../assets/customer-support.png';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="mt-6 flex flex-col md:flex-row-reverse bg-[#F6F6F6]  rounded-2xl  mb-16 mx-auto md:justify-evenly">
        <div className='flex flex-col gap-y-4 my-auto p-8 md:max-w-md basis-1/2'>
          <div className="contact-heading">
              <h2 className="capitalize text-center text-3xl font-bold md:text-left">Be a part of the next big thing</h2>
          </div>
          <div className=''>
              <p className="text-center md:text-left">We work with Brans, Startups, to SMEs. Colaborate for more impact and growth</p>
          </div>
          <div className="contact flex justify-center md:justify-start">
            <button className="uppercase bg-buttonColor p-2 text-white rounded-lg" onClick={() => navigate('contact-form')}>Contact us</button>
          </div>
        </div>
        <div className="contact-image hidden md:inline-block">
          <img src={customerSupportImg} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Contact
