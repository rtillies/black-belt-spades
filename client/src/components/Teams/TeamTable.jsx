import React from "react";
import Team from "./Team";
import spadesStore from "../../stores/spadesStore";

export default function TeamTable() {
  const store = spadesStore();

  return (
    <>
      <div className="table-display">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr>
              <th scope="col">Team Name</th>
              <th scope="col">Conf / Div</th>
              <th scope="col">Players</th>
              <th scope="col">Record</th>
              <th scope="col">Percent</th>
            </tr>
          </thead>
          <tbody>
            {store.teams &&
              store.teams.map((team, index) => {
                return <Team key={index} team={team} />;
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
