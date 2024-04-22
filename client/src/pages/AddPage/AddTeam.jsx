import React from "react";
import spadesStore from "../../stores/spadesStore";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function AddTeam() {
  const store = spadesStore();
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
                  placeholder=""
                  value={store.addTeamForm.location}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Location</label>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="division"
                  placeholder=""
                  value={store.addTeamForm.division}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Division</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="conference"
                  placeholder=""
                  value={store.addTeamForm.conference}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Conference</label>
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
                  placeholder=""
                  value={store.addTeamForm.captain}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Captain (Player 1)</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="partner"
                  placeholder=""
                  value={store.addTeamForm.partner}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Partner (Player 2)</label>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder=""
                  value={store.addTeamForm.email}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Captain Email Address</label>
              </div>
            </div>
            <div className="col">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder=""
                  value={store.addTeamForm.phone}
                  onChange={store.updateAddTeamFormField}
                />
                <label htmlFor="name">Captain Phone Number</label>
              </div>
            </div>
          </div>
          <button className="btn btn-outline-primary mx-2" type="submit">
            Add Team
          </button>
          <button 
            onClick={store.resetAddTeamForm}
            className="btn btn-outline-primary mx-2" type="reset">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
