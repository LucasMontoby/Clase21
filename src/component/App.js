import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [autos, setAutos] = useState([]);

  useEffect(() => {
    fetch('../autos.json')
    .then((response) => response.json())
    .then((data) => setAutos(data))
    .catch((error) => console.error('Error al cargar los datos: ', error))
  }, [])

  return (
    <div className="App">
      <h1>Galería de Autos</h1>
      <div>
        {autos.map((auto) =>(

          <div  key={auto.id} >
            <img src={auto.imagenUrl} alt={`${auto.marca} ${auto.modelo}`}></img>
            <h2>{auto.marca}</h2>
            <p>{auto.modelo}</p>
          </div>

        ))}
      </div>
    </div>
  );
}

export default App;
