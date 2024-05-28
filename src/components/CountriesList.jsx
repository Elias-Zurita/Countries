import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CountriesList({ countries = [] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const [currentPage, setCurrentPage] = useState(1); // seteo la pagina
  const countriesPerPage = 28; // seteo el limite de paises por pagina

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reiniciar la página al cambiar el término de búsqueda
  };

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
    setCurrentPage(1); // Reiniciar la página al cambiar la región seleccionada
  };

  const filteredCountries = countries
    .filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (country) => selectedRegion === "" || country.region === selectedRegion
    );

  const indexOfLastCountry = currentPage * countriesPerPage; // calcula el ultimo pais segun la pagina
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage; // calcula el primer pais segun la pagina
  const currentCountries = filteredCountries.slice( // filtra los paises segun la pagina y la region + la busqueda
    indexOfFirstCountry,
    indexOfLastCountry
  );

  // actualizacion del estado pagina actual
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // creo un array de de paginas para renderizar los numeros de paginas (total de paises filtrados / paises por pagina )
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(filteredCountries.length / countriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="mx-auto max-w-7xl flex flex-col items-center md:flex-row place-content-between mt-4 pt-4">
        <input
          className="buscadorListado w-[250px] mx-2 mb-2 md:mb-0 py-1 px-2 dark:text-black border-2 rounded text-black"
          type="text"
          placeholder="Ingresa el nombre del país"
          value={searchTerm}
          onChange={handleSearchChange}
        />

        <select
          value={selectedRegion}
          onChange={handleRegionChange}
          className="w-[250px] mx-2 py-1 px-2 dark:text-black border-2 "
        >
          <option value="">Todas las regiones</option>
          <option value="Africa">África</option>
          <option value="Americas">América</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europa</option>
          <option value="Oceania">Oceanía</option>
        </select>
      </div>

      <div className="mt-4 text-center font-bold text-xl underline">
        LISTADO DE PAÍSES
      </div>
      <div className="listadoPaises flex flex-wrap place-content-around max-w-7xl mx-auto mt-2 min-h-[68vh]">
        {currentCountries.map((country) => {
          return (
            <div
              className="cajaListado md:w-[275px] sm:w-[] w-[150px] m-[10px] bg-white hover:scale-105 ease-in-out duration-300"
              key={country.cca2}
            >
              <Link to={`/Countries/${country.name.common}`}>
                <img
                  src={country.flags.png}
                  alt=""
                  className="border-2 h-[100px] md:h-[150px] w-full object-cover object-center"
                />
                <div className="infoCountry p-[5px] border-2 font-semibold text-center text-slate-800">
                  <h2>{country.name.common}</h2>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="pagination m-[30px] w-auto text-center">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className="mx-1 my-[5px] px-3 py-1 rounded-lg border border-gray-400 hover:bg-black hover:text-white"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </>
  );
}
