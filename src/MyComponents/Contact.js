import React, { useState } from "react";
import "../App.css";
import Footer from "./Footer";

export default function Contact() {

  const [enquiry, setEnquiry] = useState([]);


  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');

  const handleName = (e) => setName(e.target.value);
  const handleContact = (e) => setContact(e.target.value)
  const handleEmail = (e) => setEmail(e.target.value)
  const handleSubject= (e)=>setSubject(e.target.value)

  const onSubmit = (e) =>
  {
    e.preventDefault();
    if(!name || !contact || !subject)
    {
      alert("Details Missing!!")
      return undefined
    }
    addEnquiry(name, contact, email, subject);
    setName('')
    setContact('')
    setEmail('')
    setSubject('')
  }

  const addEnquiry = (name, contact, email, subject)=>
  {
    alert("Enquiry submitted")
    let askedEnq = 
    {
      name: name,
      contact: contact,
      email: email,
      subject: subject
    };
    setEnquiry([...enquiry, askedEnq])
    console.log("Your Details:");
    console.log("\n", askedEnq.name, "\n", askedEnq.contact, "\n", askedEnq.email, "\n", askedEnq.subject)
  }
  
  
  return (
    <div className="contactwrapper">
      <section id="contact_me">
        <div className="container-fluid contact_container">
          <div className="row">
            <div className="col">
              <div style={{ textAlign: "center" }} className="contact_message">
                <h2>Get In touch with Me</h2>
                <p>Swing by for a cup of coffee, or leave me a message:</p>
              </div>
            </div>
            <div className="col">
              <form onSubmit={onSubmit}>
                <label htmlFor="fname">Your Name</label>
                <input
                  type="text"
                  id="fname"
                  value={name}
                  onChange={handleName}
                  placeholder="Your name.."
                />
                <label htmlFor="contactN">Contact Number</label>
                <input
                  type="text"
                  id="CN"
                  name="contactN"
                  value={contact}
                  onChange={handleContact}
                  placeholder="Your contact number.."
                />
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="Email"
                  value={email}
                  onChange={handleEmail}
                  placeholder="example@gmail.com"
                />
                <label htmlFor="subject">Subject</label>
                <textarea
                  id="subject"
                  name="subject"
                  placeholder="Write something.."
                  value={subject}
                  onChange={handleSubject}
                  style={{ height: "170px" }}
                ></textarea>
                <input type="submit" value="Submit" />
              </form>
            </div>
          </div>
        </div>
        
      </section>
      <Footer />
    </div>
  );
}
