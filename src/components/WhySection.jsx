import React from "react";
import "../styles/why.css";
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ShareLocationOutlinedIcon from '@mui/icons-material/ShareLocationOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

export default function WhySection() {

    const advantages = [
    {
      id: 1,
      title: 'Safe Packing',
      description:
        'Wherever your cargo is going, we can arrange the shipment for you and remain.',
      icon: Inventory2OutlinedIcon,
    },
    {
      id: 2,
      title: 'Ship Everywhere',
      description:
        'Wherever your cargo is going, we can arrange the shipment for you and remain.',
      icon: ShareLocationOutlinedIcon,
    },
    {
      id: 3,
      title: 'In Time Delivery',
      description:
        'Wherever your cargo is going, we can arrange the shipment for you and remain.',
      icon: AccessTimeOutlinedIcon,
    },
    {
      id: 4,
      title: 'Fastest Shipping',
      description:
        'Wherever your cargo is going, we can arrange the shipment for you and remain.',
      icon: LocalShippingOutlinedIcon,
    },
  ];

  return (
    <section className="home-section why-section">
      <div className="why-wrapper container">
        
        {/* LEFT SIDE */}
        <div className="why-left">
          <p className="home-kicker">Why Outports</p>
          <h2 className="why-title">
            Why should you choose our service, here are the advantages we offer
          </h2>
          <p className="why-text">
            Providing an independent advice and identifying the right fit for you.
            Services are sourced and procured based.
          </p>

          <button className="btn btn-primary">Get A Free Quote</button>
        </div>

        {/* RIGHT SIDE – CARDS */}
        <div className="why-right">
          <div className="why-list">
            {advantages.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.id} className="why-card">
                  <div className="why-card-icon-box">
                    <Icon className="why-card-icon" />
                  </div>

                  <div className="why-card-content">
                    <h3 className="why-card-title">{item.title}</h3>
                    <p className="why-card-description">{item.description}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
