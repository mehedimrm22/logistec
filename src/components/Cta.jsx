import React from "react";
import "../styles/cta.css";
import { Link } from "react-router-dom";

export default function Cta() {
  return (
    <section className="cta-section">
        <div className="container cta-inner">
          <h2>
            Fastest & Secure Way to Get <br />
            Transport Your Freight.
          </h2>
          <Link to="/contact" className="cta-btn">
            Contact Us
          </Link>
        </div>
    </section>
  );
}
