import "../styles/aboutServices.css";

const AboutServices = () => {
  return (
    <section className="about-services-section">

        {/* FULL-WIDTH BACKGROUND */}
        <div className="about-services-bg">
            <div className="about-services-header">
            <p className="section-kicker">What We Do</p>
            <h2 className="section-title">Professional Main Services</h2>
            <p className="section-subtext">
                All the Lorem Ipsum generators on the Internet tend to repeated this
                predefined chunks as necessary, making this the first generator on the Internet.
            </p>
            </div>
        </div>

        {/* WHITE FLOATING CARD */}
        <div className="about-services-card">
            <div className="services-card-left">
            <h3>Kind Affordable<br />Courier Transport.</h3>

            <p>
                We provide services in the field of road, sea, rail, air transportation
                and a full range of warehousing services.
            </p>

            <button className="choose-plan-btn">Choose Plan</button>
            </div>

            <div className="services-card-right">
            <img src="/partners/whatwedo.png" alt="Service" className="services-image" />
            
            </div>
        </div>
        </section>

  );
};

export default AboutServices;
