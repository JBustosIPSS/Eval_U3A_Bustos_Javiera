import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AboutUsServiceResponse } from '../assets/data_mock/about-us';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

interface AboutUsApi {
    data: string;
};


const AboutUs: React.FC = () => {
    const loadingMessage = 'Cargando...';
    const [serviceResponse, setData] = useState<AboutUsApi>({ data: loadingMessage });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const getAboutUsData = async () => {
        let result: AboutUsApi = { data: loadingMessage };
        const BASE_PATH_API_URL = process.env.REACT_APP_BASE_PATH_API_URL ? process.env.REACT_APP_BASE_PATH_API_URL : "not working";
        console.log(BASE_PATH_API_URL)
        try {
            const response = await axios.get(`${BASE_PATH_API_URL}/backend-aboutUs.php`);
            result = response.data;
            if (!result.data) {
                response.data = AboutUsServiceResponse;
                console.log("Servicio no disponible temporalmente o no entrega el formato esperado.")
            }
        } catch (err: any) {
            result.data = AboutUsServiceResponse.data;
            console.error('Error al obtener la información:', err.message);
            setError('Servicio no disponible temporalmente. Se despliega data de prueba.');
        } finally {
            setData(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getAboutUsData();
    }, []);

    const showInfoAboutUs = () => {
        return (
            <div className="mb-4">
                <p>{serviceResponse.data}</p>
            </div>
        );
    };

    return (
        <div>
            <Header seccionActual={'about-us'} />
            <section className="py-5" style={{ background: 'rgb(144 77 143 / 31%)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1><strong>Quienes Somos</strong></h1>
                        <p className="text-subtitle">Somos un emprendimiento ubicado en Laguna de Zapallar</p>
                    </div>
                    <div>
                        <Spinner loading={loading} />
                        <div style={{ display: loading ? 'none' : 'block' }}>
                        </div>
                        <div id="contenido-aboutUs" style={{ display: loading ? 'none' : 'flex' }}>
                            {showInfoAboutUs()}
                        </div>
                    </div>
                    <br></br>
                    {!loading && <div className="container text-center">
                        <p>Vendemos productos elaborados artesanalmente y organizamos talleres de crochet.<br />Realizamos despachos a Santiago y regiones a través de Starken y Chilexpress.</p>
                    </div>}
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
