import React from 'react'

export default function HeaderButton({text}) {
  const handleButtonClick = () => {
    
  }

  return (
    <>
      <button value={text} 
        onClick={() => {handleButtonClick}}
        className="btn btn-outline-primary mx-4 page-btn">{text}</button>
    </>
  )
}
