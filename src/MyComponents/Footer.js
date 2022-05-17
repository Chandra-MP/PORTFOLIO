import React from "react";
import github from '../Assets/github.svg'
import insta from '../Assets/instagram.svg'
import gmail from '../Assets/gmail.svg'
import linkedin from '../Assets/linkedin.svg'


export default function Footer() {
  return (
    <div className="footerwrapper">
      <section id="footer">
        <div className="container-fluid footer_container ">
          <div className="container-fluid social_links">
            <span>
              <a href="https://github.com/Chandra-MP">
                <img src={github} alt='github' style={{color: 'white'}}></img>
              </a>
            </span>
            <span>
              <a href="https://www.instagram.com/caniclick._.void/">
                <img src={insta} alt='instagram'></img>
              </a>
            </span>
            <span>
              <a href="mailto:ishupandey17@gmail.com">
                <img src={gmail} alt='gmail'></img>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/chandra-mani-pandey-ba994513a/">
                <img src={linkedin} alt='linkedinlogo'></img>
              </a>
            </span>
          </div>
          <div className="container-fluid mycontact">
            <p>Phone: 7023754529</p>
            <p>Email: chandra.m.pandey@outlook.com</p>
          </div>
          <div className="container-fluid copyright">
            <p>
              <img
                src="D:\Atom\Web Dev\wesite_frame\Images\copyright.svg"
                alt=""
              />
            &copy; CHANDRA M. PANDEY
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
