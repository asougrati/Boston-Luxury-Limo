import { title } from 'process';
import React, { useRef } from 'react';

function getImageURL(thing) { 
  return ("/images/" + thing + ".jpg" ?? "")
}

const text= new Map();
text.set("airplane", {title: "Airport Service", description: "Boston Luxury Limo offers reliable, private airport transportation to and from Boston Logan International Airport. Whether you’re arriving or departing, our black car service ensures a smooth, stress-free experience every time. We track your flight in real time, so your chauffeur is ready when you land—early, delayed, or on schedule. Choose from curbside pickup or meet-and-greet service inside the terminal, depending on what works best for you. Our chauffeurs are professional, punctual, and experienced with navigating Boston Logan, even during peak traffic. Every ride is clean, comfortable, and tailored to your needs, with full luggage assistance included. Skip the hassle of parking, ride-shares, or last-minute delays. For dependable Boston airport car service, Boston Luxury Limo delivers the experience you can count on—every time."});
text.set("clarendon", {title: "Corporate Travel", description: "Boston Luxury Limo specializes in providing corporate travel solutions tailored to meet the needs of busy professionals and executives. Whether you’re heading to a business meeting, conference, or corporate event, our service ensures punctuality, discretion, and a smooth, stress-free experience from start to finish. Our professional chauffeurs are polished and understand the importance of time and presentation in the business world. With real-time scheduling, flexible bookings, and a commitment to reliability, we help you make the right impression—every time. From full-day itineraries to tailored routes, Boston Luxury Limo supports your business with dependable, high-end transportation services that you can trust."});
text.set("garden", {title: "Special Events", description: "Make your special occasions unforgettable with Boston Luxury Limo. Whether it’s a wedding, prom, anniversary, birthday, or a night out on the town, we provide elegant and reliable transportation that adds a touch of class to your celebration. Our professional chauffeurs handle every detail with care—from timely arrivals to seamless coordination—so you can focus on enjoying the moment. We understand how important these events are, and we’re committed to delivering a smooth, stress-free experience that matches the significance of your day. With Boston Luxury Limo, your special event begins the moment you step into the car, setting the tone for a celebration to remember."})

const ServicesHomeDesktop = React.forwardRef((props, ref) => {
    return (
        <div className='text-white flex flex-col bg-black space-y-20 font-lora py-20' ref={ref}>
        <div className="relative h-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute right-0 bottom-0 h-full overflow-hidden">
            <img
              src={getImageURL("airplane")}
              alt="Airplane"
              className="h-full object-contain"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-55% to-transparent z-10"/>

          {/* Text Content */}
          <div className="relative z-20 flex flex-col justify-between space-y-8 p-20 w-1/2 text-white">
            <div className="flex flex-row space-x-4 w-full justify-center">
            <div className='bg-gray-300 h-px w-1/4 self-center'/>
              <h1 className="text-3xl font-serif">Airport Service</h1>
              <div className='bg-gray-300 h-px w-1/4 self-center'/>
            </div>
            <p>
            Boston Luxury Limo offers reliable, private airport transportation to and from Boston Logan International Airport. Whether you’re arriving or departing, our black car service ensures a smooth, stress-free experience every time. We track your flight in real time, so your chauffeur is ready when you land—early, delayed, or on schedule. Choose from curbside pickup or meet-and-greet service inside the terminal, depending on what works best for you.
            <br/><br/>Our chauffeurs are professional, punctual, and experienced with navigating Boston Logan, even during peak traffic. Every ride is clean, comfortable, and tailored to your needs, with full luggage assistance included. Skip the hassle of parking, ride-shares, or last-minute delays. For dependable Boston airport car service, Boston Luxury Limo delivers the experience you can count on—every time.
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute left-0 bottom-0 h-full overflow-hidden">
            <img
              src={getImageURL("clarendon")}
              alt="Airplane"
              className="h-full object-contain -translate-x-10"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-black from-55% to-transparent z-10"/>

          {/* Text Content */}
          <div className="relative z-20 flex flex-col justify-between space-y-5 p-20 w-1/2 ml-auto text-white">
            <div className="flex flex-row space-x-4 w-full justify-center">
              <div className='bg-gray-300 h-px w-1/4 self-center'/>
              <h1 className="text-3xl font-serif">Corporate Travel</h1>
              <div className='bg-gray-300 h-px w-1/4 self-center'/>
            </div>
            <p>
            Boston Luxury Limo specializes in providing corporate travel solutions tailored to meet the needs of busy professionals and executives. Whether you’re heading to a business meeting, conference, or corporate event, our service ensures punctuality, discretion, and a smooth, stress-free experience from start to finish.

            <br/><br/>Our professional chauffeurs are polished and understand the importance of time and presentation in the business world. With real-time scheduling, flexible bookings, and a commitment to reliability, we help you make the right impression—every time.

            <br/><br/>From full-day itineraries to tailored routes, Boston Luxury Limo supports your business with dependable, high-end transportation services that you can trust.
            </p>
          </div>
        </div>
        <div className="relative h-full overflow-hidden">
          {/* Background Image */}
          <div className="absolute right-0 bottom-0 h-full overflow-hidden">
            <img
              src={getImageURL("garden")}
              alt="Airplane"
              className="h-full object-contain"
            />
          </div>

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black from-55% to-transparent z-10"/>

          {/* Text Content */}
          <div className="relative z-20 flex flex-col justify-between space-y-5 p-20 w-1/2 text-white">
            <div className="flex flex-row space-x-4 w-full justify-center">
              <div className='bg-gray-300 h-px w-1/4 self-center'/>
              <h1 className="text-3xl font-serif">Special Events</h1>
              <div className='bg-gray-300 h-px w-1/4 self-center'/>
            </div>
            <p>
            Make your special occasions unforgettable with Boston Luxury Limo. Whether it’s a wedding, prom, anniversary, birthday, or a night out on the town, we provide elegant and reliable transportation that adds a touch of class to your celebration.

            <br/><br/>Our professional chauffeurs handle every detail with care—from timely arrivals to seamless coordination—so you can focus on enjoying the moment. We understand how important these events are, and we’re committed to delivering a smooth, stress-free experience that matches the significance of your day.

            <br/><br/>With Boston Luxury Limo, your special event begins the moment you step into the car, setting the tone for a celebration to remember.
            </p>
          </div>
        </div>
      </div>
  )
})

const ServicesHomeMobile = React.forwardRef((props, ref) => {
  return (
    <div ref={ref} className='text-white flex flex-col bg-red-400 font-lora'>
      <div className='bg-black text-white font-lora py-10 '>
        <div className="flex flex-row space-x-4 w-full justify-center ">
          <div className='bg-gray-300 h-px w-1/12 self-center'/>
          <h1 className="text-xl font-serif text-center">{text.get("airplane").title}</h1>
          <div className='bg-gray-300 h-px w-1/12 self-center'/>
          </div>
          
          <p className='p-5 text-sm '>
            {text.get("airplane").description}
          </p>

          <div className='relative mt-3'>
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-black from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("airplane")} className=''/>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black from-1% to-transparent z-10 h-20"/>
          </div>
          

        </div>

        <div  className='bg-black text-white font-lora py-10'>
          <div className="flex flex-row space-x-4 w-full justify-center">
              <div className='bg-gray-300 h-px w-1/12 self-center'/>
              <h1 className="text-xl font-serif text-center">{text.get("clarendon").title}</h1>
              <div className='bg-gray-300 h-px w-1/12 self-center'/>
            </div>
          <p className='p-5 text-sm'>
            {text.get("clarendon").description}
          </p>

          <div className='relative'>
            <div className="absolute top-0 right-0 w-full bg-gradient-to-b from-black from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("clarendon")} className=''/>
            </div>
            <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-black from-1% to-transparent z-10 h-20"/>
          </div>

        </div>
        
        <div className='bg-black text-white font-lora py-10'>
          <div className="flex flex-row space-x-4 w-full justify-center">
            <div className='bg-gray-300 h-px w-1/12 self-center'/>
            <h1 className="text-xl font-serif text-center">{text.get("garden").title}</h1>
            <div className='bg-gray-300 h-px w-1/12 self-center'/>
          </div>
          <p className='p-5 text-sm'>
            {text.get("garden").description}
          </p>
          <div className='relative'>
            <div className="absolute top-0 right-0 w-full bg-gradient-to-b from-black from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("garden")} className=''/>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black from-1% to-transparent z-10 h-20"/>
          </div>
        </div>
    
    </div>
    
  )
})

export {ServicesHomeDesktop, ServicesHomeMobile}