import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsServicesServiceResponse } from '../assets/data_mock/products-services';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface Servicios {
    id: number;
    nombre: string;
    ubicacion: string;
    cupos: number;
    fecha: string;
    imgs: string[];
}

interface Productos {
    id: number;
    nombre: string;
    descripcion: string;
    tallas: string[];
    colores: string[];
    precio: number;
    imgs: string[];
}

interface ProductsServicesApi {
    data: {
        productos: Productos[];
        servicios: Servicios[];
    };
}

const ProductsServices: React.FC = () => {
    const [productsServices, setProductsServices] = useState<ProductsServicesApi>({ data: { productos: [], servicios: [] } });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const getProductsServices = async () => {
        let result: ProductsServicesApi = { data: { productos: [], servicios: [] } };
        try {
            const response = await axios.get('backend-productsServices.php');
            result = response.data;
            console.log(result);

            if (!result.data) {
                response.data = ProductsServicesServiceResponse;
                console.log("Servicio no disponible temporalmente o no entrega el formato esperado.")
            }

        } catch (err: any) {
            result.data = ProductsServicesServiceResponse.data;
            console.error('Error al obtener los productos:', err.message);
            setError('Servicio no disponible temporalmente. Se despliega data de prueba.');
        } finally {
            setProductsServices(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        getProductsServices();
    }, []);

    const showInfoProductos = () => {
        return productsServices.data.productos.map((producto) => (
            <div key={producto.id} className="col-md-6 col-lg-3 mb-4">
                <div className="card-servicio h-100">
                    <img
                        src={producto.imgs[0]}
                        alt={producto.nombre}
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>{producto.nombre}</h4>
                    <p>{producto.descripcion}</p>
                    <div>
                        <strong>Tallas disponibles:</strong>
                        <ul>
                            {producto.tallas.map((talla, index) => (
                                <li key={index}>{talla}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <strong>Colores disponibles:</strong>
                        <ul>
                            {producto.colores.map((color, index) => (
                                <li key={index}>{color}</li>
                            ))}
                        </ul>
                    </div>
                    <p className="mt-2">
                        <strong>Precio:</strong> ${producto.precio}
                    </p>
                </div>
            </div>
        ));
    };

    const showInfoServicios = () => {
        return productsServices.data.servicios.map((servicio) => (
            <div key={servicio.id} className="col-md-6 col-lg-3 mb-4">
                <div className="card-servicio h-100">
                    <img
                        src={servicio.imgs[0]}
                        alt={servicio.nombre}
                        className="img-fluid"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h4>{servicio.nombre}</h4>
                    <p>Ubicación: {servicio.ubicacion}</p>
                    <p>Cantidad de cupos disponibles: {servicio.cupos}</p>
                    <p>Fecha: {servicio.fecha}</p>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <Header seccionActual={'productsServices'} />
            <section className="py-5" style={{ background: '#012d3e', color: 'white' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1><strong>Nuestros productos y servicios</strong></h1>
                        <p className="text-subtitle" style={{ color: '#ccc' }}>
                            Conoce nuestra amplia gama de productos y servicios
                        </p>
                    </div>
                    <div>
                        <div id="loading" style={{ display: loading ? 'block' : 'none' }}>
                            Cargando...
                        </div>
                    </div>

                    <div id="contenido-productsServices" style={{ display: loading ? 'none' : 'flex', flexWrap: 'wrap' }}>
                        {productsServices.data.productos.length > 0 ? showInfoProductos() : null}
                        {productsServices.data.servicios.length > 0 ? showInfoServicios() : null}
                    </div>
                    {error && (
                        <div className="alert alert-danger text-center">
                            <strong>Error:</strong> {error}
                        </div>
                    )}
                </div>
            </section >
            <Footer />
        </div >
    );
};

export default ProductsServices;
