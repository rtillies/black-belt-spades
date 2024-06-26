import "./carousel.css";

export default function Carousel() {
  return (
    <div
      id="carouselCaptions"
      className="carousel slide col-10"
      data-bs-ride="carousel"
      data-bs-interval="10000" // milliseconds
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="images/black-aces.png"
            className="d-block w-50 mx-auto"
            alt="black aces"
          />
          <div className="carousel-caption d-none d-md-block rounded">
            <h5>Lessons</h5>
            <p>Sign up for lessons from a spades professional!</p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/jester-cap.png"
            className="d-block w-50 mx-auto"
            alt="jester cap"
          />
          <div className="carousel-caption d-none d-md-block rounded">
            <h5>Variations</h5>
            <p>
              Learn different variations of spades played around the country!
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="images/WSOS-logo.png"
            className="d-block w-50 mx-auto"
            alt="WSOS logo"
          />
          <div className="carousel-caption d-none d-md-block rounded">
            <h5>Organizations</h5>
            <p>Visit the websites of spades organizations.</p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
