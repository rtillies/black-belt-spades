import React, { useState } from "react";

export default function Team(props) {
  // console.log(props);
  const t = props.team;
  // console.log('game', game);

  return (
    <>
      <tbody>
        <tr>
          {/* <th scope="row">{t.teamID}</th> */}
          {/* <td>{t.name}</td> */}
          <th scope="row">{t.name}</th>
          <td>{t.conference} / {t.division}</td>
          <td>{t.captain} & {t.partner}</td>
          <td>{t.wins}-{t.loss}</td>
        </tr>
      </tbody>
    </>
  );
}
