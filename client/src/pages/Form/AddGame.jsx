import React, { useEffect, useRef, useState } from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

export default function AddGame() {
  const [message, setMessage] = useState()
  const store = spadesStore();
  const navigate = useNavigate();
  const today = Date.now();

  const getNextID = () => {
    const length = store.games.length;
    const lastGame = store.games[length-1];
    const lastID = lastGame.gameID
    const nextID = lastID + 1;
    // console.log('length', length);
    // console.log('lastGame', lastGame);
    // console.log('lastID', lastID);
    return nextID;
  }

  const handleSubmit = async (e) => {
    console.log("Submit team event", e.target);
    e.preventDefault();
    console.log("Pass prevent default");
    await store.addGame()

    // const gameID = getNextID();
    setMessage(`New game added: Hello ID ${store.addGameForm.gameID}, ${store.addGameForm.homeTeam} vs ${store.addGameForm.awayTeam} on ${store.addGameForm.date}`)

    // Navigate to team page
    // setTimeout(() => {
    //   navigate('/games')
    // }, 2000);
  };

    useEffect(() => {
      store.addGameForm.gameID = getNextID();
      console.log(store.addGameForm.gameID);
    // store.getData('divisions');
    // console.log('Get divisions');
    // store.getData('conferences');
      // message.current = "Submitted"
    // });
    }, []);

  // new team should not have existing ID
  if (store.addTeamForm._id) return <></>;

  return (
    <>
      <PageHeader header="Add New Game" buttonList="add" />
      <div className="add-team form-display">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <div className="mb-3">
                <select
                  required
                  className="form-select"
                  aria-label="Home Team Select"
                  name="homeTeam"
                  onChange={store.updateAddGameFormField}
                >
                  <option value='' defaultValue>Select Home Team</option>
                  {store.teams.map((team, i) => {
                    return (
                      <option key={i} value={team.name}>
                        {team.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col">
              <div className="mb-3">
                <select
                  required
                  className="form-select"
                  aria-label="Away Team Select"
                  name="awayTeam"
                  onChange={store.updateAddGameFormField}
                >
                  <option value='' defaultValue>Select Away Team</option>
                  {store.teams.map((team, i) => {
                    return (
                      <option key={i} value={team.name}>
                        {team.name}
                      </option>
                    );
                  })}
                </select>
              </div>
            </div>
            <div className="col">

            <div className="mb-3">
            </div>
            </div>

          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  name="homeScore"
                  id="homeScore"
                  placeholder=""
                  step="10"
                  value={store.addGameForm.homeScore}
                  onChange={store.updateAddGameFormField}
                />
                <label htmlFor="homeScore">Home Score</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  required
                  type="number"
                  className="form-control"
                  name="awayScore"
                  id="awayScore"
                  placeholder=""
                  step="10"
                  value={store.addGameForm.awayScore}
                  onChange={store.updateAddGameFormField}
                />
                <label htmlFor="awayScore">Away Score</label>
              </div>
            </div>
          {/* </div>
          <div className="row"> */}
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="date"
                  className="form-control"
                  name="date"
                  id="date"
                  placeholder=""
                  value={store.addGameForm.date}
                  onChange={store.updateAddGameFormField}
                />
                <label htmlFor="date">Game Date</label>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary mx-2" type="submit">
            Add Game
          </button>
          <button
            onClick={store.resetAddGameForm}
            className="btn btn-outline-success mx-2"
            type="reset"
          >
            Reset
          </button>
        </form>
        <h4 id='message' className="m-2">{message}</h4>
      </div>
    </>
  );
}
