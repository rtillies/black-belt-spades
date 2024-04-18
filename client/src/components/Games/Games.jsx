import React, { useEffect, useState } from 'react'
import axios from 'axios';
import spadesStore from '../../stores/spadesStore';
import Game from '../Game/Game';

export default function Games(props) {
  const store = spadesStore();

  return (
    <>
    <div className="Games">
      <div>Games</div>
      {/* {console.log("Games", store.games)} */}
      <table class="table table-striped table-hover table-bordered">
        {store.games &&
          store.games.map((game, index) => {
            return <Game game={game}/>;
          })}
      </table>


{/* 
      {console.log("Cards", store.showDeck)}
      {store.getGames &&
        store.getGames.map((game, index) => {
          return <Game card={card} key={card.code} position={index+1} />;
        })} */}
    </div>
  </>
  
  )
}
