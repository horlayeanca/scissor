import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScissors, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navigation() {
    const [showMenu, setShowMenu] = React.useState(false)
    const toggleMenu = () => setShowMenu(!showMenu)
    
    const menuLinks = [
        {
            id: 1,
            link: 'My URLs',
        },
        {
            id: 2,
            link: 'Features',
        },
        {
            id: 3,
            link: 'Pricing',
        },
        {
            id: 4,
            link: 'Analytics',
        },
        {
            id: 5,
            link: 'FAQs',
        },
    ]
  return (
    <div className='flex justify-between items-center w-full h-20 px-20 gap-9'>
    <div>
    <h1 className='text-2xl text-blue-600 font-bold'><FontAwesomeIcon icon={faScissors} size="2xs" style={{color: "#0065fe",}} /> | scissor</h1>
    </div>
    <div className='hidden md:flex'>
    {menuLinks.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer list-none capitalize text-lg text-black hover:scale-105 duration-300 hover:text-blue-600'>{link}</li>
    ))}
    </div>
    <div className='sm:flex justify-center items-center gap-3 hidden'>
    <button className='text-blue-600 text-base font-medium cursor-pointer leading-5 w-20 hover:scale-100 duration-300 hover:text-red-400'>Log in</button>
    <button className='flex flex-row justify-center cursor-pointer items-center py-3 px-6 bg-blue-600 rounded-full text-white w-36 h-11 hover:scale-100 duration-300 hover:text-blue-600 hover:bg-red-400'>Try for free</button>
    </div>
    <div onClick={() => setShowMenu(!showMenu)} className='pr-4 z-10 text-blue-600 md:hidden'>
    {showMenu ? <FontAwesomeIcon icon={faTimes} size="xl" style={{color: "#0065fe",}} className='px-1'/> : <FontAwesomeIcon icon={faBars} size="xl" style={{color: "#0065fe",}} className='px-1'/>}

    </div>
    <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen text-black'>
    { showMenu && menuLinks.map(({id, link}) => (
        <li key={id} onClick={toggleMenu} className='px-4 cursor-pointer list-none capitalize font-medium text-black'>{link}</li>
        
    ))}
    <div className='flex flex-col justify-center items-center gap-3 mt-4'>
    {showMenu && <button className='text-blue-600 text-base font-medium leading-5 w-20 hover:scale-100 duration-300 hover:text-red-400'>Log in</button>}
    {showMenu && <button className='flex flex-row justify-center items-center py-3 px-6 bg-blue-600 rounded-full text-white w-36 h-11 hover:scale-100 duration-300 hover:text-blue-600 hover:bg-red-400'>Try for free</button>}
    </div>
    </ul>
    </div>
  )
}

export default Navigation