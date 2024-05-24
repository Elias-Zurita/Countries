import React from "react";

export default function Home() {
  return (
    <>
      <div className="border-violet-600 border-4 max-w-7xl mx-auto mt-8 mb-8 p-4">
        <h1 className="text-3xl font-bold underline text-center">
          BIENVENIDO A LA APLICACIÓN DE PAÍSES DEL MUNDO
        </h1>
        <img
          src="Rotating_earth_animated_transparent.gif"
          alt=""
          className="mx-auto max-h-[350px]"
        />
        <br />
        <p className="text-xl font-bold">
          INGRESA A LA SECCION QUE MAS TE INTERESE
        </p>
        <br />
        <div className="text-lg">En ellas podrás ver:</div>
        <ul className="list-disc px-6 text-lg">
          <li>El listado de todos los paises del mundo.</li>
          <li>
            Información detallada de cada pais incluyendo bandera, escudo y
            paises limítrofes.
          </li>
          <li>Porcentaje de población a nivel mundial.</li>
        </ul>
        <br />
        <p className="text-xl italic">
          Esta aplicacion consume info de la API:{" "}
          <a
            href="https://restcountries.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold"
          >
            Rest Countries
          </a>
        </p>
        <br />
        <p className="text-xl">
          * Personaliza la navegación entre los modos{" "}
          <strong>Nocturno/Claro</strong>
        </p>
      </div>
    </>
  );
}
