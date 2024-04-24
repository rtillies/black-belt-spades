import React, { useEffect, useRef, useState } from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

export default function DeleteTeam() {
  const [message, setMessage] = useState();
  const store = spadesStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("team", store.team);

    console.log("Submit team event", e.target);
    e.preventDefault();
    console.log("Pass prevent default");
    setMessage(`Team Deleted: ${store.team.name}`);
    store.deleteTeam();
    // store.resetUpdateTeamForm()

    // Navigate to team page
    // navigate('/teams')
  };

  useEffect(() => {
    console.log("team", store.team);
    // console.log('team', store.updateTeamForm.team);
    // });
  }, []);

  // if (store.updateTeamForm._id) return <></>;

  return (
    <>
      <PageHeader header="Delete Team" buttonList="add" />
      <div className="update-team form-display">
        <form onSubmit={handleSubmit}>
          <h3>{store.team.name}</h3>
          <ul>
            <li>Conference: {store.team.conference}</li>
            <li>Division: {store.team.division}</li>
            <li>
              Players: {store.team.captain} & {store.team.partner}
            </li>
            <li>Email: {store.team.email}</li>
            <li>Phone: {store.team.phone}</li>
            <li>
              Record: {store.team.wins}-{store.team.loss}
            </li>
          </ul>
          <button className="btn btn-danger mx-2" type="submit">
            Delete Team
          </button>
        </form>
        <h4 id="message" className="m-2">
          {message}
        </h4>
      </div>
    </>
  );
}
