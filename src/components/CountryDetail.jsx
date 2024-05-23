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
            className="border-2 border-orange-600 flex flex-col max-w-7xl mx-auto mt-4 md:justify-between"
          >
            <div className="border-2 border-blue-600 text-center text-xl font-semibold p-2 md:w">
              {country.name.official}
            </div>
            <div className="flex flex-col md:flex-row md:mx-auto border-2 border-black md:w-full md:justify-between">
              <div className="border-2 border-violet-950 md:w-2/4">
                <img
                  src={country.flags.png}
                  alt={country.flags.alt}
                  className="w-[360px] mx-auto md:ml-2 "
                />

                <div className="border-2 border-green-600 p-4">
                  <div>
                    <strong>Capital:</strong> {country.capital}
                  </div>
                  <div>
                    <strong>Continente:</strong> {country.subregion}
                  </div>
                  <div>
                    <strong>Area:</strong>{" "}
                    {new Intl.NumberFormat().format(country.area)}
                  </div>
                  <div className="border-2 border-slate-600 w-11/12">
                    <strong>Paises limitrofes: </strong>
                    <div>
                      {country.borders ? (
                        country.borders.map((border, index) => (
                          <span
                            key={index}
                            className="m-2 inline-block border-2 border-slate-300 p-1		"
                          >
                            {border}
                          </span>
                        ))
                      ) : (
                        <span>No tiene países limitrofes</span>
                      )}
                    </div>
                  </div>
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

              <div className="border-4 border-red-800 flex flex-col items-center p-2 md:w-2/4">
                <div className="flex flex-col">
                  <strong>ESCUDO:</strong>{" "}
                  <img
                    src={country.coatOfArms.png}
                    alt=""
                    className="border-2 border-blue-600 h-80	"
                  />
                </div>
                <div className="border-2 border-slate-900 p-4">
                  <strong>REGIÓN:</strong> {country.region}
                  {renderRegionImage()}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-2 border-blue-600 text-center">
        <Link to="/Countries">
          <button className="py-1 px-4 border-2 border-slate-800 rounded mx-auto my-2 font-semibold hover:bg-slate-600 hover:text-white ease-in-out duration-700">
            Volver
          </button>
        </Link>
      </div>
    </>
  );
}