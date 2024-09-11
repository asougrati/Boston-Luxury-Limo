
"use client"
import '@fortawesome/fontawesome-svg-core/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'





export default function Home() {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 420;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 420;
  }
  return (
    <main className="bg-white">
      <header className="sticky top-0">
        <div className="flex justify-between py-5 px-10 bg-black">
          <button className="col-span-5 text-4xl p-2 text-yellow-400 font-vibes" href='.'>Boston Luxury Limo</button>
          <div className="flex justify-between space-x-3">
            <button className="p-2 text-sm font-lora font-semibold hover:text-gray-400">About Us</button>
            <button className="p-2 text-sm font-lora font-bold hover:text-gray-400">Services</button>
            <button className="p-2 text-sm font-lora font-bold hover:text-gray-400">Our Drivers</button>
            <button className="p-2 pr-5 text-sm font-lora font-bold hover:text-gray-400">Contact</button>
            <button className = "bg-yellow-300 rounded-full text-black px-5 font-lora font-semibold hover:bg-yellow-400">Book Now</button>
          </div>
        </div>
      </header>
        <section className="relative max-h-screen">
          <img className='size-full'src='/images/2020-cadillac-escalade-001-1567021710.jpg'></img>
          <div className="absolute inset-0 mt-28 flex flex-col items-center justify-center space-y-9">
            <p className="text-white text-6xl font-extrabold font-lora">The Ultimate Ride Experience.</p>
            <p className="text-white text-lg text-center font-lora w-1/3">
            Our vehicles offer unparalleled luxury, ensuring your journey is as remarkable as your destination. From prompt airport pickups to luxurious drop-offs, experience travel at its finest.
            </p>
            <button className = "bg-yellow-300 rounded-full text-black py-3 px-9 font-lora text-lg font-semibold hover:bg-yellow-400">Book Now</button>
          </div>
        </section>
      <section className='m-20 flex flex-col justify-between max-h-full space-y-5 w-1/2 text-black'>
        <div className='flex '>
          <h2 className='text-3xl '><span className='font-merriweather'>Why Choose </span> <span className='font-merriweather text-yellow-400 text-3xl'>Boston Luxury Limo?</span></h2>
        </div>
        <p className='font-lora pb-5'>At Boston Luxury Limo, we believe that luxury is more than just a ride—it’s an experience. 
            As a small, family-owned business, we take pride in offering a level of personalized service that larger companies simply can't match. 
            Here’s what sets us apart:</p>
        <div className='flex flex-col justify-between space-y-5 font-lora'>
          <p><span className='font-merriweather'>Personalized Service: </span>
              At Boston Luxury Limo, we believe in building relationships with our clients. 
              We are dedicated to making you feel at home, with warm, friendly service that you can rely on every time.</p>
          <p><span className='font-merriweather'>Local Expertise: </span>
              With deep roots in the Boston area, we know the ins and outs of the city like no one else. 
              Whether you need a quick route or a scenic drive, our local knowledge ensures a seamless journey.</p>
          <p><span className='font-merriweather'>Integrity and Trust: </span>
              Our reputation is built on honesty and transparency. 
              You’ll never encounter hidden fees or unexpected surprises—just straightforward, dependable service from a team that cares.</p>
        </div>
      </section>
      <section className='m-20 flex flex-col justify-between max-h-full space-y-5 text-black'>
        <h2 className='text-3xl font-merriweather'>How Can We Help?</h2>
        <p className='font-lora pb-5'>At Boston Luxury Limo, we understand the value of comfort, reliability, and personalized service. Whether you’re looking for:</p>
        <div className='flex flex-row items-center justify-center font-lora w-full space-x-10 pb-5'>
          <div className=''>
            <button className='text-3xl opacity-50 hover:opacity-100' onClick={slideLeft}><FontAwesomeIcon icon={faChevronLeft} /></button>
          </div>
          <div id='slider' className='w-full h-full flex flex-row items-center overflow-x-scroll scroll scroll-smooth scrollbar-hide'>
            <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
              <img src='/images/airplane.jpg' className='w-52 h-52 object-cover rounded-2xl'></img>
              <p className='whitespace-normal'><span className='font-merriweather'>Airport Transfers<br/></span> Experience effortless travel with our premium airport transfers. Our exceptional service guarantees a smooth, comfortable journey, ensuring you arrive refreshed and on time.</p>
            </div>
            <div className="border-l-2 h-12 mx-4"></div>
            <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
            <img src='/images/clarendon.jpg' className='w-52 h-52 object-cover rounded-2xl'></img>
              <p className='whitespace-normal'><span className='font-merriweather'>Corporate Travel<br/></span> Travel in luxury and style with Boston Luxury Limo. Our premium SUVs and impeccable service ensure a professional and comfortable ride for all your business needs.</p>
            </div>
            <div className="border-l-2 h-12 mx-4"></div>
            <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
              <img src='/images/garden.jpg' className='w-52 h-52 object-cover rounded-2xl'></img>
              <p className='whitespace-normal'><span className='font-merriweather'>Special Events<br/></span> Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more.</p>
            </div>
            <div className="border-l-2 h-12 mx-4"></div>
            <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
              <img src='/images/garden.jpg' className='w-52 h-52 object-cover rounded-2xl'></img>
              <p className='whitespace-normal'><span className='font-merriweather'>Special Events<br/></span> Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more.</p>
            </div>
            <div className="border-l-2 h-12 mx-4"></div>
            <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
              <img src='/images/garden.jpg' className='w-52 h-52 object-cover rounded-2xl'></img>
              <p className='whitespace-normal'><span className='font-merriweather'>Special Events<br/></span> Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more.</p>
            </div>
          </div>
          <div className=''>
          <button className='text-3xl opacity-50 hover:opacity-100' onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        </div>
        <p className='font-lora'>Our drivers are ready to serve you with the highest level of care and professionalism. 
        Discover more about our services and how we can make your travel experience exceptional.</p>
        <div className='flex justify-center items-center w-full'>
          <button className = "bg-yellow-300 rounded-full text-black py-3 px-9 font-lora text-lg font-semibold hover:bg-yellow-400 w-1/5">Services</button>
        </div>
      </section>
     <footer className="bg-black flex justify-center space-x-10 p-5 px-20 py-10">
      <p className="col-span-5 text-4xl p-2 text-yellow-400 font-vibes" href='.'>Boston Luxury Limo</p>
      <div className="flex flex-col justify-between text-xs items-center">
        <p className="text-sm font-bold">Email</p>
        <button className='hover:text-gray-400'>BosLuxLimo@gmail.com</button>
      </div>
      <div className="flex flex-col justify-between text-xs items-center">
        <p className="text-sm font-bold">Phone</p>
        <button className='hover:text-gray-400'>(781) 690-2905</button>
      </div>
      <div className="flex flex-col justify-between text-xs items-center">
        <p className="text-sm font-bold">Follow Us</p>
        <div className='flex flex-row justify-between text-lg '>          
          <button><FontAwesomeIcon icon={faInstagram} className='text-yellow-400 hover:text-yellow-500 p-2'/></button>
          <button><FontAwesomeIcon icon={faFacebook} className='text-yellow-400 hover:text-yellow-500 p-2'/></button>
          <button><FontAwesomeIcon icon={faWhatsapp} className='text-yellow-400 hover:text-yellow-500 p-2'/></button>
      </div>
      </div>     
     </footer>
    </main>
  );
}
