import { Link } from 'react-router-dom'

export default function ServiceCard({ service }) {
  return (
    <div className="card">
      <h3 className="service-card-title">{service.title}</h3>
      <p className="service-card-summary">{service.summary}</p>
      <Link to={`/services/${service.id}`} className="service-card-link">
        View details →
      </Link>
    </div>
  )
}
