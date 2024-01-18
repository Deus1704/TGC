import React, { useState, useEffect } from 'react';
import './carousal.css';

const Carousel = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);
  const photos = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQirv1J7GQOkwEp0fLF0x_hDB31yj6-e8uJduZwy_bBX7yV_r-0zQqciMRIoXnmxnCciA&usqp=CAU',
    'https://logicsimplified.com/newgames/wp-content/uploads/2020/07/HTML5-Games.png',
    '/images/Vector_unknown.svg',
    '/images/Rectangle_9.png'
  ];

  const goToNextPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === photos.length - 1 ? 0 : prevPhoto + 1));
  };

  const goToPreviousPhoto = () => {
    setCurrentPhoto((prevPhoto) => (prevPhoto === 0 ? photos.length - 1 : prevPhoto - 1));
  };

  useEffect(() => {
    const interval = setInterval(goToNextPhoto, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="carousel">
      <button onClick={goToPreviousPhoto}>&lt;</button>
      <div className="photo-container">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Photo ${index + 1}`}
            className={index === currentPhoto ? 'active' : 'hidden'}
          />
        ))}
      </div>
      <button onClick={goToNextPhoto}>&gt;</button>
    </div>
  );
};

export default Carousel;
