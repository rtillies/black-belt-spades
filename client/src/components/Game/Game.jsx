import React, { useState } from "react";

export default function Game(props) {
  // console.log(props);
  const g = props.game;
  // console.log('game', game);

  return (
    <>
      <tbody>
        <tr>
          <th scope="row">{g.gameID}</th>
          <td>{g.date}</td>
          <td>{g.homeTeam}</td>
          <td>{g.homeScore}</td>
          <td>{g.awayTeam}</td>
          <td>{g.awayScore}</td>
        </tr>
      </tbody>
    </>
  );
}
