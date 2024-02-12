import React, { useState, useEffect } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '@/app/styles/ClimaCard.module.css';

async function testConnection(url) {
  try {
    const res = await fetch(url);
    if (res.ok) {
      return true;
    }
    return false;
  } catch (error) {
    return false;
  }
}

async function getClimas() {
  const url = "http://localhost:8000/api/v1/clima/?key=123";
  //const url = "http://localhost:8000/api/v1/clima/";
  const isConnected = await testConnection(url);
  if (!isConnected) {
    return { error: true, data: [] };
  }

  const res = await fetch(url);
  const data = await res.json();
  return { error: false, data };
}

export default function ClimaList() {
  const [clima, setClima] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchClimas() {
      const { error, data } = await getClimas();
      if (error) {
        setError(true);
        setClima([]);
      } else {
        setClima(data);
      }
    }
    fetchClimas();
  }, []);

  if (error) {
    return <h1 className='flex flex-col items-center h-full py-10'>Error de conexión.</h1>;
  }

  // Configuración del carrusel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      centermode: true,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      centermode: true,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      centermode: true,
    },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={5000} // milisegundos
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {clima.map((climaItem) => (
        <div key={climaItem.id} className='flex flex-col items-center h-full py-10'>
          <div className={styles.card}>
            <div className={styles.backgroundImage} style={{ backgroundImage: `url(/imgs/background.png)` }}>
              <h2 className={styles.cityName}>{climaItem.ciudad}</h2>
              <h2 className={styles.fecha}>{climaItem.fecha}</h2>
              <p className={styles.tempCard}>{climaItem.temperatura}°</p>
              <h2 className={styles.tipoClima}>Clima / Soleado</h2>
            </div>
            <div className={styles.foreground}>
              <div className={styles.weatherData}>
                <div className={styles.weatherInfo}>
                  <div className={styles.weatherItem}>
                    <img src="/icons/temp.png" alt="Icono Temperatura" style={{ width: 'auto', height: '30px' }} />
                    <p>Temperatura </p><span>{climaItem.temperatura}°</span>
                  </div>
                  <div className={styles.weatherItem}>
                    <img src="/icons/humidity.png" alt="Icono Estado del Tiempo" style={{ width: 'auto', height: '30px' }} />
                    <p>Húmedad </p><span>{climaItem.humedad}%</span>
                  </div>
                  <div className={styles.weatherItem}>
                    <img src="/icons/wind.png" alt="Icono Estado del Tiempo" style={{ width: 'auto', height: '30px' }} />
                    <p>Velocidad Viento </p><span>{climaItem.velocidad_viento} m/s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/imgs/sombra.png" alt="" style={{ width: '370px', height: '35px', padding: '1px', opacity: '0.6' }} />
        </div>
      ))}
    </Carousel>
  );
}
