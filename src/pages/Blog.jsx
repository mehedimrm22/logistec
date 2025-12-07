import React from "react";
import "../styles/blog.css";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";

export default function Blog() {

  const posts = [
  {
    id: 1,
    title: "How to Get Hired in the Logistic Industry.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
  {
    id: 2,
    title: "Don’t get stuck with the rest, truck with.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
  {
    id: 3,
    title: "Deserunt mollitia animid est laborum dolorum fuga.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
  {
    id: 4,
    title: "How to Get Hired in the Logistic Industry.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
  {
    id: 5,
    title: "Don’t get stuck with the rest, truck with.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
  {
    id: 6,
    title: "Deserunt mollitia animid est laborum dolorum fuga.",
    category: "Air Freight",
    comments: 3,
    image: "/partners/blog-thumb.png",
  },
];


  return (
    <main>
      {/* HERO / BREADCRUMB */}
      <section className="page-hero blog-hero">
        <div className="page-hero-inner">
          <h1 className="page-hero-title">Blog Grid</h1>

          <p className="page-hero-breadcrumb">
            <Link to="/" className="crumb-home">Home</Link>
            <span className="crumb-divider">›</span>
            <span>Blog Grid</span>
          </p>
        </div>
      </section>

       <section className="blog-grid-section">
        <div className="container blog-grid">
          {posts.map((post) => (
            <article key={post.id} className="blog-card">
              <div className="blog-card-image">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="blog-card-body">
                <div className="blog-card-meta">
                  <span>{post.category}</span>
                  <span>{post.comments} Comment</span>
                </div>

                <h3 className="blog-card-title">{post.title}</h3>

                <div className="blog-card-footer">
                  <Link to="#" className="blog-card-read">
                    Read More →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Cta />
      
    </main>
  );
};


