import React from "react";
import "../styles/aboutExpert.css";
import {
  AttachMoneyOutlined,
  AccessTimeOutlined,
} from "@mui/icons-material";

const AboutExpert = ({ image }) => {
  return (
    <section className="about-expert">
      <div className="container about-expert-wrapper">

        {/* LEFT IMAGE */}
        <div className="about-expert-image">
          <img src={image} alt="About section" />
          <span className="image-outline"></span>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-expert-content">
          <p className="kicker">About Us</p>

          <h2 className="title">
            We Are Expert For <br />
            Logistics Solutions.
          </h2>

          <p className="desc">
            All the Lorem Ipsum generators on the Internet tend to repeated this
            predefined chunks as necessary, making this the first generator on
            the Internet.
          </p>

          <button className="primary-btn">Track Parcel</button>

          {/* FEATURES BOX */}
          <div className="about-expert-features">
            <div className="feature-box">
              <AttachMoneyOutlined className="feature-icon" />
              <div>
                <h4>Affordable Cost</h4>
                <p>
                  Mauris blandit aliquet. Eget tincidunt nibh pulvinar.
                </p>
              </div>
            </div>

            <div className="feature-box">
              <AccessTimeOutlined className="feature-icon" />
              <div>
                <h4>Shot Time Delivery</h4>
                <p>
                  Tincidunt nibh pulvinar. Sed porttitor lectus nibh.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutExpert;
