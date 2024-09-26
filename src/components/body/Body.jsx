import { useState } from 'react';
import { Carrusel } from './Carrusel';

export const Body = () => {
    const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <Carrusel/>
        <h2>body</h2>
    </div>
  )
}
