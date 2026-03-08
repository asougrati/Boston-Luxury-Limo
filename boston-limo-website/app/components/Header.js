import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header({onScrollToSection}) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => 
        setIsMenuOpen(!isMenuOpen);

    return (
    <header className="sticky top-0 z-50">
        <div className="flex flex-row justify-between px-2 bg-black items-center md:px-8">
          <a className="md:text-4xl text-2xl p-4 text-yellow-400 font-vibes w-3/4 md:w-1/2" href='.'>Boston Luxury Limo</a>
          <button className="flex p-2 lg:hidden justify-end w-1/4 md:w-1/2" onClick={toggleMenu}>
            <FontAwesomeIcon icon={faBars} className='text-white hover:text-gray-400 p-2 text-xl'/>
          </button>
          <nav className={`flex py-5 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className={`flex justify-between items-center flex-col bg-white w-full absolute top-full left-0 lg:flex-row lg:bg-black text-sm font-lora font-bold text-black lg:text-white lg:items-center lg:h-full lg:static`}>
                <li className="border-b-2 md:border-b-0">
                  <button onClick={() => {onScrollToSection("about"); toggleMenu();}} className="p-4 hover:text-gray-400">About Us</button>
                  </li>
                <li className="border-b-2 lg:border-b-0">
                  <button onClick={() => {onScrollToSection("services"); toggleMenu()}} className="p-4 hover:text-gray-400">Services</button>
                  </li>
                <li className="lg:mb-0">
                  <button onClick={() => {onScrollToSection("contact"); toggleMenu()}}className="p-4 hover:text-gray-400">Contact</button>
                  </li>
                <li className="hidden lg:block">
                  <button onClick={() => onScrollToSection("contact")} className="bg-yellow-300 rounded-full text-black p-5 mx-5 font-lora font-semibold hover:bg-yellow-400">Book Now</button>
                  </li>
            </ul>
          </nav>
        </div>
      </header>)

      // const MenuMobile = React.forwardRef((props, ref) => {
      //   const {getImageURL} = props;
      
      //     return ()

      // const MenuDesktop = React.forwardRef((props, ref) => {
      //   const {getImageURL} = props;
      
      //     return ()
}