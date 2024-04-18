import React, { useState } from "react";

export default function Team(props) {
  const t = props.team;

  const percent = (t.wins / (t.wins + t.loss)).toFixed(3)

  return (
    <>
        <tr key={t.teamID}>
          <th scope="row">{t.name}</th>
          <td>{t.conference} / {t.division}</td>
          <td>{t.captain} & {t.partner}</td>
          <td>{t.wins}-{t.loss}</td>
          <td>{percent}</td>
        </tr>
    </>
  );
}
