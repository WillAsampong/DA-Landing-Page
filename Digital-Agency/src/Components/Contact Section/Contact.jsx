import customerSupportImg from '../../assets/customer-support.png';

const Contact = () => {
  return (
    <div>
      <section className="mt-6 flex flex-col md:flex-row-reverse bg-[#F6F6F6] md:gap-x-2 rounded-2xl p-8 mb-16 mx-auto">
        <div className='flex flex-col gap-y-6 basis-1/2 my-auto'>
          <div className="contact-heading">
              <h2 className="capitalize text-center text-3xl font-bold md:text-left">Be a part of the next big thing</h2>
          </div>
          <div className=''>
              <p className="text-center md:text-left">We work with Brans, Startups, to SMEs. Colaborate for more impact and growth</p>
          </div>
          <div className="contact flex justify-center md:justify-start">
            <button className="uppercase bg-buttonColor p-2 text-white rounded-lg">Contact us</button>
          </div>
        </div>
        <div className="contact-image hidden md:block">
          <img src={customerSupportImg} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Contact
