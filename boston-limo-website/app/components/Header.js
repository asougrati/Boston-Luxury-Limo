import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => 
        setIsMenuOpen(!isMenuOpen);

    return (
    <header className="sticky top-0 z-50">
        <div className="flex justify-between py-5 px-10 bg-black">
          <a className="text-4xl p-4 text-yellow-400 font-vibes items" href='.'>Boston Luxury Limo</a>
          <button className=" lg:hidden absolute right-10 top-10" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-white hover:text-gray-400 p-2'/>
          </button>
          <nav className={`flex space-x-3 py-5 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className={`flex justify-between items-center flex-col bg-white w-full  p-10 absolute top-full left-0 lg:flex-row lg:bg-black text-sm font-lora font-bold text-black lg:text-white lg:items-center lg:h-full lg:static lg:p-0`}>
                <li className="p-2 lg:p-0 border-b-2 lg:border-b-0"><a href='/about' className="p-5 hover:text-gray-400">About Us</a></li>
                <li className="p-2 border-b-2 lg:border-b-0"><a href='/services' className="p-5 hover:text-gray-400">Services</a></li>
                <li className="p-2 border-b-2 lg:border-b-0"><a href='/drivers' className="p-5 hover:text-gray-400">Our Drivers</a></li>
                <li className="p-2 lg:mb-0"><a href='/contact'className="p-5 hover:text-gray-400">Contact</a></li>
                <li className="hidden lg:block"> <a href='/contact' className = "bg-yellow-300 rounded-full text-black p-5 font-lora font-semibold hover:bg-yellow-400">Book Now</a></li>
            </ul>
          </nav>
        </div>
      </header>)
}