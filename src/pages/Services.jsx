import "../styles/services.css";
import { Link } from "react-router-dom";
import AboutExpert from "../components/AboutExpert";
import WhySection from "../components/WhySection";
import Testimonials from "../components/Testimonials";
import TeamSection from "../components/TeamSection";
import Cta from "../components/Cta";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import WarehouseOutlinedIcon from "@mui/icons-material/WarehouseOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import EuroSymbolSharpIcon from '@mui/icons-material/EuroSymbolSharp';


export default function Service() {

  const features = [
    {
      id: 1,
      title: "Transparent Pricing",
      icon: <EuroSymbolSharpIcon />,
    },
    {
      id: 2,
      title: "Fast Delivery",
      icon: <LocalShippingOutlinedIcon />,
    },
    {
      id: 3,
      title: "Easy Payments",
      icon: <CreditCardOutlinedIcon />,
    },
    {
      id: 4,
      title: "Security For Cargo",
      icon: <SecurityOutlinedIcon />,
    },
    {
      id: 5,
      title: "Warehouse Storage",
      icon: <WarehouseOutlinedIcon />,
    },
    {
      id: 6,
      title: "24/7 Hours Support",
      icon: <AccessTimeOutlinedIcon />,
    },
  ];

  return (
    <main>
      {/* --- SERVICES HERO --- */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Services</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <p>Services</p>
          </div>
        </div>
      </section>

      <section className="service-features">
        <div className="container">
          <p className="section-kicker">Features</p>
          <h2 className="section-title">
            Special Features Thats Make You <br />
            Happy And Cheer Up!
          </h2>

          <div className="features-grid">
            {features.map((item) => (
              <article key={item.id} className="feature-card">
                <div className="feature-icon-box">
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>
                  Rationally encounter consequences that are extremely painful. Nor
                  again is there anyone who loves or pursues.
                </p>
              </article>
            ))}
          </div>

          <div className="features-btn-wrap">
            <Link to="/Services/1" className="features-btn">
              See More →
            </Link>
          </div>
        </div>
      </section>

      <AboutExpert image="/partners/aboutexpert.png" />
      <WhySection />
      <Testimonials />
      <TeamSection />
      <Cta />

    </main>
  );
}
