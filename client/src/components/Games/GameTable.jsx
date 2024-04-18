import React from "react";
import Game from "./Game";
import spadesStore from "../../stores/spadesStore";

export default function GameTable() {
  const store = spadesStore();

  return (
    <>
      <table className="table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">Game ID / Date</th>
            <th scope="col">Home</th>
            <th scope="col">Away</th>
          </tr>
        </thead>
        <tbody>
          {store.games &&
            store.games.map((game, index) => {
              return <Game key={index} game={game} />;
            })}
        </tbody>
      </table>
    </>
  );
}
