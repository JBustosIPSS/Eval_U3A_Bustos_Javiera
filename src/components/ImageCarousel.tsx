import React from 'react';

interface ImageCarouselProps {
  id: string;
  images: string[];
  interval?: number;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ id, images, interval = 5000 }) => {
  return (
    <div id={id} className="carousel slide" data-ride="carousel" data-interval={interval}>
      <ol className="carousel-indicators">
        {images.map((_, index) => (
          <li
            key={index}
            data-target={`#${id}`}
            data-slide-to={index}
            className={index === 0 ? 'active' : ''}
          ></li>
        ))}
      </ol>
      <div className="carousel-inner">
        {images.map((src, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <img src={src} className="d-block w-100" alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <a className="carousel-control-prev" href={`#${id}`} role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Anterior</span>
      </a>
      <a className="carousel-control-next" href={`#${id}`} role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Siguiente</span>
      </a>
    </div>
  );
};

export default ImageCarousel;
