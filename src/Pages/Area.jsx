import React from "react";
import { useEffect, useState } from "react"; // Para consumir la API

export default function Area() {
  const [countries, setCountries] = useState([]);
  const [totalArea, setTotalArea] = useState(0);

  useEffect(() => {
    (async () => {
      const API_URL = "https://restcountries.com/v3.1/all";
      const countriesResponse = await fetch(API_URL).then((response) =>
        response.json()
      );

      // Ordenar los países por población de mayor a menor
      const sortedCountries = countriesResponse.sort((a, b) => b.area - a.area);

      setCountries(sortedCountries);

      // new Intl.NumberFormat().format Es un metodo de Javascript para hacer mas legible el numero del area separandola con puntos.
      // El metodo reduce transforma a un valor unico el total del array del area sumando estos.
      // El acumulador acumula el area de cada country. Si es "null" o "undefined" el area toma como valor "0"
      const totalArea = countriesResponse.reduce(
        (acumulador, country) => acumulador + (country.area || 0),
        0
      );
      setTotalArea(totalArea);
    })();
  }, []);

  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 mb-8 p-4">
        <div className="font-bold text-xl flex justify-center items-center">
          <p>SUPERFICIE POR PAÍS</p>
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
              d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
            />
          </svg>
        </div>
        <table className="mx-auto my-4 border-2 border-slate-600">
          <thead className="bg-slate-400">
            <tr className="border-2 border-slate-600">
              <th className="border-2 border-slate-600">#</th>
              <th className="border-2 border-slate-600 md:text-xl">PAÍS</th>
              <th className="border-2 border-slate-600 md:text-xl">AREA Km²</th>
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
                  {new Intl.NumberFormat().format(country.area)}
                </td>
                <td className="border-2 border-slate-600 px-2 text-center md:text-xl">
                  {((country.area / totalArea) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}