import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Servicio {
  id: number;
  nombre: string;
  ubicacion: string;
  cupos: number;
  fecha: string;
  imgs: string[];
}

const ServiceCard: React.FC<{ servicio: Servicio }> = ({ servicio }) => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate(`/contact-us?servicio=${encodeURIComponent(servicio.nombre)}`);
  };

  return (
    <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#fff0fb', borderRadius: '10px' }}>
      <img
        src={servicio.imgs[0]}
        alt={servicio.nombre}
        className="card-img-top"
        style={{ objectFit: 'cover', height: '250px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
      />
      <div className="card-body d-flex flex-column justify-content-between">
        <h5 className="card-title text-center" style={{ color: '#90308e' }}><strong>{servicio.nombre}</strong></h5>
        <p><strong>Ubicación:</strong> {servicio.ubicacion}</p>
        <p><strong>Cupos:</strong> {servicio.cupos}</p>
        <p><strong>Fecha:</strong> {servicio.fecha}</p>

        <button
          className="btn btn-outline-primary mt-2"
          style={{ borderColor: '#90308e', color: '#90308e' }}
          onClick={handleContactClick}
        >
          Contáctanos
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
