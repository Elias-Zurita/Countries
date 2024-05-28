import React from "react";
import { useEffect, useState } from "react"; // Para consumir la API

export default function Population() {
  const [countries, setCountries] = useState([]);
  const [totalPopulation, setTotalPopulation] = useState(0);

  useEffect(() => {
    (async () => {
      const API_URL = "https://restcountries.com/v3.1/all";
      const countriesResponse = await fetch(API_URL).then((response) =>
        response.json()
      );
      
      // Ordenar los países por población de mayor a menor
      const sortedCountries = countriesResponse.sort(
        (a, b) => b.population - a.population
      );

      setCountries(sortedCountries);

      // new Intl.NumberFormat().format Es un metodo de Javascript para hacer mas legible el numero de poblacion separandolo con puntos.
      // El metodo reduce transforma a un valor unico el total del array de poblacion sumando estos.
      // El acumulador acumula la poblacion de cada country. Si es "null" o "undefined" la poblacion toma como valor "0"
      const totalPopulation = countriesResponse.reduce(
        (acumulador, country) => acumulador + (country.population || 0),
        0
      );
      setTotalPopulation(totalPopulation);
    })();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 mb-8 p-4">
        <div className="border-2 border-white font-bold text-xl flex justify-center items-center">
          <p>POBLACIÓN MUNDIAL</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 ml-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
        </div>
        <table className="mx-auto my-4 border-2 border-slate-600">
          <thead className="bg-slate-400">
            <tr className="border-2 border-slate-600">
              <th className="border-2 border-slate-600">#</th>
              <th className="border-2 border-slate-600 md:text-xl">PAÍS</th>
              <th className="border-2 border-slate-600 md:text-xl">
                POBLACIÓN
              </th>
              <th className="border-2 border-slate-600 md:text-xl">%</th>
            </tr>
          </thead>
          <tbody>
            {countries.map((country, index) => (
              <tr
                key={country.cca2}
                className="border-2 border-slate-600 hover:bg-orange-400"
              >
                <td className="border-2 border-slate-600 md:px-2 text-center md:text-xl">
                  {index + 1}
                </td>
                <td className="border-slate-600 px-2 md:text-xl flex">
                  <img
                    src={country.flags.png}
                    alt=""
                    className="w-[25px] h-[100%] my-auto mr-2"
                  />
                  {country.name.common}
                </td>
                <td className="border-2 border-slate-600 md:px-2 text-center md:text-xl">
                  {new Intl.NumberFormat().format(country.population)}
                </td>
                <td className="border-2 border-slate-600 px-2 text-center md:text-xl">
                  {((country.population / totalPopulation) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}