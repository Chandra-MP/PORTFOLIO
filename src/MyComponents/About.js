import React from "react";
import "../App.css";

export default function About() {
  return (
    <div className="aboutwrapper">
      <section id="about">
        <div className="container-fluid about_me">
          <div className="row about_me_heading">
            <div className="col a">
              <h1>
                <p>A B O U T M E</p>
              </h1>
            </div>
          </div>
          <div className="row about_me_text">
            <div className="col">
              <p>
                Completed my graduation B.Sc Computer Science(Hons.) at Ram Lal Anand
                College, Delhi University in July 2021.
                <br />
                <br />
                I have always loved the idea of creating something new out of
                nothing, Computer science and programming gave me the
                opportunity to create and build stuff.
                <br />
                <br />I have very keen interest in Photography and
                Cinematography, apart from this I also love Videogames, Music,
                Cinema, hiking and many more things.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
