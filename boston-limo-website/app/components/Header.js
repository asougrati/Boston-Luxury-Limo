import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({onScrollToSection}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => 
        setIsMenuOpen(!isMenuOpen);

    return (
    <header className="sticky top-0 z-50">
        <div className="flex flex-row justify-between px-10 bg-black items-center">
          <a className="text-4xl p-4 text-yellow-400 font-vibes" href='.'>Boston Luxury Limo</a>
          <button className=" lg:hidden absolute right-10 top-10" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-white hover:text-gray-400 p-2'/>
          </button>
          <nav className={`flex space-x-3 py-5 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className={`flex justify-between items-center flex-col bg-white w-full  p-10 absolute top-full left-0 lg:flex-row lg:bg-black text-sm font-lora font-bold text-black lg:text-white lg:items-center lg:h-full lg:static lg:p-0`}>
                <li className="p-2 lg:p-0 border-b-2 lg:border-b-0">
                  <button onClick={() => onScrollToSection("about")} className="p-5 hover:text-gray-400">About Us</button>
                  </li>
                <li className="p-2 border-b-2 lg:border-b-0">
                  <button onClick={() => onScrollToSection("services")} className="p-5 hover:text-gray-400">Services</button>
                  </li>
                <li className="p-2 border-b-2 lg:border-b-0">
                  <button onClick={() => onScrollToSection("fleet")} className="p-5 hover:text-gray-400">Fleet</button>
                  </li>
                <li className="p-2 lg:mb-0">
                  <button onClick={() => onScrollToSection("contact")}className="p-5 hover:text-gray-400">Contact</button>
                  </li>
                <li className="hidden lg:block">
                  <button onClick={() => onScrollToSection("contact")} className="bg-yellow-300 rounded-full text-black p-5 font-lora font-semibold hover:bg-yellow-400">Book Now</button>
                  </li>
            </ul>
          </nav>
        </div>
      </header>)
}