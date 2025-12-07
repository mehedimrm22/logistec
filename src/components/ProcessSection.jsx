import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import PaymentOutlinedIcon from "@mui/icons-material/PaymentOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import "../styles/home.css";
import "../styles/process.css";



export default function ProcessSection() {
  return (
    <section className="home-section process-section ">
            <p className="home-kicker">Our Work Process</p>
            <h2 className="section-title process-title">Way To Reach Success</h2>

            <div className="process-steps">
                <div className="process-line" />

                <div className="process-grid">
                    <div className="process-item">
                            <div className="process-circle">
                                <span className="process-number">1</span>
                                <AssignmentOutlinedIcon className="process-icon" />
                            </div>
                            <p className="process-text">Enter your &amp; product details</p>
                    </div>                    <div className="process-item">
                          <div className="process-circle">
                            <span className="process-number">2</span>
                            <PaymentOutlinedIcon className="process-icon" />
                          </div>
                          <p className="process-text">Pay your service charges</p>
                    </div>                    <div className="process-item">
                          <div className="process-circle">
                            <span className="process-number">3</span>
                            <LocalShippingOutlinedIcon className="process-icon" />
                          </div>
                          <p className="process-text">Ready to send your goods</p>
                    </div>                    <div className="process-item">
                          <div className="process-circle">
                            <span className="process-number">4</span>
                            <PhoneIphoneOutlinedIcon className="process-icon" />
                          </div>
                          <p className="process-text">Online Booking</p>
                    </div>
                </div>
        </div>
    </section>
  );
}
