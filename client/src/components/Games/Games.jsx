import React, { useEffect, useState } from 'react'
import axios from 'axios';
import spadesStore from '../../stores/spadesStore';
import Game from './Game';

export default function Games(props) {
  const store = spadesStore();

  return (
    <>
      <div className="Games">
        {/* {console.log("Games", store.games)} */}
        <table className="table table-striped table-hover table-bordered">
        <thead>
            <tr>
            <th scope='col'>Game ID / Date</th>
            {/* <th scope='col'>Date</th> */}
            <th scope='col'>Home</th>
            <th scope='col'>Away</th>
            </tr>
          </thead>

          {store.games &&
            store.games.map((game, index) => {
              return <Game game={game}/>;
            })}
        </table>
      </div>
    </>
  )

  
}
