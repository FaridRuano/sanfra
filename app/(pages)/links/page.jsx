'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = () => {
    const router = useRouter()

    useEffect(()=>{
        router.push('/')
    },[])
  return (
    <>
        <div className='done-form show'>
            <h1>
                Lo siento hubo un error :{'('}
            </h1>

        </div>
        <div className='overlay-form show'/>
    </>
  )
}

export default page