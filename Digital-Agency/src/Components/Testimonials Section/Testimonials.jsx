import person1 from '../../assets/person1.png';
import person2 from '../../assets/person2.png';
import person3 from '../../assets/person3.png';

const Testimonials = () => {
  return (
    <div>
        <section className='mb-24 '>
            <div className="flex justify-center">
                <p className="uppercase">Testimonials</p>
            </div>
            <h2 className="font-bold text-3xl text-center">Read What Others Have To Say</h2>
            <div className="testimonials mt-14 flex flex-col gap-y-8 mx-auto md:flex-row md:gap-x-6">
                <div className="person-card bg-[#F6F6F6] rounded-2xl flex flex-col gap-y-4 justify-center items-center p-4">
                    <img src={person1} alt="" />
                    <div className="name">
                        <p className='capitalize'>Andrew Rathore</p>
                    </div>
                    <div className="testimonial">
                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. 
                        </p>
                    </div>
                </div>
                <div className="person-card bg-[#F6F6F6] rounded-2xl flex flex-col gap-y-4 justify-center items-center p-4">
                    <img src={person2} alt="" />
                    <div className="name">
                        <p className='capitalize'>Andrew Rathore</p>
                    </div>
                    <div className="testimonial">
                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. 
                        </p>
                    </div>
                </div>
                <div className="person-card bg-[#F6F6F6] rounded-2xl flex flex-col gap-y-4 justify-center items-center p-4">
                    <img src={person3} alt="" />
                    <div className="name">
                        <p className='capitalize'>Andrew Rathore</p>
                    </div>
                    <div className="testimonial">
                        <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. 
                        </p>
                    </div>
                </div>
            </div>
        </section>

    </div>
  )
}

export default Testimonials
