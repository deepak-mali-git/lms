import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import NavItems from './navItems'

const navbar = () => {
  return (
    <nav className='navbar'>
        <Link href='/'>
        <div className='flex items-center gap 2.5 cursor-pointer'>
        <Image
            src='./images/logo.svg'
            alt='Logo'
            width={46}
            height={44}
        />
        </div>
        </Link>

        <div className='flex items-center gap-8 cursor-pointer'>
          <NavItems />
          <p>Sign In</p>
        </div>

    </nav>
  )
}

export default navbar
