import React from 'react'

function Hero() {
  return (
    <div>
    <div className='flex flex-col w-full h-60 px-5 justify-center items-center '>
    <div className='h-10'>
    <p className='max-w-4xl text-5xl text-center leading-relaxed'>
    Optimize Your Online Experience with Our Advanced <span className='text-blue-600 leading-3'>URL Shortening </span> Solution
    <span className='text-blue-600'><svg width="174" height="21" viewBox="0 0 174 21" fill="none" className='mx-auto' xmlns="http://www.w3.org/2000/svg">
    <path d="M162.517 0.904968C75.1007 1.58327 17.7488 11.4833 0 16.3485L9.28502 15.694L2.32125 17.9692L10.2135 17.6848L6.03526 19.3912L12.0705 20.8132C52.0748 16.4527 149.09 6.64053 173.63 5.23864L155.524 4.88662C165.556 3.55424 166.666 3.6068 166.666 3.6068C166.666 3.6068 162.517 2.61139 162.517 0.904968Z" fill="#005AE2"/>
    </svg></span>
    
    </p>
    <div className='absolute w-4/6'>
    <p className='text-center text-lg leading-6 px-20'>
    Personalize your shortened URLs to align with your brand identity. Utilize  custom slugs,
    branded links, and domain customization option to reinforce your brand presence and 
    enhance user engagement.
    </p></div>
    </div>
    
    </div>
    </div>
  )
}

export default Hero