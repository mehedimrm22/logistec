// src/pages/NotFound.jsx
import { Link } from "react-router-dom";
import "../styles/notFound.css";
import Cta from "../components/Cta";

export default function NotFound() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <h1>Error Page</h1>

          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span>›</span>
            <p>404 - Not Found</p>
          </div>
        </div>
      </section>

      {/* BODY */}
      <section className="error-body">
        <div className="container error-body-inner">
          <p className="error-code">404</p>
          <h2 className="error-heading">
            Oops! That page can&apos;t be found
          </h2>
          <p className="error-text">
            Sorry, but the page you are looking for does not exist
          </p>

          <Link to="/" className="error-btn">
            Go To Home
          </Link>
        </div>
      </section>
      <Cta />
    </main>
  );
}
