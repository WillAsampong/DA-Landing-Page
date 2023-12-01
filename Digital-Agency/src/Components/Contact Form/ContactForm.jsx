import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import Input from './Input';
import { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";


const ContactForm = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }
    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

  return (
    <div className="h-screen bg-[#F1F1F1] flex items-center justify-center">
        <div className="container flex flex-col-reverse md:flex-row md:h-[550px] md:w-[1100px]">
            <div className="contact-info md:w-1/3  bg-buttonColor flex flex-col justify-evenly">
                <div className=''>
                    <h2 className=" text-2xl font-medium text-white px-6">Contact Info</h2>
                    <ul className='flex flex-col gap-y-8 p-6'>
                        <li className='flex gap-x-8'>
                            <span>
                                <FontAwesomeIcon icon={faLocationDot} className='text-3xl text-white'/> 
                            </span>
                            <span className='text-white'>
                                2912 Meadowbrook Road<br/>
                                Los Angeles, CA<br />
                                90017
                            </span>
                        </li>
                        <li className='flex gap-x-8'>
                            <span>
                                <FontAwesomeIcon icon={faEnvelopeOpen} className='text-3xl text-white'/>
                            </span>
                            <span className='text-white'>lorem@ipsum.com</span>
                        </li>
                        <li className='flex gap-x-8'>
                            <span>
                                <FontAwesomeIcon icon={faPhone} className='text-3xl text-white'/>
                            </span>
                            <span className='text-white'>310-286-1623</span>
                        </li>
                    </ul>
                </div>
                <div className="socials flex gap-x-4 p-6">
                    <FaFacebookF className='text-white text-2xl'/>
                    <FaInstagram className='text-white text-2xl'/> 
                    <FaTwitter className='text-white text-2xl'/>
                    <FaLinkedinIn className='text-white text-2xl'/>
                    <FaPinterestP className='text-white text-2xl'/>
                </div>
            </div>
            <div className="contact-form md:w-2/3 bg-white">
                <h2 className="text-2xl p-4 font-medium">Send A Message</h2>
                <form className=''>
                    <div className="name-input flex justify-evenly">
                        <Input type='text' label='First Name' value={firstName} onChange={handleFirstNameChange}/>
                        <Input type='text' label='Last Name' value={lastName} onChange={handleLastNameChange}/>
                    </div>
                    <div className="emai-phone-input flex justify-evenly">
                        <Input type='email' label='Email' value={email} onChange={handleEmailChange}/>
                        <Input type='text' label='Phone Number' value={phone} onChange={handlePhoneNumberChange}/>
                    </div>
                    <div className="message flex justify-center">
                        <textarea name="Message..." id="" cols="50" rows="5" className='border-b-2 '></textarea>
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
