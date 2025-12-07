import { useState } from "react";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import "../styles/featured.css";

const featuredProjects = [
  {
    id: 1,
    title: "Shipping Transport",
    category: "Distribution",
    image: "/partners/slider.png",
  },
  {
    id: 2,
    title: "Warehouse Management",
    category: "Logistics",
    image: "/partners/slider.png",
  },
  {
    id: 3,
    title: "International Freight",
    category: "Global Service",
    image: "/partners/slider.png",
  },
  {
    id: 4,
    title: "Cargo Delivery",
    category: "Transport",
    image: "/partners/slider.png",
  },
];

export default function FeaturedSection() {
  const [startIndex, setStartIndex] = useState(0);
  const visibleProjects = featuredProjects.slice(startIndex, startIndex + 3);

  const handleNext = () => {
    if (startIndex < featuredProjects.length - 3) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="home-section featured-section">
      <div className="featured-header">
        <div>
          <p className="home-kicker">Portfolio</p>
          <h2 className="section-title">Featured Project</h2>
        </div>

        <div className="featured-arrows">
          <button
            className="featured-arrow-btn featured-arrow-prev"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <ArrowBackIosNewOutlinedIcon fontSize="small" />
          </button>
          <button
            className="featured-arrow-btn featured-arrow-next"
            onClick={handleNext}
            disabled={startIndex >= featuredProjects.length - 3}
          >
            <ArrowForwardIosOutlinedIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div className="featured-grid">
        {visibleProjects.map((project) => (
          <article key={project.id} className="featured-card">
            <img
              src={project.image}
              alt={project.title}
              className="featured-image"
            />
            <div className="featured-overlay">
              <div className="featured-arrow-square">➝</div>
              <div className="featured-text">
                <span className="featured-category">{project.category}</span>
                <h3 className="featured-title">{project.title}</h3>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
