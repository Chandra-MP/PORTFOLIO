import React from "react";
import Hader from "./Header";

export default function LandingPage() {
  return (
    <div className="landingpageWrapper">
      <section id="landingpage">
        <Hader />
        
        <div className="container-fluid heading">
          <div className="row">
            <div className="col intro-container">
              <h1>
                <p>
                  FULL TIME WEB DEVELOPER,
                  <br />
                </p>
              </h1>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
