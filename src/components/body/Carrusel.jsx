import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

export const Carrusel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/img/banner/banner.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/banner/banner.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/img/banner/banner.jpg" className='d-block w-100' alt="" style={{ height: '50vh', objectFit: 'cover' }} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Carrusel;
