import React, { useState } from "react";
import { Link } from "react-router-dom";

//El prop countries contiene la lista de países que se mostrarán en el componente, sino es un array vacio.
export default function CountriesList({ countries = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  // Actualiza el estado searchTerm con el valor del input
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Función para manejar el cambio en la región seleccionada
  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  // Filtrar la lista de países según el término de búsqueda y la región seleccionada
  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (country) => selectedRegion === "" || country.region === selectedRegion
    );

  return (
    <>
      <div className="mx-auto border-2 border-orange-600 max-w-7xl flex flex-col items-center md:flex-row place-content-between mt-4">
        <input
          className="buscadorListado w-[250px] mx-2 px-2 dark:text-black"
          type="text"
          placeholder="Ingresa el nombre del pais"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <select
          value={selectedRegion}
          onChange={handleRegionChange}
          className="w-[250px] mt-2 md:mt-0 mx-2 px-1 dark:text-black"
        >
          <option value="">Todas las regiones</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>
      </div>

      <div className="listadoPaises flex flex-wrap place-content-around border-violet-600 border-4 max-w-7xl mx-auto mt-2">
        {filteredCountries.map((country) => {
          return (
            <div
              className="cajaListado border-2 border-orange-600 md:w-[275px] sm:w-[] w-[150px] m-[10px] bg-white hover:scale-105 ease-in-out duration-300"
              key={country.cca2}
            >
              <Link to={`/Countries/${country.name.common}`}>
                <img
                  src={country.flags.png}
                  alt=""
                  className="border-2 border-blue-600  h-[100px] md:h-[150px] w-full object-cover object-center"
                />
                <div className="infoCountry p-[5px] border-2 border-violet-500 font-semibold text-center text-slate-800">
                  <h2>{country.name.common}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}