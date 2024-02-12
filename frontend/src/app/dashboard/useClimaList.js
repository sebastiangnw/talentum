import React, { useState, useEffect } from "react";

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

export const useClimaList = () => {
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
    return (
      <h1 className="flex flex-col items-center h-full py-10">
        Error de conexión.
      </h1>
    );
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

  return { clima, responsive };
};
