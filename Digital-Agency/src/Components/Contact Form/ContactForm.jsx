import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { useState } from 'react';


const ContactForm = () => {
    const [name, setName] = useState('');

    const handleChange = (e) => {
        setName(e.target.value)
    }
  return (
    <div className="h-screen bg-[#F1F1F1] flex items-center justify-center">
        <div className="container border-2 flex flex-col-reverse md:flex-row md:h-[550px] md:w-[1100px]">
            <div className="contact-info md:w-1/3  bg-buttonColor">
                <h2 className="text-white text-3xl text-center p-4 font-medium mb-8">Contact Info</h2>
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
                <h2 className="text-3xl p-4 font-medium">Send A Message</h2>
                <form className=''>
                    <Input type='text' label='Name' value={name} onChange={handleChange}/>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
