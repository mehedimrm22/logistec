import React, {useState} from "react";
import "../styles/team.css";
import Cta from "../components/Cta";
import { Link } from "react-router-dom";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function Team() {

  const teamMembers = [
      {
          id: 1,
          name: 'Jonathan Leon',
          role: 'Chief Creative Officer',
          image: '/partners/team.png',
      },
      {
          id: 2,
          name: 'Sarah Aileah',
          role: 'Co Founder',
          image: '/partners/team.png',
      },
      {
          id: 3,
          name: 'Dean Johaness',
          role: 'Consultant',
          image: '/partners/team.png',
      },
      {
          id: 4,
          name: 'Jonathan Leon',
          role: 'Chief Creative Officer',
          image: '/partners/team.png',
      },
      {
          id: 5,
          name: 'Sarah Aileah',
          role: 'Co Founder',
          image: '/partners/team.png',
      },
      {
          id: 6,
          name: 'Dean Johaness',
          role: 'Consultant',
          image: '/partners/team.png',
      },
      
];

const PAGE_SIZE = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(teamMembers.length / PAGE_SIZE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  const handleNext = () => {
    goToPage(currentPage + 1);
  };

  return (
    <main>
      <div className="team-hero">
        <div className="team-hero-content">
          <h1 className="team-title">Expert Team</h1>

          <p className="team-breadcrumb">
            <Link to="/" className="crumb-home">Home</Link>
            <span className="crumb-divider">›</span> Team
          </p>
        </div>

        
      </div>
    <div className="team-grid container">
        {teamMembers.map((member) => (
          <article key={member.id} className="team-card">
            <div className="team-photo-wrapper">
              <img
                src={member.image}
                alt={member.name}
                className="team-photo"
              />
            </div>

            <div className="team-info">
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.role}</p>

              <div className="team-social">
                <button className="team-social-btn" type="button">
                  <FacebookOutlinedIcon fontSize="small" />
                </button>
                <button className="team-social-btn" type="button">
                  <XIcon fontSize="small" />
                </button>
                <button className="team-social-btn" type="button">
                  <PinterestIcon fontSize="small" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="team-pagination">
        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              className={
                page === currentPage
                  ? "page-btn page-btn-active"
                  : "page-btn"
              }
              type="button"
              onClick={() => goToPage(page)}
            >
              {page}
            </button>
          );
        })}

        <button
          type="button"
          className="page-btn page-btn-arrow"
          onClick={handleNext}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
      </div>
      <Cta />
    </main>
  );
};

