import businessPeopleImage from '../../assets/business-people-discussing-business-idea.jpg';


const Hero = () => {
  return (
    <section className="flex flex-col mx-auto justify-center border-2 mt-12 mb-20">
        <div className="hero-text flex flex-col gap-y-6">
            <h1 className="text-4xl font-bold text-center">Building Products, Brands & Experience</h1>
            <div className="">
                <p className="text-lg text-center">Digital Agency is your online team mangement tool that easy and prompt</p>
            </div>
            <div className="contact flex justify-center">
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
