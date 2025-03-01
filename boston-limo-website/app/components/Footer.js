import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <footer className="bg-black text-white py-8 font-lora text-sm">
      <div className="container mx-5 grid grid-cols-2 lg:grid-cols-4 gap-4 items-center sm:mx-auto">
        <div className='items-center justify-center flex flex-col col-span-2 lg:col-span-1'>
          <a href='/'><h1 className="text-2xl font-bold text-yellow-300 font-vibes">Boston Luxury Limo</h1></a>
        </div>
        <div className=''>
          <h2 className="font-semibold font-merriweather">Quick Links</h2>
          <ul className="">
            <li><a href="/about" className="hover:underline">About Us</a></li>
            <li><a href="/services" className="hover:underline">Services</a></li>
            <li><a href="/drivers" className="hover:underline">Our Drivers</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>
        <div className='mr-4'>
          <h2 className="font-semibold font-merriweather">Contact Us</h2>
          <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
          <p>Email: <a href="mailto:info@bostonluxurylimo.com" className="hover:underline">info@bostonluxurylimo.com</a></p>
        </div>
        <div className='items-center justify-center flex-col flex col-span-2 lg:col-span-1 space-y-1'>
          <h2 className='font-semibold font-merriweather'>Follow Us</h2>
          <ul className='flex flex-row justify-between space-x-3 text-xl '>
            <li className='hover:text-gray-300'><a><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
            <li className='hover:text-gray-300'><a><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></li>
            <li className='hover:text-gray-300'><a><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
          </ul>
        </div>
      </div>
    
      <div className="mt-8 text-center text-sm">
        <p>© 2025 Boston Luxury Limo | <a href="" className="hover:underline">Privacy Policy</a> | <a href="" className="hover:underline">Terms & Conditions</a></p>
      </div>
    </footer>
    )
}