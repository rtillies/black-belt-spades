import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import spadesStore from '../../stores/spadesStore';

export default function PanelButton({color, text}) {
  const navigate = useNavigate()
  const store = spadesStore();
  const colors = ['primary', 'success', 'danger',] // 'info', 'secondary', 'dark', ]


  const handleButtonClick = (e) => {
    const value = e.target.value
    console.log(value);
    
    switch(value) {
      default:
        return
    }
  }

  return (
    <>
      <button value={text} 
        onClick={handleButtonClick}
        className={`btn btn-outline-${colors[color]} mx-4 panel-btn`}>{text}</button>
    </>
  )
}
