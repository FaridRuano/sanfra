'use client'
import React, { useState } from 'react'
import SearchIcon from '@public/assets/icons/search-icon.webp'
import Image from 'next/image'


const HomeSearchBar = () => {

    const [isFocused, setIsFocused] = useState(false)

  return (
    <div className={`search-bar ${isFocused ? 'focus' : ''}`}>
        <div className="search-wrap">
            <Image src={SearchIcon} width={20} height={'auto'} alt='Search'/>
            <input type="text" placeholder='¿Qué estás buscando?' onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)}/>
        </div>
    </div>
  )
}

export default HomeSearchBar