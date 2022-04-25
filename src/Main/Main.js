import React from 'react';
import backgroundImg from '../background.png';
import './Main.css';
//import '../ZodiacCard/ZodiacCard.css';
import ZodiacCard from '../ZodiacCard/ZodiacCard.js';

export default function Main(props) {
  return (
    <main style={{ backgroundImage: `url(${backgroundImg})` }}>
      {props.array.map(prop => 
        <ZodiacCard
          key={prop.name}
          name={prop.name}
          dates={prop.dates}
        />)
      }
    </main>
  );
}
