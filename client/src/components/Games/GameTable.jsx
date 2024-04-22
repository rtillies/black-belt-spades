import React from "react";
import Game from "./Game";
import spadesStore from "../../stores/spadesStore";

export default function GameTable() {
  const store = spadesStore();

  return (
    <>
        <div className="table-display">
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
          {store.games &&
            store.games.map((game, index) => {
              return <Game key={index} game={game} />;
            })}
        </tbody>
      </table>
      </div>
    </>
  );
}
