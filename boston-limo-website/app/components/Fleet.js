import React, { useState } from 'react';

const fleetPicNames = [
    'cadi-crossover',
    'mercedes-sedan',
    'gmc-yukon',
    'chevy-suburban',
    'escalade',
    'fleet',
]

const Fleet = React.forwardRef((props, ref) => {
    const { getImageURL } = props;
    const [isHovered, setIsHovered] = useState(false);
    const handleEnter = () => setIsHovered(true);
    const handleLeave = () => setIsHovered(false);

    return (
        <div className='flex justify-center px-10 font-lora items-center' ref={ref}>
            <div className='m-20 w-3/4 relative justify-center flex flex-col items-center'>
                <img src={getImageURL("fleet")} className='w-full p-6'></img>
                <div
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white items-center z-10 w-auto shadow-black shadow-2xl text-black  bg-opacity-60 transition-all duration-300 ${isHovered ? 'h-auto' : 'h-32'
                        }`}
                >
                    <div className="bg-white flex justify-center p-5 shadow-lg text-center">
                        <div className='flex flex-col space-y-5 items-center'>
                            <div className='flex flex-row justify-center items-center w-full space-x-4'>
                                <div className='bg-gray-400 h-px w-[10%]' />
                                <h1 className='text-3xl font-serif whitespace-nowrap'>
                                    Our Fleet
                                </h1>
                                <div className='bg-gray-400 h-px w-[10%]' />
                            </div>
                            {isHovered && 
                            (<p className={`text-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'
                                }`}>
                                Our fleet of premium SUVs and luxury sedans is built for comfort, reliability, and a first-class experience. Whether you’re heading to the airport, a meeting, or a special event, each vehicle is clean, quiet, and professionally maintained. Every ride delivers the quality service Boston Luxury Limo is known for.
                            </p>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
})

export default Fleet