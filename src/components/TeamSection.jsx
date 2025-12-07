import React from "react";
import "../styles/team.css";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import XIcon from '@mui/icons-material/X';
import PinterestIcon from '@mui/icons-material/Pinterest';

export default function TeamSection() {

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
      
];

  return (
    <section className="home-section team-section">
      <div className="container-services">
      <p className="home-kicker">Dedicated Team</p>
      <h2 className="section-title">Our Transport Expert Team</h2>

      <div className="team-grid">
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
      </div>
    </section>
  );
}
