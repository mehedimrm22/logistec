import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">

        {/* COLUMN 1 */}
        <div className="footer-col">
          <img src={logo} alt="Logistec Logo" className="footer-logo" />

          <p className="footer-text">
            Logistics solutions providers to the ecommerce industry in India have seen
            many-fold growth during the pandemic as consumers preferred.
          </p>
        </div>

        {/* COLUMN 2 */}
        <div className="footer-col">
          <h4>Other Links</h4>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/team">Team</Link>
          <Link to="/services">Services</Link>
          <Link to="/logistic">Logistic</Link>
        </div>

        {/* COLUMN 3 */}
        <div className="footer-col">
          <h4>The Platform</h4>
          <Link to="/team">Our Team</Link>
          <Link to="/news">Our News</Link>
          <Link to="/transport">Transport</Link>
          <Link to="/freight">Freight</Link>
          <Link to="/logistic">Logistic</Link>
        </div>

        {/* COLUMN 4 */}
        <div className="footer-col">
          <h4>Contact Us</h4>

          <p className="contact-line">
            <LocalPhoneIcon /> +088 65952 23366
          </p>
          <p className="contact-line">
            <EmailIcon /> info.rdevs@gmail.com
          </p>
          <p className="contact-line">
            <LocationOnIcon /> Address: 45 Anderson Road, East New York
          </p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom container">
        <p>Copyright © Logistec | Powered by RRDevs</p>

        <div className="bottom-links">
          <Link to="/support">Support</Link>
          <Link to="/services">Services</Link>
          <Link to="/terms">Terms & Condition</Link>
        </div>
      </div>
    </footer>
  );
}
