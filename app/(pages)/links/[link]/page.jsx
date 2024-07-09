'use client'

import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const page = ({params}) => {

    const router = useRouter()

    useEffect(() => {
        if (params && params.link) {
            const url = params.link
            if(url === 'android'){
                router.push('https://play.google.com/store/apps/details?id=com.coacsanfrancisco.sanfranciscomovil&pli=1&fbclid=IwZXh0bgNhZW0CMTAAAR34FXwSzaVSOHBW7K19Qa6Vfow5e5WxB9PyUZXT2HXs9shxRC4KYqhzDt8_aem_FG4c0OuHHahMKdj1JU4HaA')
            }else if( url === 'apple'){
                router.push('https://apps.apple.com/us/app/sanfra-m%C3%B3vil-2-0/id6451325530')
            }else if( url === 'huawei'){
                router.push('https://appgallery.huawei.com/app/C108908715?fbclid=IwZXh0bgNhZW0CMTAAAR0cqYOyIrodvKpvB5fs1nM8m3JBEMYFsJAscqakk04s68Wm-VCsBAtJAzI_aem_ZZ1LDTyPIVs7fbQzbTtVVA')
            }else if( url === 'educa'){
                router.push('https://sanfrancisco.yodecidomisfinanzas.coonecta.com/?fbclid=IwAR2-qPAf-UyuNLndOYdEfMuPzYEm4lLyTbvigob7vtEFGfEm_7w6N-yUtsk')
            }
        }
      }, [])
    
      return (
        <>
            <div className='done-form show'>
                <h1>
                    Te estamos redirigiendo a tu destino!
                </h1>

            </div>
            <div className='overlay-form show'/>
        </>
      )
}

export default page