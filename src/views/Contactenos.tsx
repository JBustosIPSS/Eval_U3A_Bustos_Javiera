import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contactenos: React.FC = () => {

  const [error, setError] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string>('');

  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nombre || !correo || !mensaje) {
      setError('Por favor, completa todos los campos del formulario.');
      setSuccessMessage('');
      return;
    }

    const correoRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!correoRegex.test(correo)) {
      setError('Por favor, ingresa un correo electrónico válido.');
      setSuccessMessage('');
      return;
    }

    setError('');
    setSuccessMessage('Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.');

    console.log("Formulario de contacto enviado:");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    setNombre('');
    setCorreo('');
    setMensaje('');
  };

  return (
    <div>
      <Header seccionActual={'contact-us'} />
      <section className="py-5" style={{ background: 'rgb(144 77 143 / 31%)' }}>
        <div className="container">
          <div className="text-center mb-5">
            <h1><strong>Contáctenos</strong></h1>
            <p className="text-subtitle">
              ¿Tienes consultas o quieres inscribirte en nuestros talleres de crochet? ¡Envíanos un mensaje!
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
              <div className="card shadow">
                <div className="card-body text-dark">
                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="nombre"><strong>Nombre completo: </strong></label>
                      <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        placeholder="Tu nombre completo"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="correo"><strong>Correo electrónico: </strong></label>
                      <input
                        type="email"
                        id="correo"
                        className="form-control"
                        placeholder="Tu correo electrónico"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="mensaje"><strong>Mensaje: </strong></label>
                      <textarea
                        id="mensaje"
                        rows={4}
                        className="form-control"
                        placeholder="Escribe tu mensaje..."
                        value={mensaje}
                        onChange={(e) => setMensaje(e.target.value)}
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block">Enviar mensaje</button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {error && (
            <div className="alert alert-danger mt-4">
              <strong>Error:</strong> {error}
            </div>
          )}

          {successMessage && (
            <div className="alert alert-success mt-4">
              <strong>Éxito:</strong> {successMessage}
            </div>
          )}

          <section className="contact-info text-white py-5">
            <div className="container text-center">
              <h4 className="mb-4">Información de contacto:</h4>
              <p className="mb-1"><strong>https://www.instagram.com/teje_lanas.vivi</strong></p>
              <p>TEJElANAS, ubicado en Laguna de Zapallar<br/>Chile</p>
              <p><strong>@teje_lanas.vivi</strong>
              </p>
            </div>
          </section>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contactenos;
