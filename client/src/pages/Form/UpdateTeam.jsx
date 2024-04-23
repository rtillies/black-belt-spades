import React, { useEffect, useRef, useState } from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";
import { useNavigate } from "react-router-dom";

export default function UpdateTeam() {
  const [message, setMessage] = useState()
  const store = spadesStore();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("Submit team event", e.target);
    e.preventDefault();
    console.log("Pass prevent default");
    setMessage(`Team Updated: ${store.updateTeamForm.name}`)
    store.resetUpdateTeamForm()

    // Navigate to team page
    // navigate('/teams')
  };

    useEffect(() => {
    // store.getData('divisions');
    // console.log('Get divisions');
    // store.getData('conferences');
      // message.current = "Submitted"
    // });
    }, []);

  // const divisions = store.divisions;
  // console.log(store.divisions);
  if (store.updateTeamForm._id) return <></>;

  return (
    <>
      <PageHeader header="Update New Team" buttonList="update" />
      <div className="update-team form-display">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              {/* <div className="form-floating mb-3"> */}
              <div className="mb-3">
                {/* <label htmlFor="division">Division</label> */}
                <select
                  // required
                  className="form-select"
                  aria-label="Division Select"
                  name="division"
                  onChange={store.updateUpdateTeamFormField}
                >
                  {/* <option defaultValue>Select Division</option> */}
                  <option value='' defaultValue>Select Division</option>
                  {store.divisions.map((div, i) => {
                    return (
                      <option key={i} value={div.name}>
                        {div.name}
                      </option>
                    );
                  })}
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  name="division"
                  id="division"
                  placeholder=""
                  value={store.updateTeamForm.division}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="division">Division</label> */}
              </div>
            </div>
            <div className="col">
              {/* <div className="form-floating mb-3"> */}
              <div className="mb-3">
              {/* <label htmlFor="conference">Conference</label> */}
                <select
                  // required
                  className="form-select"
                  aria-label="Conference Select"
                  name="conference"
                  onChange={store.updateUpdateTeamFormField}
                >
                  <option value='' defaultValue>Select Conference</option>
                  {store.conferences.map((conf, i) => {
                    return (
                      <option key={i} value={conf.name}>
                        {conf.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              {/* <div className="form-floating mb-3">
                <input
                  disabled
                  type="text"
                  className="form-control"
                  name="conference"
                  id="conference"
                  placeholder=""
                  value={store.updateTeamForm.conference}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="conference">Conference</label>
              </div> */}
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  required
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                  value={store.updateTeamForm.name}
                  onChange={store.updateUpdateTeamFormField}
                />
                <label htmlFor="name">Team Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
              <input
                  // required
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
                  // required
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
                  // required
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
                  // required
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
                  // required
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
          <button className="btn btn-outline-primary mx-2" type="submit">
            Update Team
          </button>
          <button
            onClick={store.resetUpdateTeamForm}
            className="btn btn-outline-primary mx-2"
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