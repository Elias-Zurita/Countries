import React from "react";
import { Link, useParams } from "react-router-dom"; // Permite leer los parametros de la ruta
import { useEffect, useState } from "react"; // Para consumir la API

export default function CountryDetail() {
  const { countryName } = useParams(); // Obtengo el nombre del pais en el que me encuentro
  const [country, setCountry] = useState([]); // es null por que al principio no tengo ningunm country

  useEffect(() => {
    (async () => {
      const API_URL = `https://restcountries.com/v3.1/name/${countryName}`;
      const countryResponse = await fetch(API_URL).then((response) =>
        response.json()
      );
      setCountry(countryResponse);
    })();
  }, [countryName]);

  // Renderizacion de imagen por region
  const renderRegionImage = () => {
    if (country.length === 0) return null;

    const region = country[0].region.toLowerCase();

    switch (region) {
      case "africa":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Africa_on_the_globe_%28red%29.svg/280px-Africa_on_the_globe_%28red%29.svg.png"
            alt="Africa"
            className="mx-auto max-h-64 my-2"
          />
        );
      case "americas":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Americas_on_the_globe_%28red%29.svg/280px-Americas_on_the_globe_%28red%29.svg.png"
            alt="America"
            className="mx-auto max-h-64 my-2"
          />
        );
      case "europe":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Europe_on_the_globe_%28red%29.svg/280px-Europe_on_the_globe_%28red%29.svg.png"
            alt="Europa"
            className="mx-auto max-h-64 my-2"
          />
        );
      case "oceania":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg/280px-Oceania_on_the_globe_%28red%29_%28Polynesia_centered%29.svg.png"
            alt="Oceania"
            className="mx-auto max-h-64 my-2"
          />
        );
      case "asia":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Asia_on_the_globe_%28red%29.svg/280px-Asia_on_the_globe_%28red%29.svg.png"
            alt="Asia"
            className="mx-auto max-h-64 my-2"
          />
        );
      case "antarctic":
        return (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Antarctica_on_the_globe_%28red%29.svg/280px-Antarctica_on_the_globe_%28red%29.svg.png"
            alt="Antartida"
            className="mx-auto max-h-64 my-2"
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      {country.map((country) => {
        return (
          <div
            key={country.cca2}
            className="flex flex-col max-w-7xl mx-auto mt-4 md:justify-between"
          >
            <div className="text-center text-xl font-semibold p-2 md:w uppercase underline">
              {country.name.official}
            </div>
            <div className="flex flex-col md:flex-row md:mx-auto md:w-full md:justify-between">
              <div className="md:w-2/4">
                <div className="md:h-[400px] md:flex md:items-center md:justify-center">
                  <img
                    src={country.flags.png}
                    alt={country.flags.alt}
                    className="w-[350px] md:w-[90%] max-h-[240px] md:max-h-[380px] mx-auto border-2"
                  />
                </div>
              </div>

              <div className="flex flex-col items-center md:w-2/4">
                <div className="flex flex-col md:h-[400px] md:px-0.5 items-center py-6">
                  <img
                    src={country.coatOfArms.png}
                    alt=""
                    className="md:h-[100%] md:w-auto w-[350px]"
                  />
                </div>
              </div>
            </div>
            <div className="p-4 flex flex-col md:flex md:flex-row">
              <div className="md:w-1/2">
                <div>
                  <strong>Capital:</strong> {country.capital}
                </div>
                <div>
                  <strong>Continente:</strong> {country.subregion}
                </div>
                <div>
                  <strong>Area:</strong>{" "}
                  {new Intl.NumberFormat().format(country.area)} Km²
                </div>
                <div className="md:w-11/12 cursor-default">
                  <strong>Paises limitrofes: </strong>
                  <div>
                    {country.borders ? (
                      country.borders.map((border, index) => (
                        <span
                          key={index}
                          className="m-2 inline-block border-2 border-slate-300 p-1	hover:bg-black hover:text-white transition duration-300 ease-in-out"
                        >
                          {border}
                        </span>
                      ))
                    ) : (
                      <span>No tiene países limitrofes</span>
                    )}
                  </div>
                </div>
              </div>
              <div className="md:w-1/2">
                <div>
                  <strong>Población:</strong>{" "}
                  {new Intl.NumberFormat().format(country.population)}
                </div>
                <div>
                  <strong>Moneda:</strong>{" "}
                  {country.currencies ? (
                    Object.values(country.currencies)
                      .map((currency) => currency.name)
                      .join(", ")
                  ) : (
                    <span>No posee moneda oficial</span>
                  )}
                </div>
                <div>
                  <strong>Símbolo monetario:</strong>{" "}
                  {country.currencies ? (
                    Object.values(country.currencies)
                      .map((currency) => currency.symbol)
                      .join(", ")
                  ) : (
                    <span>No posee símbolo monetario</span>
                  )}
                </div>
                <div>
                  <strong>Idiomas:</strong>{" "}
                  {country.languages ? (
                    Object.values(country.languages)
                      .map((language) => language)
                      .join(", ")
                  ) : (
                    <span>No posee idioma oficial</span>
                  )}
                </div>
              </div>
            </div>
            <div className="p-4">
              <strong>REGIÓN:</strong> {country.region}
              {renderRegionImage()}
              <div className="w-auto">
                <div className="text-black	underline font-bold flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="text-red-800 w-6 h-6 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                    />
                  </svg>
                  <a
                    href={country.maps.googleMaps}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-700 transition duration-300"
                  >
                    Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="text-center">
        <Link to="/Countries">
          <button className="py-1 px-4 my-[25px] border-2 border-slate-800 rounded mx-auto font-semibold hover:bg-slate-600 hover:text-white ease-in-out duration-700">
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}
