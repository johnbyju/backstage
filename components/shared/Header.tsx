import { ClerkProvider, SignIn, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import NavItems from './NavItems'
import MobileNav from './MobileNav'


const Header = () => {
  return (
    <>
      <header className='w-full border-b'>
        <div className='wrapper flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Link href='/' className='w-12'>
              <Image src="/assets/images/favicon.ico" alt='Backstage Logo' width={40} height={32} />
            </Link>
            <h3 className='custom-gradient'>BACKSTAGE</h3>
          </div>
          <SignedIn>
            <nav className='md:flex-between hidden w-full max-w-xs'>
              <NavItems />
            </nav>
          </SignedIn>
          <div className='flex w-32 justify-end gap-3'>
            <SignedIn>
              <UserButton afterSignOutUrl='/' />
              <MobileNav />
            </SignedIn>
            <SignedOut>
              <Button asChild className='rounded-full' size='lg'>
                <Link href="/sign-in">Login</Link>
              </Button>
            </SignedOut>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header