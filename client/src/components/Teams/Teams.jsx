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
        {/* <div>Teams</div> */}
        {/* {console.log("Teams", store.games)} */}
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
            <th scope='col'>Team Name</th>
            <th scope='col'>Conf / Div</th>
            <th scope='col'>Players</th>
            <th scope='col'>Record</th>
            <th scope='col'>Percent</th>
            </tr>
          </thead>
          <tbody>
            {store.teams &&
              store.teams.map((team, index) => {
                return <Team team={team}/>;
              })}
          </tbody>
        </table>
      </div>
    </>
  )
}
