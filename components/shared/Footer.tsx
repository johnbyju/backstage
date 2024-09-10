import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t'>
      <div className='flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center space-x-2 sm:flex-row'>
        <Link href='/'>
          <Image alt='' src='/assets/images/favicon.ico' width={50} height={28} className='inline-block'></Image>
          <p className='inline-block pl-3 p-semibold custom-gradient'>Backstage</p>
        </Link>
        <p ><b className='font-bold'>©</b>2024 Backstage. All Copy Rights Reserved.</p>
      </div>
    </footer>
  )
}
export default Footer