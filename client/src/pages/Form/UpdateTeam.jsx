import React, { useEffect, useRef, useState } from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

export default function UpdateTeam() {
  const [message, setMessage] = useState()
  const store = spadesStore();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log('team', store.team);
    // console.log('team', store.updateTeamForm.team);
  // });
  }, []);

  const handleSubmit = async (e) => {
    console.log('team', store.team);

    console.log("Submit team event", e.target);
    e.preventDefault();
    console.log("Pass prevent default");
    await store.updateTeam()
    setMessage(`Team Updated: ${store.team.name}`)
    // store.resetUpdateTeamForm()

    // Navigate to team page
    setTimeout(() => {
      navigate('/teams')
    }, 2000);
  };

    // team to update should have existing ID
  if (!store.updateTeamForm._id) return <></>;

  return (
    <>
      <PageHeader header="Update Team" buttonList="add" />
      <div className="update-team form-display">
        <form onSubmit={handleSubmit}>
          <div style={{color: "#ddd"}}>{store.team._id}</div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="division"
                  id="division"
                  placeholder=""
                  value={store.team.division}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="division">Division</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="conference"
                  id="conference"
                  placeholder=""
                  value={store.team.conference}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="conference">Conference</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                  value={store.team.name}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="name">Team Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="text"
                  className="form-control"
                  name="location"
                  id="location"
                  placeholder=""
                  value={store.updateTeamForm.location}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="location">Location</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="text"
                  className="form-control"
                  name="captain"
                  id="captain"
                  placeholder=""
                  value={store.updateTeamForm.captain}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="captain">Captain (Player 1)</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="text"
                  className="form-control"
                  name="partner"
                  id="partner"
                  placeholder=""
                  value={store.updateTeamForm.partner}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="partner">Partner (Player 2)</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  value={store.updateTeamForm.email}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="email">Captain Email Address</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  required
                  type="phone"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder=""
                  value={store.updateTeamForm.phone}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="phone">Captain Phone Number</label>
              </div>
            </div>
          </div>
          <button className="btn btn-success mx-2" type="submit">
            Update Team
          </button>
          <button
            onClick={store.resetUpdateTeamForm}
            className="btn btn-warning mx-2"
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
