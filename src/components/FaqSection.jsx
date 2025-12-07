import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import "../styles/faq.css"

const faqItems = [
  {
    id: 1,
    question: "Can I specify a delivery date when ordering?",
    answer:
      "Yes, you can request a preferred delivery date and we do our best to align transport, routing and warehousing to that schedule.",
  },
  {
    id: 2,
    question: "What is off page SEO link building?",
    answer:
      "We focus on logistics-related SEO strategies that help your transport services appear for the right customers, without affecting shipment operations.",
  },
  {
    id: 3,
    question: "How investing in dependent logistics can help?",
    answer:
      "Reliable logistics improves customer satisfaction, reduces delays and creates measurable long-term value for your company.",
  },
  {
    id: 4,
    question: "High quality data security",
    answer:
      "We safeguard shipment data, tracking information and customer details using encrypted connections and secure storage.",
  },
];

export default function FaqSection() {
  const [openFaqId, setOpenFaqId] = useState(2);

  const toggleFaq = (id) => {
    setOpenFaqId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="home-section faq-section">
      <div className="faq-wrapper">
        {/* Left side */}
        <div className="faq-left">
          <p className="home-kicker">Frequently Ask Questions</p>
          <h2 className="section-title faq-title">
            What mostly people ask us about
          </h2>

          <div className="faq-list">
            {faqItems.map((item) => {
              const isOpen = item.id === openFaqId;
              return (
                <article
                  key={item.id}
                  className={`faq-item ${isOpen ? "faq-item-open" : ""}`}
                  onClick={() => toggleFaq(item.id)}
                >
                  <div className="faq-question-row">
                    <p className="faq-question">{item.question}</p>
                    <button
                      className="faq-toggle-btn"
                      type="button"
                      aria-label={isOpen ? "Collapse" : "Expand"}
                    >
                      {isOpen ? (
                        <RemoveIcon fontSize="small" />
                      ) : (
                        <AddIcon fontSize="small" />
                      )}
                    </button>
                  </div>

                  <div
                    className={`faq-answer-wrapper ${
                      isOpen ? "open" : ""
                    }`}
                  >
                    <p className="faq-answer">{item.answer}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Right image */}
        <div className="faq-right">
          <img
            src="/partners/faq.png"
            alt="FAQ illustration"
            className="faq-image"
          />
        </div>
      </div>
    </section>
  );
}
