import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import spadesStore from '../../stores/spadesStore';

export default function PanelButton({color, text, group}) {
  const navigate = useNavigate()
  const store = spadesStore();
  const colors = ['primary', 'success', 'danger',] // 'info', 'secondary', 'dark', ]


  const handleButtonClick = (e) => {
    const value = e.target.value.toLowerCase()
    // console.log(value);
    
    switch(value) {
      case 'add-game':
        console.log('Add game');
        navigate('/add-game')
        break;
      case 'update-game':
        console.log('Update game');
        break;
      case 'delete-game':
        console.log('Delete game');
        break;
      case 'add-team':
        console.log('Add team');
        navigate('/add-team')
        break;
      case 'update-team':
        console.log('Update team');
        break;
      case 'delete-team':
        console.log('Delete team');
        break;
      case 'add-division':
        console.log('Add division');
        break;
      case 'update-division':
        console.log('Update division');
        break;
      case 'delete-division':
        console.log('Delete division');
        break;
      case 'add-conference':
        console.log('Add conference');
        break;
      case 'update-conference':
        console.log('Update conference');
        break;
      case 'delete-conference':
        console.log('Delete conference');
        break;
      default:
        return
    }
  }

  return (
    <>
      <button value={`${text}-${group}`} 
        onClick={handleButtonClick}
        className={`btn btn-outline-${store.colors[color]} mx-4 panel-btn`}>{text}</button>
    </>
  )
}
