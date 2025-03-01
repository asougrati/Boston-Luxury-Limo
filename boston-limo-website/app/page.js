"use client"

import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Header from './components/Header';
import Footer from './components/Footer';
import {BookNow} from './components/BookNow'

function getImageURL(thing) { 
  return ("/images/" + thing + ".jpg" ?? "")
}

function Card({
  imageID,
  name,
  description,
  socials
}) {
  let contents = <div className='flex flex-col space-y-10 px-10 py-7 items-center min-w-96'>
                    <img src={getImageURL(imageID)} className='w-52 h-52 object-cover rounded-2xl'></img>
                    <p className='whitespace-normal'><span className='font-merriweather'>{name}</span><br/>
                    {description}</p>
                  </div>
  if (socials.length != 0) {
    contents =  <div className='flex flex-row space-x-10 px-7 py-10 items-center drop-shadow-2xl'>
                  <img src={getImageURL(imageID)} className='w-52 h-52 object-cover rounded-full p-6'></img>
                  <div className='space-y-5'>
                    <h3 className='font-merriweather'>{name}</h3>
                    <p>{description}</p>
                  </div>
                </div>
  }
  return (
   contents
  )
}

export default function Home() {

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 448;
  }

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 448;
  }
  return (
    <div className="bg-white">
      <Header/>
        <section className=" relative max-h-screen">
          <img className=' size-full'src='/images/2020-cadillac-escalade-001-1567021710.jpg' id='img'/>
          <div className="absolute inset-0 top-0 flex flex-col items-center justify-center space-y-9" >
          <p id='scalable-text' className="lg:text-6xl md:text-4xl text-2xl text-white font-extrabold font-lora">
  The Ultimate Ride Experience.
</p>
            <p className="text-white lg:text-lg  md:text-sm text-xs text-center font-lora lg:w-1/3 md:w-1/2 w-2/3">
            Our vehicles offer unparalleled luxury, ensuring your journey is as remarkable as your destination. From prompt airport pickups to luxurious drop-offs, experience travel at its finest.
            </p>
            <BookNow/>
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
        <div className=''>

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
            <Card
              imageID='airplane'
              name='Airport Transfers'
              description='Experience effortless travel with our premium airport transfers. Our exceptional service guarantees a smooth, comfortable journey, ensuring you arrive refreshed and on time.'
              socials={[]}/>
            <div className="border-l-2 h-12 mx-4"></div>
            <Card
              imageID="clarendon"
              name="Corporate Travel"
              description="Travel in luxury and style with Boston Luxury Limo. Our premium SUVs and impeccable service ensure a professional and comfortable ride for all your business needs."
              socials={[]}/>
            <div className="border-l-2 h-12 mx-4"></div>
            <Card
              imageID="garden"
              name="Special Events"
              description="Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more."
              socials={[]}/>
            <div className="border-l-2 h-12 mx-4"></div>
            <Card
              imageID="garden"
              name="Special Events"
              description="Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more."
              socials={[]}/>
            <div className="border-l-2 h-12 mx-4"></div>
            <Card
              imageID="garden"
              name="Special Events"
              description="Enhance your special occasions with Boston Luxury Limo. Our elegant SUVs and personalized service add a touch of luxury to weddings, parties, and more."
              socials={[]}/>
          </div>
          <div className=''>
          <button className='text-3xl opacity-50 hover:opacity-100' onClick={slideRight}><FontAwesomeIcon icon={faChevronRight} /></button>
          </div>
        </div>
        
        <div className='flex flex-col space-y-12 justify-center items-center w-full'>
          <p className='font-lora'>Our drivers are ready to serve you with the highest level of care and professionalism. 
          Discover more about our services and how we can make your travel experience exceptional.</p>
          <a href='/services'><button className = "bg-yellow-300 rounded-full text-black py-3 px-12 font-lora text-lg font-semibold hover:bg-yellow-400">Services</button></a>
        </div>
      </section>

      <section className='text-black'>
        <h2 className=''>Our Drivers</h2>
        <p className=''>Our drivers are great!!! (Somthing like that)</p>
        <div className='mx-5 grid grid-cols-2 grid-rows-2 gap-10'>
        <div className=''>
          <Card
          imageID=""
          name="Azzeddine Khemmich"
          description="Some really nice stuff about Khalu Azzeddine, maybe something about his work, his hobbies, and why he got into the business. Also his status in the company."
          socials={["Put socials later"]}
          />
        </div>
        <div className=''>
          <Card
          imageID=""
          name="Boujema (Ben) Khemmich"
          description="Some really nice stuff about Khalu Boujema, maybe something about his work, his hobbies, and why he got into the business. Also his status in the company."
          socials={["Put socials later"]}
          />
        </div>
        </div>
      </section>
     <Footer></Footer>
    </div>
  );
}
