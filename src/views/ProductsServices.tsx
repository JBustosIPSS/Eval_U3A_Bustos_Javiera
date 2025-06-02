import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ProductsServicesServiceResponse } from '../assets/data_mock/products-services';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';
import ProductCard from '../components/ProductCard';
import ServiceCard from '../components/ServiceCard';

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
        const BASE_PATH_API_URL = process.env.REACT_APP_BASE_PATH_API_URL ? process.env.REACT_APP_BASE_PATH_API_URL : "";
        try {
            const response = await axios.get(`${BASE_PATH_API_URL}/backend-productsServices.php`);
            result = response.data;

            if (!result.data) {
                result.data = ProductsServicesServiceResponse.data;
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
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getProductsServices();
    }, []);


    const showInfoProductos = () => {
        return productsServices.data.productos.map(producto => (
            <div key={producto.id} className="col-md-6 col-lg-4 mb-4">
                <ProductCard producto={producto} />
            </div>
        ));
    };

    const showInfoServicios = () => {
        return productsServices.data.servicios.map(servicio => (
            <div key={servicio.id} className="col-md-6 col-lg-4 mb-4">
                <ServiceCard servicio={servicio} />
            </div>
        ));
    };

    return (
        <div>
            <Header seccionActual={'products-services'} />
            <section className="py-5" style={{ background: 'rgb(144 77 143 / 31%)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1><strong>Nuestros productos y servicios</strong></h1>
                        <p className="text-subtitle">
                            Conoce nuestra amplia gama de productos y servicios
                        </p>
                    </div>
                    <Spinner loading={loading} />
                    <div id="contenido-productsServices" style={{ display: loading ? 'none' : 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="w-100 text-center">
                            <h2 className="mb-4">Nuestros Productos</h2>
                        </div>
                        {productsServices.data.productos.length > 0 ? showInfoProductos() : null}
                    </div>
                    <hr className="my-5" />
                    <div id="contenido-servicios" style={{ display: loading ? 'none' : 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                        <div className="w-100 text-center">
                            <h2 className="mb-4">Nuestros Servicios</h2>
                        </div>
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
