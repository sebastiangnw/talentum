
export default function HomePage() {
  return (
    <section className="h-[calc(100vh-7rem)] flex justify-center items-center text-gray-700 dashboard ">
      <div className="text-center">
        <h1 className='text-5xl font-bold mb-8'>Climas de Colombia</h1>
        <p className="text-lg mb-8">¡Descubre el clima actual y pronóstico para las ciudades de Colombia!</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <CityCard image="/imgs/cali.png" cityName="Cali" description="Cali, La ciudad con mas ritmo de Colombia." />
          <CityCard image="/imgs/medellin.png" cityName="Medellín" description="Medellin, La ciudad de la eterna primavera." />
          <CityCard image="/imgs/cartagena.png" cityName="Cartagena" description="Cartagena, Una ciudad costera con encanto colonial." />
        </div>
      </div>
    </section>
  );
}

function CityCard({ image, cityName, description }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <img src={image} alt={cityName} className="w-full h-60 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{cityName}</h2>
        <p className="text-gray-600">{description}</p>
        <a href="/dashboard" className="mt-4 block text-blue-500 hover:text-blue-700">Ver más</a>
      </div>
    </div>
  );
}

