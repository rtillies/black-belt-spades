import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./teams.css";
import axios from "axios";
import SingleTeam from "./SingleTeam";
import GamesPage from "../../pages/DataPage/GamesPage";
import spadesStore from "../../stores/spadesStore";

export default function Team(props) {
  const [teamGames, setTeamGames] = useState()
  const [team, setTeam] = useState()
  const t = props.team;
  // const percent = (t.wins / (t.wins + t.loss)).toFixed(3);
  const store = spadesStore();

  return (
    <>
      <tr key={t.teamID}>
        <td>
          {/* <button className="btn btn-sm" onClick={() => handleClick(t)}>
            view
          </button> */}
        </td>
        <th scope="row">
          <Link className='teamLink' to='/show' onClick={() => store.handleTeamClick(t)}>
          {t.name}
          </Link>
          {/* {t.name} */}
        </th>
        <td>
          {t.conference} / {t.division}
        </td>
        <td>
          {t.captain} & {t.partner}
        </td>
        <td>
          {t.wins}-{t.loss}
        </td>
        {/* <td>{percent}</td> */}
        <td>{t.percent}</td>
      </tr>
    </>
  );
}
