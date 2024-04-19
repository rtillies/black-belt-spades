import React, { useState } from "react";

export default function Game(props) {
  // console.log(props);
  const g = props.game;
  // console.log('game', game);

  return (
    <>
        <tr>
          {/* <td>{g.date}</td> */}
          {/* <td>{g.homeScore}</td> */}
          {/* <td>{g.awayScore}</td> */}
          <th scope="row">{g.gameID}</th>
          <th scope="row">{g.date}</th>
          <td>{g.homeTeam}</td>
          <td>{g.awayTeam}</td>
          <td>{g.homeScore} | {g.awayScore}</td>
        </tr>
    </>
  );
}
