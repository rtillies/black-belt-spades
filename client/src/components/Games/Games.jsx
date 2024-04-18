import React, { useEffect, useState } from 'react'
import axios from 'axios';
import spadesStore from '../../stores/spadesStore';

export default function Games(props) {
  const store = spadesStore();

  return (
    <>
    <div className="Games">
      <div>Games</div>
      {console.log("Games", store.games)}
        {store.games &&
          store.games.map((game, index) => {
          return <p key={game.gameID}>{game.gameID}</p>
          // return <Game card={card} key={card.code} position={index+1} />;
          })}


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
