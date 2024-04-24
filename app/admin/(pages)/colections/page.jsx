'use client'

import React, { useEffect, useState } from 'react'
import { ChevronDown, ChevronUp } from 'react-feather'

const Colections = () => {
  
  /* Active Colection */
  const [colection, setCurrentColection] = useState(1)
  const [colectionName, setColectionName] = useState('Tec-Form')

  const changeColection = (col) => {
    if(col.name){
      setColectionName(col.name)
    }
    if(col.id){
      setCurrentColection(col.id)
    }
  }

  /* Colections */
  const [colections, setColections] = useState([
    {
      id: 1,
      name: 'Tec-Form'
    },
    {
      id: 2,
      name: 'Auto-Form'
    },
    {
      id: 3,
      name: 'Padel-Form'
    }
  ])

  /* Topic Handler Activate */
  const [handlerActive, setHandlerActive] = useState(false)

  const handlerActivate = (e) => {
    setHandlerActive(current => !current)
  }

  useEffect(()=>{


  },[])

  return (
    <>
      <div className="page-header">
        <div className="topic-card">
          <div className="topic-name">
            <h5>Coleccion</h5>
            <h1>
              {colectionName}
            </h1>
          </div>
          <div className={handlerActive?"topic-handler active":"topic-handler"} onClick={handlerActivate}>
            <ChevronUp className='icon up'/>
            <ChevronDown className='icon down'/>
            <div className="handler-container">
              <div className="handler-warp">
                {
                  colections.map((col, id)=>(
                    <div className={colection===col.id?"topic-item active":"topic-item"} key={id} onClick={()=>changeColection(col)}>
                      {col.name}
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Colections