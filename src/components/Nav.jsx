import React, { useState } from 'react'
import { headerLogo } from '../assets/images/index'
import { closeMenu, hamburger } from '../assets/icons/index'

import { navLinks } from '../constants/index'

export default function () {

    const [menu, setMenu] = useState(true)

    const handleMenuClick = () => {
        setMenu(!menu)
    }

  return (
    <header className='padding-x py-8 absolute z-40 w-full'>
        <nav className='flex justify-between items-center max-container'>
            <a href="/">
                <img src={headerLogo} alt="logo" width={130} height={29} />
            </a>

            <ul className='hidden flex-1 justify-center items-center gap-10 lg:flex'>
                {navLinks.map( (link) => (
                    <li key={link.label}>
                        <a href={link.href} className=' font-montserrat text-lg text-slate-gray leading-normal'>
                            {link.label}
                        </a>
                    </li>
                ))}
            </ul>

            <div onClick={handleMenuClick} className='relative cursor-pointer'>
                <img src={menu ? hamburger : closeMenu} alt="hamburger" width={25} height={25} className='lg:hidden' />
                
                {!menu &&
                    <ul className='absolute top-[50px] right-0 flex lg:hidden flex-col justify-center gap-[26px] items-center bg-pale-blue px-3 py-3'>
                    {navLinks.map( (link) => (
                        <li key={link.label}  className='text-center text-[28px]' onClick={handleMenuClick}>
                            <a href={link.href} className='font-montserrat text-lg text-slate-gray leading-normal whitespace-nowrap px-5 py-3'>
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
                }
            </div>
        </nav>
    </header>
  )
}
