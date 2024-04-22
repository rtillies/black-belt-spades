import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function HeaderButton({text}) {
  const navigate = useNavigate()

  const handleButtonClick = (e) => {
    const value = e.target.value
    console.log(value);
    switch(value) {
      case 'All Teams':
        navigate('/teams')

      default:
        return
    }
  }

  return (
    <>
      <button value={text} 
        onClick={handleButtonClick}
        className="btn btn-outline-primary mx-4 page-btn">{text}</button>
    </>
  )
}
