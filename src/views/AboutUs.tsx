import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AboutUsServiceResponse } from '../assets/data_mock/about-us';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface AboutUsApi {
    data: string;
};


const AboutUs: React.FC = () => {
    const loadingMessage = 'Cargando...';
    const [serviceResponse, setDatos] = useState<AboutUsApi>({ data: loadingMessage });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const cargarDatosEmpresa = async () => {
        let result: AboutUsApi = { data: loadingMessage };
        try {
            const response = await axios.get('backend-aboutUs.php');
            result = response.data;
            console.log(result);

            if (!result.data) {
                response.data = AboutUsServiceResponse;
                console.log("Servicio no disponible temporalmente o no entrega el formato esperado.")
            }
        } catch (err: any) {
            result.data = AboutUsServiceResponse.data;
            console.error('Error al obtener la información:', err.message);
            setError('Servicio no disponible temporalmente. Se despliega data de prueba.');
        } finally {
            setDatos(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        cargarDatosEmpresa();
    }, []);

    const mostrarInformacion = () => {
        return (
            <div className="mb-4">
                <p>{serviceResponse.data}</p>
            </div>
        );
    };

    return (
        <div>
            <Header seccionActual={'aboutUs'} />
            <section className="py-5" style={{ background: '#012d3e', color: 'white' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1><strong>Quienes Somos</strong></h1>
                        <p className="text-subtitle" style={{ color: '#ccc' }}>
                        </p>
                    </div>
                    <div>
                        <div id="loading" style={{ display: loading ? 'block' : 'none' }}>
                            Cargando...
                        </div>
                        <div id="contenido-aboutUs" style={{ display: loading ? 'none' : 'flex' }}>

                            {mostrarInformacion()}
                        </div>
                    </div>

                    {error && (
                        <div className="alert alert-danger mt-4">
                            <strong>Error:</strong> {error}
                        </div>
                    )}

                </div>
            </section>
            <Footer />
        </div>
    );
};

export default AboutUs;
