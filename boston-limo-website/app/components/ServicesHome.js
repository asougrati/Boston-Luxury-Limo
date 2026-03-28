import React from 'react';

const text = new Map();
text.set("airplane", {title: "Airport Service", description: "We provide reliable private car service in Boston, including transportation to and from Logan Airport. Our professional chauffeurs track your flights to ensure timely pickups and drop-offs, offering luxury private driving for business or leisure travelers."});
text.set("clarendon", {title: "Corporate Travel", description: "Our executive and corporate car service in Boston is perfect for business travelers and company events. We provide private, punctual transportation to meetings, airport transfers, and professional chauffeur service, ensuring a comfortable and productive ride throughout Boston and surrounding areas."});
text.set("garden", {title: "Special Events", description: "We offer luxury private driving and chauffeured service in Boston for weddings, concerts, proms, and other special events. Whether you’re heading to Fenway Park, TD Garden, or Gillette Stadium, our chauffeurs provide reliable, stylish transportation to make your event seamless and memorable."})

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