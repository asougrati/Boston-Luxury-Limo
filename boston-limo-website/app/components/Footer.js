import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
    return (
      <footer className="bg-black text-white py-8 font-lora text-sm">
        <div className='items-center justify-center flex'>
          <a href='/'><h1 className="text-3xl text-yellow-400 font-vibes">Boston Luxury Limo</h1></a>
        </div>
      <div className="mt-2 text-center text-sm">
        <p>© 2025 Boston Luxury Limo | <a href="" className="hover:underline">Privacy Policy</a> | <a href="" className="hover:underline">Terms & Conditions</a></p>
      </div>
    </footer>
    )
}