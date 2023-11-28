import businessPeopleImage from '../../assets/business-people-discussing-business-idea.jpg';


const Hero = () => {
  return (
    <section className="flex flex-col mx-auto justify-center mt-12 mb-20 md:flex-row">
        <div className="hero-text flex flex-col gap-y-6 my-auto basis-1/2 md:gap-x-4">
            <h1 className="text-4xl font-bold text-center md:text-left">Building Products, Brands & Experience</h1>
            <div className="">
                <p className="text-lg text-center md:text-left">Digital Agency is your online team mangement tool that easy and prompt</p>
            </div>
            <div className="contact flex justify-center md:justify-start">
                <button className="uppercase bg-buttonColor p-2 text-white rounded-lg">Contact us</button>
            </div>
        </div>
        <div className="hero-img flex justify-center mt-8">
            <img src={businessPeopleImage} alt="" />
        </div>
    </section>
  )
}

export default Hero
