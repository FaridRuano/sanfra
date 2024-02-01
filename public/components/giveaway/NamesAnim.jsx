'use client'
import React, { useState, useEffect } from 'react';

const NamesAnim = ({ data, isActive }) => {
  const [currentName, setCurrentName] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const randomName = data[randomIndex].name; // Assuming 'name' is the property in your data objects
      setCurrentName(randomName);
    }, 80); // Change the interval time as needed

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount

  }, [data]);

  if(isActive){
      return (
        <div className='names-anim'>
            <span>{currentName}</span>
        </div>
      )
  }
}

export default NamesAnim;
