import React from "react";
import "../App.css";

export default function Overview() {
  return (
    <div className="overviewrapper">
      <section id="overview">
        <div className="container-fluid overview_container">
          <div
            id="carouselExampleDark"
            className="carousel carousel-light slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleDark"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
            </div>
            <div className="carousel-inner">
              <div
                className="carousel-item active webdev_item"
                data-bs-interval="10000"
              >
                <h3>AS A WEB DEVELOPER AND A PROGRAMMER</h3>
                <p>
                  I have a strong background in Computer science and I have been
                  learning to program for the past 5+ years. I have good
                  knowledge of Web Development as I started coding with C/C++,
                  HTML, and CSS at a very early age.
                </p>
              </div>
              <div className="carousel-item visual_item" data-bs-interval="2000">
                <h3>AS A REACT DEVELOPER</h3>
                <p>
                I have been always passionate about the internet and its internal workings, 
                I have working knowledge of ReactJS Development and good understand of Component based programming web application(s). 
                


                </p>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
