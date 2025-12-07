import { Link } from "react-router-dom";
import "../styles/serviceDetails.css";
import Cta from "../components/Cta";
import {
  AccessTimeOutlined,
  MonetizationOnOutlined,
  PrecisionManufacturingOutlined,
  CalculateOutlined,
} from "@mui/icons-material";
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function ServiceDetails() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Service Details</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <p>Service Details</p>
          </div>
        </div>
      </section>

      <section className="service-details-body container">
        <div className="service-details-layout">
          {/* LEFT COLUMN */}
          <aside className="service-details-left">
            {/* Top promo card (image or text) */}
            <div className="service-promo-card">
              <p className="service-promo-small">Providing Variety</p>
              <h3 className="service-promo-title">Electrical Services</h3>
              <div className="service-promo-box">
                <p>Discount 25%</p>
                <p>Booking Services</p>
              </div>
              <button className="service-promo-btn">
                Click to Get Discount
              </button>
            </div>

            {/* Our services list */}
            <div className="service-list-card">
              <h4 className="service-list-title">Our Services</h4>
              <ul className="service-list">
                <li>Telecom Installation and Repair</li>
                <li>Indoor / Outdoor Lighting</li>
                <li>Control Systems & Automation</li>
                <li>Distribution Boards & Panels</li>
                <li>Maintenance & Monitoring</li>
              </ul>
            </div>

            {/* Bottom buttons */}
            <div className="service-side-buttons">
              <button className="side-btn primary">
                Download Service Pack
              </button>
              <button className="side-btn secondary">
                Our Company Details
              </button>
            </div>
          </aside>

          <div className="service-details-right">
            {/* Main image */}
            <div className="service-details-main-image">
              <img src="../partners/service-details.png" alt="Commercial service" />
            </div>

            {/* Title + long text */}
            <h2 className="service-details-title">
              Description for Commercial Services
            </h2>

            <p className="service-details-text">
              Phosfluorescently engage worldwide methodologies with web enabled
              technology. Interactively coordinate proactive e-commerce process
              centric outside the box thinking completely pursue scalable
              customer service through sustainable potentialities. Collaboratively
              administrate turnkey channels whereas virtual retailers objectively
              seize scalable metrics whereas proactive services seamlessly empower
              fully researched growth strategies.
            </p>

            {/* Quote box */}
            <div className="service-details-quote">
              <p>
                <em>
                  The job market of the future will consist of those jobs that
                  robots cannot perform. Our blue-collar work is pattern
                  recognition, making sense of what you see.
                </em>
              </p>
            </div>

            <p className="service-details-text">
              Coordinate proactive e-commerce process centric outside the box
              thinking completely pursue scalable customer service through
              sustainable potentialities. Collaboratively administrate turnkey
              channels whereas virtual retailers objectively seize scalable.
            </p>

            {/* Benefits: 2x2 grid */}
            <div className="service-benefits-grid">
              <div className="service-benefit">
                <AccessTimeOutlined className="service-benefit-icon" />
                <div>
                  <h4>24/7 Availability</h4>
                  <p>Globally incubate standards before scalable benefits.</p>
                </div>
              </div>

              <div className="service-benefit">
                <MonetizationOnOutlined className="service-benefit-icon" />
                <div>
                  <h4>Affordable Price</h4>
                  <p>Globally incubate standards before scalable benefits.</p>
                </div>
              </div>

              <div className="service-benefit">
                <PrecisionManufacturingOutlined className="service-benefit-icon" />
                <div>
                  <h4>Process Technology</h4>
                  <p>Globally incubate standards before scalable benefits.</p>
                </div>
              </div>

              <div className="service-benefit">
                <CalculateOutlined className="service-benefit-icon" />
                <div>
                  <h4>Free Estimation</h4>
                  <p>Globally incubate standards before scalable benefits.</p>
                </div>
              </div>
            </div>
            <section className="service-key-benefits">
              <h2>Key benefits With Our Service</h2>
              <p className="benefits-intro">
                Scalable customer service through sustainable potentialities
                collaboratively administrate turnkey channels whereas virtual retailers
                objectively seize scalable metrics whereas proactive services seamlessly
                empower fully researched growth strategies.
              </p>

              <div className="benefits-layout">
                {/* LEFT – BULLET LIST */}
                <ul className="benefits-list">
                  <li>
                    <CheckCircleSharpIcon className="benefit-icon" />
                    <span>Experience investor technician.</span>
                  </li>
                  <li>
                    <CheckCircleSharpIcon className="benefit-icon" />
                    <span>Your Electrical and Security System.</span>
                  </li>
                  <li>
                    <CheckCircleSharpIcon className="benefit-icon" />
                    <span>Sources whereas high standards.</span>
                  </li>
                  <li>
                    <CheckCircleSharpIcon className="benefit-icon" />
                    <span>Credibly innovate granular internal services.</span>
                  </li>
                  <li>
                    <CheckCircleSharpIcon className="benefit-icon" />
                    <span>Services for domestic and commercial.</span>
                  </li>
                </ul>

                {/* RIGHT – IMAGE */}
                <div className="benefits-image">
                  <img src="/partners/team.png" alt="Service benefits" />
                </div>
              </div>
            </section>
            <section className="experts-section">
            <h2 className="experts-title">Our Experts Team</h2>

            <div className="experts-grid">
              {/* CARD 1 */}
              <article className="expert-card">
                <div className="expert-img">
                  <img src="/partners/team.png" alt="Jonathan Leon" />
                </div>

                <div className="expert-content">
                  <h3 className="expert-name">Jonathan Leon</h3>
                  <p className="expert-role">Chief Creative Officer</p>

                  <div className="expert-social">
                    <a href="#">
                      <FacebookRoundedIcon className="social-icon" />
                    </a>
                    <a href="#">
                      <XIcon className="social-icon" />
                    </a>
                    <a href="#">
                      <PinterestIcon className="social-icon" />
                    </a>
                  </div>
                </div>
              </article>

              {/* CARD 2 */}
              <article className="expert-card">
                <div className="expert-img">
                  <img src="/partners/team.png" alt="Sarah Aileah" />
                </div>

                <div className="expert-content">
                  <h3 className="expert-name">Sarah Aileah</h3>
                  <p className="expert-role">Co Founder</p>

                  <div className="expert-social">
                    <a href="#">
                      <FacebookRoundedIcon className="social-icon" />
                    </a>
                    <a href="#">
                      <XIcon className="social-icon" />
                    </a>
                    <a href="#">
                      <PinterestIcon className="social-icon" />
                    </a>
                  </div>
                </div>
              </article>
            </div>
          </section>
          </div>
        </div>
      </section>
      <Cta />
      
    </main>
  );
}
