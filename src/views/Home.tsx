import { Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ImageCarousel from "../components/ImageCarousel";
import { ImagesCarousel } from "../assets/assets.data";

const Home: React.FC = () => {
    return (
        <div>
            <Header seccionActual={'home'} />
            <section id="inicio" style={{ background: 'rgb(144 77 143 / 31%)', color: 'black'}}>
                <div className="container">
                    <div className="text-center">
                        <h1><strong>Tejelanas Vivi</strong></h1>
                        <h3 className="text-main-subtitle">
                            Emprendimiento edicado a la venta de insumos para tejido, destacando por ofrecer lanas naturales y vellón.
                        </h3>
                         <ImageCarousel id="carouselProductos" images={ImagesCarousel} interval={4000} />
                         <br></br>
                        <Link to="/products-services" className="btn btn-primary">
                            Conoce nuestros productos y servicios
                        </Link>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;