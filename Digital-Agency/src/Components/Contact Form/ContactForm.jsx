

const ContactForm = () => {
  return (
    <div className="h-screen bg-[#F1F1F1] flex items-center justify-center">
      <div className="container border-2 flex h-[550px] w-[1100px]">
            <div className="contact-info w-1/3  bg-buttonColor">
                <h2 className="text-white text-3xl text-center p-4 font-medium">Contact Info</h2>
                <ul>
                    <li>
                        <span></span>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                    </li>
                    <li>
                        <span></span>
                        <span></span>
                    </li>
                </ul>
            </div>
            <div className="contact-form w-2/3 bg-white">
                <h2 className="text-3xl p-4 font-medium">Send A Message</h2>
            </div>
        </div>
    </div>
  )
}

export default ContactForm
