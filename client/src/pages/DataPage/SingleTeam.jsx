import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Game from "../../components/Games/Game";
import spadesStore from "../../stores/spadesStore";

export default function SingleTeam() {
  const store = spadesStore();
  const [teamGames, setTeamGames] = useState(store.teamGames);
  const [team, setTeam] = useState(store.team);

  useEffect(() => {
    // if (store.team === null) {
    if (store.team === null) {
      console.log("Team is null");
      setTeam(store.getTeam());
      console.log("after getTeam", team);
    } else {
      console.log("use effect team", team);
    }

    // console.log(store.team.name);
    setTeam(store.team);
    // });
  }, []);
  // }, [store.team]);

  if (store.team === null) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <PageHeader header={store.team.name} />
      {/* {<button>hello</button>} */}
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Game ID</th>
            <th scope="col">Date</th>
            <th scope="col">Home Team</th>
            <th scope="col">Away Team</th>
            <th scope="col">Final Score</th>
          </tr>
        </thead>
        <tbody>
          {store.teamGames &&
            store.teamGames.map((game, index) => {
              return <Game key={index} game={game} />;
            })}
          {/* {store.games &&
            store.games.map((game, index) => {
              return <Game key={index} game={game} />;
            })} */}
        </tbody>
      </table>
    </>
  );
}
