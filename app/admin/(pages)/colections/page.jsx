'use client'

import React, { Suspense, useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';
import { BookOpen, ChevronDown, ChevronUp, Download, File, Globe, Printer, User } from 'react-feather'

const personsApi = async (name) =>{
  try{
      const uri = process.env.PUBLIC_URL;
      const nam = name
      const res = await fetch(`${uri}api/${nam}`,{
          method: "GET",
          headers: {
          "Content-Type":"application/json"
          }
      })

      if(!res.ok){
          throw new Error("Failed")
      }

      const ponse = await res.json()
      return ponse.persons
  }catch (error) {
      console.log(error)
  }
}

const Colections = () => {

  /* Active Data */
  const [isLoading, setLoading] = useState(true)
  const [personsData, setPersonsData] = useState([])
  
  /* Active Colection */
  const [colection, setCurrentColection] = useState(
    {
      id: 1,
      name: 'Tec-Form',
      url: 'tec',
      link: '/tecform'
    }
  )
  const [colectionName, setColectionName] = useState('Tec-Form')

  const changeColection = (col) => {
    if(col.name){
      setColectionName(col.name)
    }
    if(col.id){
      setCurrentColection(col)
    }
    fetchAndLoadPersons2(col.url)
  }

  /* Colections */
  const [colections, setColections] = useState([
    {
      id: 1,
      name: 'Tec-Form',
      url: 'tec',
      link: '/tecform'

    },
    {
      id: 2,
      name: 'Auto-Form',
      url: 'auto',
      link: '/forms/autoform'
    },
    {
      id: 3,
      name: 'Padel-Form',
      url: 'padel',
      link: '/forms/padel'
    }
  ])

  /* Columns Table */
  const colsPersons = [
    {
      name: 'Cedula',
      selector: row => row.ced,
      width: '150px'
    },
    {
      name: 'Nombre',
      selector: row => (row.name + ' ' + row.last),
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Phone',
      selector: row => row.phone
    },
    {
      name: 'Provincia',
      selector: row => row.province
    },
    {
      name: 'Ciudad',
      selector: row => row.city
    }
  ]

  const customStyles = {
    table: {
      style: {
        color: '#fff',
        backgroundColor: '#0000000',
      },
    },
    rows: {
        style: {
            minHeight: '40px',
            backgroundColor: '#0000000',
            color: '#fff',
            borderBottom: '1px solid #fff',
        },
        highlightOnHoverStyle: {
          backgroundColor: '#ffffff1d',
          cursor: 'pointer',
          borderBottom: '1px solid #ffffff0',
        },
    },
    headRow: {
      style: {
        backgroundColor: '#0000000',
        color: '#fff',
        borderBottom: '1px solid #fff',
      },
    },
    headCells: {
        style: {
            paddingTop: '20px',
            paddingBottom: '15px',
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: '#0000000',
            fontWeight: '700',
            color: '#fff',
        },
    },
    cells: {
        style: {           
            paddingTop: '11px',
            paddingBottom: '11px',
            paddingLeft: '8px',
            paddingRight: '8px',
            backgroundColor: '#0000000',
            color: '#fff',
            borderBottom: '1px solid #ffffff50',
  
        },
    },
    pagination: {
      style: {
        color: '#fff',
        backgroundColor: '#0000000'
      },
      pageButtonsStyle: {
        color: '#fff',
        fill: '#ffffff',
        backgroundColor: 'transparent',
  
      }
    },
  }

  /* Topic Handler Activate */
  const [handlerActive, setHandlerActive] = useState(false)

  const handlerActivate = (e) => {
    setHandlerActive(current => !current)
  }

  const fetchAndLoadPersons2= async (urlData) =>{
    setLoading(true)
    try{
      const fetchData = await personsApi(urlData)
      if(fetchData.length > 0){
        setPersonsData(fetchData)
      }
      setLoading(false)
    }catch (e){
      console.log(e)
    }
  }

  /* Download To Excel File Data */

  const covertArrayToCsv = (data) =>{
    const headers = Object.keys(data[0]);
    const csvRows = data.map(row => headers.map(header => row[header]).join(","));
    return [headers.join(","), ...csvRows].join("\n");
  }

  const downloadData = () => {
    const csv = covertArrayToCsv(personsData)
    const blob = new Blob(["\uFEFF" + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.setAttribute('href', url);
    a.setAttribute('download', 'data.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }

  useEffect(()=>{
    const fetchAndLoadPersons= async () =>{
      if(colection.id !== ''){
        try{
          const functionName = colection.url;
          const fetchData = await personsApi(functionName)
          if(fetchData.length > 0){
            setPersonsData(fetchData)
          }
          setLoading(false)
        }catch (e){
          console.log(e)
        }
      }
    }

    fetchAndLoadPersons()
  },[])
  
  if(isLoading){
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
                      <div className={colection.id===col.id?"topic-item active":"topic-item"} key={id} onClick={()=>changeColection(col)}>
                        {col.name}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
            <a  className='link-card' target='_blank'>
              <div className='icon'>
                <Globe/>
              </div>
              <span className='text'>
                Visitar Formulario
              </span>
            </a>
        </div>
        <div className="page-body">
          <div className="tool-bar">
            <div className="tool-card">
              <div className="tool-header">
                <div className="icon">
                  <User/>
                </div>
                <span className="text">
                  Personas Registradas
                </span>
              </div>
              <div className="tool-body">
                  0
              </div>
            </div>
            <div className="tool-card lined">
              <div className="tool">
                <Download className='icon'/>
              </div>
              <div className="tool">
                <BookOpen className='icon'/>
              </div>
              <div className="tool">
                <File className='icon'/>
              </div>
              <div className="tool">
                <Printer className='icon'/>
              </div>
            </div>
          </div>
            <div className="table-warp loading"/>
        </div>
      </>
    )
  }else{
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
                      <div className={colection.id===col.id?"topic-item active":"topic-item"} key={id} onClick={()=>changeColection(col)}>
                        {col.name}
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          {
            colection&&(
              <a href={colection.link} className='link-card' target='_blank'>
                <div className='icon'>
                  <Globe/>
                </div>
                <span className='text'>
                  Visitar Formulario
                </span>
              </a>
            )
          }
        </div>
        <div className="page-body">
          <div className="tool-bar">
              {
                colection&&(
                  <>
                    <div className="tool-card">
                      <div className="tool-header">
                        <div className="icon">
                          <User/>
                        </div>
                        <span className="text">
                          Personas Registradas
                        </span>
                      </div>
                      <div className="tool-body">
                        {personsData.length}
                      </div>
                    </div>
                    <div className="tool-card lined">
                      <div className="tool">
                        <Download className='icon' onClick={()=>{downloadData()}}/>
                      </div>
                      <div className="tool">
                        <BookOpen className='icon'/>
                      </div>
                      <div className="tool">
                        <File className='icon'/>
                      </div>
                      <div className="tool">
                        <Printer className='icon'/>
                      </div>
                    </div>
                  </>
                )
              }
          </div>
            <div className="table-warp">
                <DataTable
                  columns={colsPersons}
                  data={personsData}
                  customStyles={customStyles}
                  highlightOnHover
                  pagination
                />
            </div>
        </div>
      </>
    )
  }
  
}

export default Colections