import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import spadesStore from '../../stores/spadesStore';

export default function HeaderButton({text, color}) {
  const navigate = useNavigate()
  const store = spadesStore();

  const handleButtonClick = (e) => {
    const value = e.target.value
    console.log(value);
    
    switch(value) {
      case 'All Teams':
        navigate('/teams')
        break;
      case 'Add Team':
        navigate('/add-team')
        break;
      case 'Add Game':
        navigate('/add-game')
        break;
      case 'Return':
        navigate(-1, {
          fallback: '/'
        })
      default:
        return
    }
  }

  return (
    <>
      <button value={text} 
        onClick={handleButtonClick}
        className={`btn btn-outline-${store.colors[color]} mx-4 page-btn`}>{text}</button>
    </>
  )
}
