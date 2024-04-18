import React, { useEffect, useState } from 'react'
// import axios from 'axios';
import spadesStore from '../../stores/spadesStore';
// import Game from './Game';
import Team from './Team';

export default function Teams(props) {
  const store = spadesStore();

  return (
    <>
      <div className="Teams">
        <div>Teams</div>
        {/* {console.log("Teams", store.games)} */}
        <table class="table table-striped table-hover table-bordered">
          {store.teams &&
            store.teams.map((team, index) => {
              return <Team team={team}/>;
            })}
        </table>
      </div>
    </>
  )

  
}
