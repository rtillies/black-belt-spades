import React, { useEffect, useState } from 'react'
import axios from 'axios';
import spadesStore from '../../stores/spadesStore';
import Game from './Game';
import GameTable from './GameTable';

export default function Games(props) {
  const store = spadesStore();

  return (
    <>
      <div className="Games">
        <GameTable />
      </div>
    </>
  )

  
}
