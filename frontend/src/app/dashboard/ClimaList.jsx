import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import styles from '@/app/styles/ClimaCard.module.css';

import { useClimaList } from './useClimaList';

export default function ClimaList() {

  const { responsive, clima } = useClimaList()

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
