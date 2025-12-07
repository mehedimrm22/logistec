import React from "react";
import "../styles/testimonials.css";
export default function Testimonials() {

    const testimonials = [
    {
      id: 1,
      name: 'Porter Victoria',
      role: 'CEO–Founder',
      text: 'Through gaining experience in various economic ods, our team are able to identify the best opportunities we are in good times or bad.',
      rating: 5,
      avatar: '/partners/client.png',
    },
    {
      id: 2,
      name: 'Ronald Richards',
      role: 'Manager',
      text: 'Through gaining experience in various economic ods, our team are able to identify the best opportunities we are in good times or bad.',
      rating: 5,
      avatar: '/partners/client.png',
    },
    {
      id: 3,
      name: 'Anina Taylor',
      role: 'Marketing',
      text: 'Through gaining experience in various economic ods, our team are able to identify the best opportunities we are in good times or bad.',
      rating: 4,
      avatar: '/partners/client.png',
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        
        {/* HEADER */}
        <div className="testimonial-header">
          <p className="home-kicker light-kicker">Testimonial</p>
          <h2 className="testimonial-title">
            What people and clients think<br />about us?
          </h2>
        </div>

        {/* GRID */}
        <div className="testimonial-grid">
          {testimonials.map((item) => (
            <article key={item.id} className="testimonial-card">
              
              {/* RATING */}
              <div className="testimonial-rating">
                {"★★★★★".slice(0, item.rating)}
              </div>

              {/* TEXT */}
              <p className="testimonial-text">{item.text}</p>

              {/* FOOTER */}
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  <img src={item.avatar} alt={item.name} />
                </div>

                <div className="testimonial-person">
                  <p className="testimonial-name">{item.name}</p>
                  <p className="testimonial-role">{item.role}</p>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
