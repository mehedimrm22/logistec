import React from 'react';
import FeaturedSection from "../components/FeaturedSection";
import FaqSection from "../components/FaqSection";
import ProcessSection from "../components/ProcessSection";
import TeamSection from "../components/TeamSection";
import WhySection from "../components/WhySection";
import Testimonials from '../components/Testimonials';
import Cta from "../components/Cta"
import { Link } from "react-router-dom";
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';




export default function Home() {

  return (
    <>
     
      <section className="home-hero-wrapper">
        <div className="container">
          <div className="home-hero">
            <div className="home-hero-content">
              <h1 className="home-hero-title">
                Fast &amp; Trusted
                <br />
                Transportation
                <br />
                service.
              </h1>
              <p className="home-hero-text">
                We provide services in the field of road, sea, rail and air transport
                and a full range of warehousing services.
              </p>
              <div className="home-hero-actions">
                <button className="btn btn-primary hero-btn">
                  Explore More &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <div className="container">
        <div className="home">
          {/* BRANDS */}
          <div className="trusted-logos-section">
            <div className="trusted-logos-container">
              <img src="/partners/snowflake.png" alt="Snowflake" />
              <img src="/partners/greenish.png" alt="Greenish" />
              <img src="/partners/colab.png" alt="Colab" />
              <img src="/partners/product.png" alt="Product" />
              <img src="/partners/umbrella.png" alt="Umbrella" />
            </div>
          </div>
          
        
          <WhySection />

          {/* ABOUT SECTION */}
          <section className="about-section">
            <div className="container">
              <div className="about-wrapper">

                {/* Left side video */}
                <div className="about-video">
                  <img
                    src="/partners/video-placeholder.png"
                    alt="Video Placeholder"
                    className="video-placeholder"
                  />
                </div>

                {/* Right side content */}
                <div className="about-content">
                  <p className="home-kicker">About Us</p>

                  <h2 className="about-title">
                    Digital Trusted Transport <br /> Logistic Company
                  </h2>

                  <p className="about-text">
                    There are many variations of passages of but the majority have in some form,
                    by injected humour or words which don’t look even slightly believable of but
                    the majority have suffered.
                  </p>

                  {/* Feature Cards */}
                  <div className="about-features">
                    <div className="about-feature-card">
                      <PublicOutlinedIcon className="about-feature-icon" />
                      <p>Global Service</p>
                    </div>

                    <div className="about-feature-card">
                      <LocationOnOutlinedIcon className="about-feature-icon" />
                      <p>Local Service</p>
                    </div>

                    <div className="about-feature-card">
                      <LocalShippingOutlinedIcon className="about-feature-icon" />
                      <p>Free Shipping</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </section>


          <ProcessSection />
          <FeaturedSection />
          <FaqSection />
          <TeamSection />
          <Testimonials />


          {/* NEWS */}
          <section className="news-section">
            <div className="container news-header-box">
              <div>
                <p className="home-kicker">News & Media</p>
                <h2 className="section-title">News & Articles</h2>
                <p className="news-subtext">
                  Family months lasted simple set nature of vulgar him. Picture for attempt.
                </p>
              </div>

              <Link to="/blog" className="view-all-btn">
                View All Post →
              </Link>
            </div>

            <div className="container news-grid">
              {/* CARD 1 */}
              <article className="news-card">
                <div className="news-img">
                  <img src="/partners/blog.png" alt="Blog 1" />
                </div>

                <div className="news-meta">
                  <span>Air Freight</span>
                  <span>3 Comment</span>
                </div>

                <h3 className="news-title">How to Get Hired in the Logistic Industry.</h3>

                <div className="news-footer">
                  <Link className="read-more">Read More →</Link>
                  <span className="circle-icon"></span>
                </div>
              </article>

              {/* CARD 2 */}
              <article className="news-card">
                <div className="news-img">
                  <img src="/partners/blog.png" alt="Blog 2" />
                </div>

                <div className="news-meta">
                  <span>Air Freight</span>
                  <span>Comment</span>
                </div>

                <h3 className="news-title">Don’t get stuck with the rest, truck with.</h3>

                <div className="news-footer">
                  <Link className="read-more">Read More →</Link>
                  <span className="circle-icon"></span>
                </div>
              </article>

              {/* CARD 3 */}
              <article className="news-card">
                <div className="news-img">
                  <img src="/partners/blog.png" alt="Blog 3" />
                </div>

                <div className="news-meta">
                  <span>Air Freight</span>
                  <span>3 Comment</span>
                </div>

                <h3 className="news-title">
                  Deserunt mollitia aliquid est laborum dolorum fuga.
                </h3>

                <div className="news-footer">
                  <Link className="read-more">Read More →</Link>
                  <span className="circle-icon"></span>
                </div>
              </article>
            </div>
          </section>


          <Cta />



        </div>
      </div>
    </>
  )
}
