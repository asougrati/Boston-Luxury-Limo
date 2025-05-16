"use client"

import React, { useRef } from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faHandshake, faUserGear, faLandmark} from '@fortawesome/free-solid-svg-icons'
import Header from './components/Header';
import Footer from './components/Footer';
import {BookNow} from './components/BookNow'
import {ContactForm} from './components/ContactForm'
import { ServicesHomeDesktop, ServicesHomeMobile } from './components/ServicesHome';

function getImageURL(thing) { 
  return ("/images/" + thing + ".jpg" ?? "")
}

export default function Home() {
  const aboutSectionRef = useRef(null);
  const servicesSectionRef = useRef(null);
  const fleetSectionRef = useRef(null);
  const contactSectionRef = useRef(null);


  const handleScroll = (section) => {
    switch (section) {
      case 'about':
        aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'services':
        servicesSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'fleet':
        fleetSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      case 'contact':
        contactSectionRef.current.scrollIntoView({ behavior: 'smooth' });
        break;
      default:
        break;
    }
  }

  return (
    <div className="bg-white">
      <Header 
      onScrollToSection={handleScroll} />
      <section className=" relative max-h-screen">
          <img className='md:size-full'src='/images/2020-cadillac-escalade-001-1567021710.jpg' id='img'/>
          <div className="absolute inset-0 top-0 flex flex-col items-center justify-center space-y-9" >
          <p id='scalable-text' className="lg:text-6xl md:text-4xl text-md text-white font-extrabold font-lora">
            The Ultimate Ride Experience.
          </p>
            <p className="text-white lg:text-lg  md:text-sm text-xs text-center font-lora lg:w-1/3 md:w-1/2 w-2/3">
            Our vehicles offer unparalleled luxury, ensuring your journey is as remarkable as your destination. From prompt airport pickups to luxurious drop-offs, experience travel at its finest.
            </p>
            <BookNow/>
          </div>
        </section>
      <section className='flex flex-col justify-between max-h-full space-y-5 text-black md:p-20 p-10 items-center scroll-mt-32' ref={aboutSectionRef}>
        <div className='flex flex-row space-x-4 w-full justify-center'>
          <div className='bg-gray-400 h-px w-[10%] self-center'/>
          <h2 className='text-3xl self-center text-center'><span className='font-serif'>Why Choose </span> 
          <span className='text-yellow-400 font-vibes text-4xl'>Boston Luxury Limo</span></h2>
          <div className='bg-gray-400 h-px w-[10%] self-center'/>
        </div>
        <p className='font-lora pb-5'>At Boston Luxury Limo, we believe that luxury is more than just a ride—it’s an experience. 
            As a small, family-owned business, we take pride in offering a level of personalized service that larger companies simply can't match. 
            Here’s what sets us apart:</p>
        <div className='flex flex-col md:flex-row justify-between md:space-x-20 font-lora md:w-4/5 w-full'>
          <div className='flex flex-col items-center p-5 shadow-xl space-y-3'>
            <icon className="bg-yellow-100 p-10 px-8 rounded-full mb-5"><FontAwesomeIcon icon={faUserGear} className='text-yellow-400 text-6xl'/></icon>
            <h2 className='font-serif text-xl text-center'>Personalized Service</h2>
            <p className='text-center'>At Boston Luxury Limo, we believe in building relationships with our clients. 
                We are dedicated to making you feel at home, with warm, friendly service that you can rely on every time.</p>
          </div>
          <div className='flex flex-col items-center p-5 shadow-xl space-y-3'>
            <icon className="bg-yellow-100 p-10 rounded-full mb-5"><FontAwesomeIcon icon={faLandmark} className='text-yellow-400 text-6xl'/></icon>
            <h2 className='font-serif text-xl'>Local Expertise</h2>
            <p className='text-center'>At Boston Luxury Limo, we believe in building relationships with our clients. 
                We are dedicated to making you feel at home, with warm, friendly service that you can rely on every time.</p>
          </div>
          <div className='flex flex-col items-center p-5 shadow-xl space-y-3'>
            <icon className="bg-yellow-100 p-10 px-8 rounded-full mb-5"><FontAwesomeIcon icon={faHandshake} className='text-yellow-400 text-6xl'/></icon>
            <h2 className='font-serif text-xl'>Integrity and Trust</h2>
            <p className='text-center'>Our reputation is built on honesty and transparency. 
              You’ll never encounter hidden fees or unexpected surprises—just straightforward, dependable service from a team that cares.</p>
          </div>
        </div>
        <div className=''>
        </div>
      </section>
      <div className='block md:hidden'>
        <ServicesHomeMobile ref={servicesSectionRef}/>
      </div>
      <div className='hidden md:block'>
        <ServicesHomeDesktop ref={servicesSectionRef}/>
      </div>
      <section className='flex justify-center px-10 font-lora scroll-mt-32' ref={fleetSectionRef}>
        
        {/**<div className='m-20 w-3/4 relative'>
          <img src={getImageURL("fleet")} className='relative w-full object-cover p-6'></img>
          <div className="absolute top-[30%] left-[20%] right-[20%] p-5 bg-white items-center z-10 shadow-black shadow-2xl text-black  bg-opacity-60">
            <div className="bg-white  justify-start p-5 shadow-lg text-center">

              <div className='flex flex-col space-y-5 items-center'>
                <div className='flex flex-row justify-center items-center w-full space-x-4'>
                  <div className='bg-gray-400 h-px w-[10%]'/>
                  <h1 className='text-3xl font-serif whitespace-nowrap'>
                    Our Fleet
                  </h1>
                  <div className='bg-gray-400 h-px w-[10%]'/>
                </div>
                <p className='text-center'>
                Our fleet of premium SUVs and luxury sedans is built for comfort, reliability, and a first-class experience. Whether you’re heading to the airport, a meeting, or a special event, each vehicle is clean, quiet, and professionally maintained. Every ride delivers the quality service Boston Luxury Limo is known for.
                </p>
              </div>
              </div>
            
          </div>
        </div> */}
      </section>
      <section className='flex flex-col justify-center items-center bg-black md:p-20 p-10 w-full font-lora space-y-10' ref={contactSectionRef}>
        <div className="flex flex-row space-x-4 w-full justify-center">
                <div className='bg-gray-300 h-px w-[10%] self-center'/>
                <h1 className="text-3xl font-serif text-center">Contact Us</h1>
                <div className='bg-gray-300 h-px w-[10%] self-center'/>
          </div>
        <div className='flex md:flex-row flex-col flex-grow items-center space-y-10 w-full'>
        <div className="md:w-1/2 w-full">
          <ContactForm/>
        </div>
          <div className='flex flex-col justify-center space-y-5 md:w-1/4 w-full'>
            <div>
              <h2>Call</h2>
                <a href="tel:+16172669999" className='text-yellow-400'>617-266-9999</a>
            </div>
            <div>
              <h2>Email</h2>
                <a href="mailto:info@bostonluxurylimo.com" className='text-yellow-400'>info@bostonluxurylimo.com</a>
            </div>
             <div className='flex-col flex col-span-2 lg:col-span-1 space-y-1 '>
                <h2>Follow Us</h2>
                  <ul className='flex flex-row  space-x-7 text-2xl items-center text-yellow-400'>
                    <li className='hover:text-yellow-200'><a><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a></li>
                    <li className='hover:text-yellow-200'><a><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a></li>
                    <li className='hover:text-yellow-200'><a><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                  </ul>
                </div>
          </div>
        </div>
      </section>
     <Footer/>
    </div>
  );
}
