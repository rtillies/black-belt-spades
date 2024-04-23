import React, { useEffect } from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function AddTeam() {
  const store = spadesStore();

  useEffect(() => {
    store.getData('divisions');
  }, []);

  
  // const divisions = store.divisions;
  // console.log(store.divisions);
  if (store.addTeamForm._id) return <></>;

  return (
    <>
      <PageHeader header="Add New Team" buttonList="none" />
      <div className="add-team form-display">
        <form onSubmit={store.addTeam}>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="name"
                  placeholder=""
                  value={store.addTeamForm.name}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Team Name</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="location"
                  id="location"
                  placeholder=""
                  value={store.addTeamForm.location}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="location">Location</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              {/* <div className="form-floating mb-3"> */}
              <div className="form-floating mb-3">
                <select className="form-select" aria-label="Division Select">
                  <option defaultValue>Division</option>
                  {store.divisions.map((div, i) => {
                    return <option value={div.name}>{div.name}</option>
                  })}
                </select>
                {/* <input
                  type="text"
                  className="form-control"
                  name="division"
                  id="division"
                  placeholder=""
                  value={store.addTeamForm.division}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="division">Division</label> */}
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
                  value={store.addTeamForm.conference}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="conference">Conference</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="captain"
                  id="captain"
                  placeholder=""
                  value={store.addTeamForm.captain}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="captain">Captain (Player 1)</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="partner"
                  id="partner"
                  placeholder=""
                  value={store.addTeamForm.partner}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="partner">Partner (Player 2)</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder=""
                  value={store.addTeamForm.email}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="email">Captain Email Address</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="phone"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder=""
                  value={store.addTeamForm.phone}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="phone">Captain Phone Number</label>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary mx-2" type="submit">
            Add Team
          </button>
          <button
            onClick={store.resetAddTeamForm}
            className="btn btn-outline-primary mx-2"
            type="reset"
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
