import React from 'react';
import Image from "next/image";

const logo = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="logo" width={60} height={20}/>
      <div className='font-serif font-bold text-lg'>
        VS DIAMONDS
      </div>
    </div>
  )
}

export default logo;
