'use client'
import React, { useEffect, useState} from 'react'
import Papa from 'papaparse'
import SanFra from '@public/icons/sanfrancisco.png'
import Image from 'next/image'
import FileDropZone from '@public/components/giveaway/FileDropZone'

const GiveAway = () => {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState()
    const [isSpinning, setIsSpinning] = useState(false)
    const [countdown, setCountdown] = useState(3);


    const handleFileChange = (file) => {
        Papa.parse(file, {
          header: true,
          complete: (result) => {
            const data = result.data;
            setData(data)
          },
          error: (error) => {
            console.error('Error parsing CSV:', error.message)
          },
        })
    }

    const handleRandom = (e) => {
        if(data.length>0){
            const randomIndex = Math.floor(Math.random() * data.length)
            return randomIndex
        }else{
            return 0
        }
    }

    const handleSelect = () => {
        setIsSpinning(true)
        setCountdown(3)
        const countdownInterval = setInterval(() => {
          setCountdown((prevCountdown) => {
            if (prevCountdown > 0) {
              return prevCountdown - 1
            } else {
              clearInterval(countdownInterval)
              return 0
            }
          });
        }, 1500);
      
        setTimeout(() => {
          clearInterval(countdownInterval);
          const selectedName = data[handleRandom()].name
          setSelected(selectedName)
          setIsSpinning(false)
        }, 4400)
    }

    const handleDeSelect = () => {
        setSelected('')
    }

    useEffect(()=>{
        const textShake = document.getElementById('gi-title')
        const btnWinner = document.getElementById('btn-winner')
        if(textShake && btnWinner){
            btnWinner.addEventListener('mouseover', () =>{
                textShake.classList.add('shake')
            })
            btnWinner.addEventListener('mouseout', () =>{
                textShake.classList.remove('shake')
            })
        }
    },[data])

    if(selected){
        return(
            <>
                <section className='winner-gi'>
                    <div className="congrats-title">
                        <h2>
                            ¡Felicidades!
                        </h2>
                    </div>
                    <div className='winner-name'>
                        <h1>
                            {selected}
                        </h1>
                    </div>
                    <button className='btn-reset' onClick={()=>handleDeSelect()}>GIRAR DE NUEVO!</button>
                </section>
            </>
        )
    }

    if(data.length>0){
        return (
          <>
              <section className={isSpinning?'main-gi spinning': 'main-gi'}>
                <div className='logo-holder'>
                    <Image src={SanFra} width={304} height={82} alt='San Francisco'/>
                </div>
                <div className='gi-title' id='gi-title'>
                    <h1>
                        Les deseamos mucha suerte
                        <br/>a TODOS!
                    </h1>
                </div>
                <button className='btn-winner' id='btn-winner' onClick={handleSelect}>SELECCIONAR</button>
                <div className={isSpinning?'spin-anim active':'spin-anim'}>
                    <span>{countdown}</span>
                </div>
              </section>
          </>
        )
    }
    else{
        return(
            <>
                <FileDropZone onFileChange={handleFileChange}/>
            </>
        )
    }
}

export default GiveAway