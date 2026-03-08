import React from 'react';

const text = new Map();
text.set("airplane", {title: "Airport Service", description: "Boston Luxury Limo provides reliable private transportation to and from Boston Logan International Airport. Our professional chauffeurs ensure a smooth, stress-free experience from pickup to drop-off.\n\nWe track your flight in real time and offer both curbside pickup and meet-and-greet service. With punctual drivers, comfortable vehicles, and full luggage assistance, your airport ride is handled with ease and professionalism."});
text.set("clarendon", {title: "Corporate Travel", description: "Boston Luxury Limo provides professional transportation for meetings, conferences, and corporate events. Our chauffeurs are punctual, discreet, and committed to delivering a smooth, reliable experience.\n\nWith flexible scheduling and dependable service, we help busy professionals travel comfortably and arrive ready for what matters most."});
text.set("garden", {title: "Special Events", description: "Make your celebrations unforgettable with Boston Luxury Limo. From weddings and proms to birthdays and nights out, we provide elegant, reliable transportation.\n\nOur professional chauffeurs ensure timely arrivals and seamless service, so you can relax and enjoy every moment in style."})

const ServicesHomeDesktop = React.forwardRef((props, ref) => {
  const {getImageURL} = props;

    return (
        <div className='text-white flex flex-col bg-black space-y-20 font-lora py-20'>
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
            <p style={{ whiteSpace: 'pre-line' }}>
            {text.get("airplane").description}
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
            <p style={{ whiteSpace: 'pre-line' }}>
            {text.get("clarendon").description}
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
            <p style={{ whiteSpace: 'pre-line' }}>
            {text.get("garden").description}
            </p>
          </div>
        </div>
      </div>
  )
})

const ServicesHomeMobile = React.forwardRef((props, ref) => {
  const {getImageURL} = props;

  return (
    <div className='text-white flex flex-col bg-red-400 font-lora'>
      <div className='bg-white text-black font-lora py-10 '>
        <div className="flex flex-row space-x-4 w-full justify-center ">
          <div className='bg-gray-300 h-px w-1/12 self-center'/>
          <h1 className="text-xl font-serif text-center">{text.get("airplane").title}</h1>
          <div className='bg-gray-300 h-px w-1/12 self-center'/>
          </div>
          
          <p className='p-5 text-sm text-center' style={{ whiteSpace: 'pre-line' }}>
            {text.get("airplane").description}
          </p>

          <div className='relative mt-3'>
            <div className="absolute top-0 left-0 w-full bg-gradient-to-b from-white from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("airplane")} className=''/>
            </div>
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-white from-1% to-transparent z-10 h-20"/>
          </div>
          

        </div>

        <div  className='bg-white text-black font-lora py-10'>
          <div className="flex flex-row space-x-4 w-full justify-center">
              <div className='bg-gray-300 h-px w-1/12 self-center'/>
              <h1 className="text-xl font-serif text-center">{text.get("clarendon").title}</h1>
              <div className='bg-gray-300 h-px w-1/12 self-center'/>
            </div>
          <p className='p-5 text-sm text-center' style={{ whiteSpace: 'pre-line' }}>
            {text.get("clarendon").description}
          </p>

          <div className='relative'>
            <div className="absolute top-0 right-0 w-full bg-gradient-to-b from-white from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("clarendon")} className=''/>
            </div>
            <div className="absolute bottom-0 right-0 w-full bg-gradient-to-t from-white from-1% to-transparent z-10 h-20"/>
          </div>

        </div>
        
        <div className='bg-white text-black font-lora pt-10'>
          <div className="flex flex-row space-x-4 w-full justify-center">
            <div className='bg-gray-300 h-px w-1/12 self-center'/>
            <h1 className="text-xl font-serif text-center">{text.get("garden").title}</h1>
            <div className='bg-gray-300 h-px w-1/12 self-center'/>
          </div>
          <p className='p-5 text-sm text-center' style={{ whiteSpace: 'pre-line' }}>
            {text.get("garden").description}
          </p>
          <div className='relative'>
            <div className="absolute top-0 right-0 w-full bg-gradient-to-b from-white from-1% to-transparent z-10 h-20"/>
            <div className=' h-full overflow-hidden'>
            <img src={getImageURL("garden")} className=''/>
            </div>
            <div className="absolute bottom-0 left-0 w-full z-10 h-20"/>
          </div>
        </div>
    
    </div>
    
  )
})

export {ServicesHomeDesktop, ServicesHomeMobile}