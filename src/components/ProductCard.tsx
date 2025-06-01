import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Producto {
    id: number;
    nombre: string;
    descripcion: string;
    tallas: string[];
    colores: string[];
    precio: number;
    imgs: string[];
}

const ProductCard: React.FC<{ producto: Producto }> = ({ producto }) => {
    const navigate = useNavigate();

    const handleContactClick = () => {
        navigate(`/contact-us?producto=${encodeURIComponent(producto.nombre)}`);
    };

    return (
        <div className="card h-100 shadow-sm border-0" style={{ backgroundColor: '#fff0fb', borderRadius: '10px' }}>
            <img
                src={producto.imgs[0]}
                alt={producto.nombre}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '250px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
            />
            <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-center" style={{ color: '#90308e' }}><strong>{producto.nombre}</strong></h5>
                <p>{producto.descripcion}</p>

                <div>
                    <strong>Tallas:</strong>
                    <ul>
                        {producto.tallas.length > 0 ? producto.tallas.map((talla, idx) => (
                            <li key={idx}>{talla}</li>
                        )) : 'No disponible'}
                    </ul>
                </div>

                <div>
                    <strong>Colores:</strong>
                    <ul>
                        {producto.colores.length > 0 ? producto.colores.map((color, idx) => (
                            <li key={idx}>{color}</li>
                        )) : 'No disponible'}
                    </ul>
                </div>

                <p><strong>Precio:</strong> ${producto.precio}</p>

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

export default ProductCard;
