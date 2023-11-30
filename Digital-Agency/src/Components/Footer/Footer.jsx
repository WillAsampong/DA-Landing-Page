

const Footer = () => {
  return (
    <div>
        <footer className="bg-[#F6F6F6]">
            <div className=" p-12 flex flex-col md:flex-row justify-center md:justify-evenly gap-y-16">
                <div className="text-center md:text-left">
                    <h5 className="text-lg font-bold pb-4">Digital Agency</h5>
                    <p className="">Building digital products,<br/> brands & experience</p>
                </div>
                <div className="footer-resources">
                    <h5 className="text-lg font-bold text-center mb-8 md:text-left">Resources</h5>
                    <ul className="flex flex-col justify-center items-center md:items-start gap-y-4">
                        <li><a href="#">Guides</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Customer Stories</a></li>
                        <li><a href="#">GLossery</a></li>
                    </ul>
                </div>
                <div className="footer-company">
                    <h5 className="text-lg font-bold text-center mb-8 md:text-left">Company</h5>
                    <ul className="flex flex-col justify-center items-center md:items-start gap-y-4">
                        <li><a href="#">About Us</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Patners</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>
                <div className="footer-socials">
                    <h5 className="text-lg font-bold text-center mb-8 md:text-left">Social Media</h5>
                    <ul className="flex flex-col justify-center items-center md:items-start  gap-y-4">
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="copyright text-center mt-10">
                <p>© Matheus. Todos os direitos reservados</p>
            </div>
        </footer>
    </div>
  )
}

export default Footer
