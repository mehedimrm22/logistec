import React from "react";
import { Link } from "react-router-dom";
import "../styles/contact.css";
import Cta from "../components/Cta";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";

export default function Contact() {
  return (
    <main>
      {/* HERO / BREADCRUMB */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Contact Us</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <p>Contact Us</p>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="contact-info-section">
          {/* LEFT CARD */}
          <div className="contact-box">
            <div className="contact-icon">
              <AccessTimeIcon fontSize="large" />
            </div>

            <h3 className="contact-box-title">Emergency Works</h3>

            <a href="tel:0031234567890" className="contact-box-number">
              (003) 123 456 7890
            </a>

            <button className="contact-box-btn">Call Us</button>
          </div>

          {/* MIDDLE CARD - MAIN BRANCH */}
          <div className="contact-main-box">
            <h3 className="main-box-title">Main Branch</h3>

            <div className="main-box-row">
              <p className="row-label">Address :</p>
              <p className="row-value">Amsterdam, 109–74</p>
            </div>

            <div className="main-box-row">
              <p className="row-label">Phone :</p>
              <a href="tel:+01569896654" className="row-value link">
                +01 569 896 654
              </a>
            </div>

            <div className="main-box-row">
              <p className="row-label">Mail :</p>
              <a href="mailto:info@example.com" className="row-value link">
                info@example.com
              </a>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="contact-box">
            <div className="contact-icon">
              <PersonOutlineIcon fontSize="large" />
            </div>

            <h3 className="contact-box-title">You Have a Question?</h3>

            <a href="tel:0031234567888" className="contact-box-number">
              (003) 123 456 7888
            </a>

            <button className="contact-box-btn">Reach Us</button>
          </div>
        </div>
      </section>

      {/* CONTACT FORM SECTION */}
      <section className="contact-form-section">
        <div className="container">
          <h2 className="contact-form-title">Get In Touch</h2>

          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Your Name" />
              <input type="email" placeholder="Your Email" />
            </div>

            <div className="form-row">
              <input type="text" placeholder="Phone Number" />
              <input type="text" placeholder="Website" />
            </div>

            <input type="text" className="subject-input" placeholder="Subject" />

            <textarea className="message-input" placeholder="Your Message"></textarea>

            <div className="form-submit">
              <button type="submit" className="btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>

      <Cta />

    </main>
  );
};

