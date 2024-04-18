import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import spadesStore from '../../stores/spadesStore';
// import Game from './Game';
import Team from './Team';
// import TeamHeading from './TeamTable';
import TeamTable from './TeamTable';

export default function Teams(props) {
  const store = spadesStore();

  return (
    <>
      <div className="Teams">
        <TeamTable />
      </div>
    </>
  )
}
