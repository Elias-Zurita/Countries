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
      setCountries(countriesResponse);

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
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>País</th>
            <th>Población</th>
            <th>Porcentaje de Población</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.cca2}>
              <td>{country.cca2}</td>
              <td>{country.name.common}</td>
              <td>{new Intl.NumberFormat().format(country.population)}</td>
              <td>
                {((country.population / totalPopulation) * 100).toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}