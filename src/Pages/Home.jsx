import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="max-w-7xl mx-auto mt-8 mb-8 p-4">
        <h1 className="text-3xl font-bold underline text-center">
          BIENVENIDO A LA APLICACIÓN DE PAÍSES DEL MUNDO
        </h1>
        <img
          src="Rotating_earth.gif"
          alt=""
          className="mx-auto max-h-[350px]"
        />
        <br />
        <p className="text-xl font-bold">
          INGRESA A LA SECCION QUE MAS TE INTERESE
        </p>
        <div className="flex items-center justify-around p-5 flex-wrap mx-auto w-[70%] mb-5">
          <Link to="/countries">
            <button className=" flex justify-around w-[145px] font-bold border-black border-2 p-2 bg-slate-500 text-black rounded hover:bg-orange-400 hover:text-white transition duration-300 m-5">
              PAISES{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
                />
              </svg>
            </button>
          </Link>
          <Link to="/population">
            <button className="flex justify-around w-[145px] font-bold border-2 border-black p-2 bg-slate-500 text-black rounded hover:bg-orange-400	 hover:text-white transition duration-300">
              POBLACIÓN
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </button>
          </Link>
          <Link to="/Area">
            <button className=" flex justify-around w-[145px] font-bold border-black border-2 p-2 bg-slate-500 text-black rounded hover:bg-orange-400 hover:text-white transition duration-300 m-5">
              SUPERFICIES{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                />
              </svg>
            </button>
          </Link>
        </div>
        <div className="text-lg">En ellas podrás ver:</div>
        <ul className="list-disc px-6 text-lg">
          <li>El listado de todos los paises del mundo.</li>
          <li>
            Información detallada de cada pais incluyendo bandera, escudo y
            paises limítrofes.
          </li>
          <li>Porcentaje de población a nivel mundial.</li>
          <li>Información sobre el área territorial de cada país del mundo.</li>
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
