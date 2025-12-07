import { Link } from "react-router-dom";
import "../styles/about.css";
import FeaturedSection from "../components/FeaturedSection";
import FaqSection from "../components/FaqSection";
import ProcessSection from "../components/ProcessSection";
import AboutServices from "../components/AboutServices";
import TeamSection from "../components/TeamSection";
import Cta from "../components/Cta";
import PublicOutlinedIcon from "@mui/icons-material/PublicOutlined";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";



export default function About() {
  return (
    <main>
      <div className="container">
        {/* ABOUT HERO */}
        <section className="about-hero">
          <div className="about-hero-inner">
            <h1>About Us</h1>

            <div className="about-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <span>About us</span>
            </div>
          </div>
        </section>

        {/* ABOUT LOGISTICS */}
        <section className="about-logistics">
          <div className="container about-logistics-inner">
            {/* Left image */}
            <div className="about-logistics-image">
              <img
                src="/partners/about1.png"
                alt="Logistics Solutions"
              />
            </div>

            {/* Right content */}
            <div className="about-logistics-content">
              <h2>Logistics Solutions</h2>
              <p className="about-logistics-text">
                Providing an independent advice and identifying the right fit
                for you. Services are sourced and procured based.
              </p>

              <div className="about-logistics-features">
                {/* Feature 1 */}
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <PublicOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h3>Worldwide Service</h3>
                    <p>
                      Lorem ipsum is simply velit anodipas aliquet enean quis.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="about-feature">
                  <div className="about-feature-icon">
                    <VerifiedOutlinedIcon fontSize="small" />
                  </div>
                  <div>
                    <h3>Certified &amp; Award Winner</h3>
                    <p>
                      Lorem ipsum is simply velit anodipas aliquet enean quis.
                    </p>
                  </div>
                </div>
              </div>

              <Link to="/services" className="about-read-btn">
                Read More
              </Link>
            </div>
          </div>
        </section>

        <FeaturedSection />
        <FaqSection />
        <ProcessSection />
        <AboutServices />
        <TeamSection />
        <Cta />

      </div>
    </main>
  );
}
