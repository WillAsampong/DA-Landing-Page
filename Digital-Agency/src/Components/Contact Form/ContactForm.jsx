import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { useState } from 'react';


const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <div className="h-screen bg-[#F1F1F1] flex items-center justify-center">
        <div className="container border-2 flex flex-col-reverse md:flex-row md:h-[550px] md:w-[1100px]">
            <div className="contact-info md:w-1/3  bg-buttonColor">
                <h2 className=" text-2xl text-center p-4 font-medium mb-8">Contact Info</h2>
                <ul className='flex flex-col gap-y-12 p-6'>
                    <li className='flex gap-x-8'>
                        <span>
                            <FontAwesomeIcon icon={faLocationDot} className='text-3xl'/> 
                        </span>
                        <span>
                            2912 Meadowbrook Road<br/>
                            Los Angeles, CA<br />
                            90017
                        </span>
                    </li>
                    <li className='flex gap-x-8'>
                        <span>
                            <FontAwesomeIcon icon={faEnvelopeOpen} className='text-3xl'/>
                        </span>
                        <span>lorem@ipsum.com</span>
                    </li>
                    <li className='flex gap-x-8'>
                        <span>
                            <FontAwesomeIcon icon={faPhone} className='text-3xl'/>
                        </span>
                        <span>310-286-1623</span>
                    </li>
                    <div className="socials">
                        
                    </div>
                </ul>
            </div>
            <div className="contact-form md:w-2/3 bg-white">
                <h2 className="text-2xl p-4 font-medium">Send A Message</h2>
                <form className=''>
                    <div className="name-input flex justify-evenly">
                        <Input type='text' label='First Name' value={name} onChange={handleChange}/>
                        <Input type='text' label='Last Name' value={name} onChange={handleChange}/>
                    </div>
                    <div className="emai-phone-input flex justify-evenly">
                        <Input type='email' label='Email' value={email} onChange={handleEmailChange}/>
                        <Input type='text' label='Phone Number' value={name} onChange={handleChange}/>
                    </div>
                    <div className="message flex justify-center">
                        <textarea name="Message..." id="" cols="50" rows="5" className='border-b-2 w-full'></textarea>
                    </div>
                    <div className="submit ml-8 mt-4 mb-6">
                        <button type="submit" className='px-4 py-3 bg-buttonColor text-white'>
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
