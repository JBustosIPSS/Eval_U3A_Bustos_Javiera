import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaqServiceResponse } from '../assets/data_mock/faq';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Spinner from '../components/Spinner';

interface Faq {
    id: number;
    titulo: string;
    respuesta: string;
    activo: boolean;
}

interface FaqApi {
    data: Faq[];
}

const FaqPage: React.FC = () => {
    const [faqData, setFaqData] = useState<FaqApi>({ data: [] });
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string>('');

    const getFaqData = async () => {
        let result: FaqApi = { data: [] };
        const BASE_PATH_API_URL = process.env.REACT_APP_BASE_PATH_API_URL ? process.env.REACT_APP_BASE_PATH_API_URL : "";
        try {
            const response = await axios.get(`${BASE_PATH_API_URL}/backend-faq.php`);
            result = response.data;
            if (!result.data) {
                result.data = FaqServiceResponse.data;
                console.log("Servicio no disponible temporalmente o no entrega el formato esperado.")
            }
        } catch (err: any) {
            result.data = FaqServiceResponse.data;
            console.error('Error al obtener la información:', err.message);
            setError('Servicio no disponible temporalmente. Se despliega data de prueba.');
        } finally {
            setFaqData(result);
            setLoading(false);
        }
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        getFaqData();
    }, []);

    const showFaqs = () => {
        return faqData.data.map((faq) => (
            faq.activo ? (
                <div key={faq.id} className="faq-item mb-4">
                    <div className="faq-question" style={{ cursor: 'pointer' }} onClick={() => toggleAnswer(faq.id)}>
                        <h5>{faq.titulo}</h5>
                    </div>
                    <div id={`answer-${faq.id}`} className="faq-answer" style={{ display: 'none' }}>
                        <p>{faq.respuesta}</p>
                    </div>
                </div>
            ) : null
        ));
    };

    const toggleAnswer = (id: number) => {
        const answerElement = document.getElementById(`answer-${id}`);
        if (answerElement) {
            answerElement.style.display = answerElement.style.display === 'none' ? 'block' : 'none';
        }
    };

    return (
        <div>
            <Header seccionActual={'faq'} />
            <section className="faq-section py-5" style={{ background: 'rgb(144 77 143 / 31%)' }}>
                <div className="container">
                    <div className="text-center mb-5">
                        <h1><strong>Preguntas Frecuentes</strong></h1>
                        <p className="text-subtitle">
                            Encuentra respuestas a las preguntas más comunes sobre nuestros productos y servicios.
                        </p>
                    </div>
                    <Spinner loading={loading} />
                    <div id="faq-container" style={{ display: loading ? 'none' : 'block' }}>
                        {showFaqs()}
                    </div>
                    <br></br>
                    {error && (
                        <div className="alert alert-danger text-center">
                            <strong>Error:</strong> {error}
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default FaqPage;
