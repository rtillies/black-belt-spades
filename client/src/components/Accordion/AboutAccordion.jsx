import React from "react";
import { Link } from "react-router-dom";

export default function AboutAccordion() {
  return (
    <div className="accordion col-md-10 col-lg-8" id="accordionSpades">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            General Information
          </button>
        </h2>
        <div
          id="collapseOne"
          className="accordion-collapse collapse show"
          data-bs-parent="#accordionSpades"
        >
          <div className="accordion-body">
            <div>
              <ul>
                <li>
                  <strong>Assignment</strong>: Per Scholas CP 325 - Capstone Project
                </li>
                <li>
                  <strong>Name</strong>: Richard Tillies
                </li>
                <li>
                  <strong>Date</strong>: April 24, 2024
                </li>
                <li>
                  <strong>Requirements: </strong>
                  <Link to="/docs/CP-325.9-Capstone-Completion.pdf" target="_blank">CP 325.9 Capstone Completion</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseTwo"
            aria-expanded="false"
            aria-controls="collapseTwo"
          >
            Objectives
          </button>
        </h2>
        <div
          id="collapseTwo"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionSpades"
        >
          <div className="accordion-body">
            <ul>
              <li>
                (20%){" "}
                <strong>
                  Project Structure, Standardization, and Convention
                </strong>
              </li>
              <li>
                (12%) <strong>Core JavaScript</strong>
              </li>
              <li>
                (9%) <strong>Database</strong>
              </li>
              <li>
                (19%) <strong>Server</strong>
              </li>
              <li>
                (35%) <strong>Front-End Development</strong>
              </li>
              <li>
                (5%) <strong>Presentation</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseThree"
            aria-expanded="false"
            aria-controls="collapseThree"
          >
            Render and GitHub
          </button>
        </h2>
        <div
          id="collapseThree"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionSpades"
        >
          <div className="accordion-body">
            <ul>
              <li>
                Render:{" "}
                <strong>
                  <em>
                    <Link
                      to="https://black-belt-spades.onrender.com"
                      target="_blank"
                    >
                      Black Belt Spades
                    </Link>
                  </em>
                </strong>
              </li>
              <li>
                GitHub:{" "}
                <strong>
                  <em>
                    <Link
                      to="https://github.com/rtillies/black-belt-spades"
                      target="_blank"
                    >
                      Black Belt Spades
                    </Link>
                  </em>
                </strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapseFour"
            aria-expanded="false"
            aria-controls="collapseFour"
          >
            More Information
          </button>
        </h2>
        <div
          id="collapseFour"
          className="accordion-collapse collapse"
          data-bs-parent="#accordionSpades"
        >
          <div className="accordion-body">
          <li>
                Consult the README on the Black Belt Spades {" "}
                <strong>
                  <em>
                    <Link
                      to="https://github.com/rtillies/black-belt-spades"
                      target="_blank"
                    >
                      GitHub repository
                    </Link>
                  </em>
                </strong>
              </li>
          </div>
        </div>
      </div>
    </div>
  );
}
