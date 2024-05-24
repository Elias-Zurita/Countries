import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";

// Pages
import Home from "../Pages/Home";
import Countries from "../Pages/Countries";
import Population from "../Pages/Population";

// Modo nocturno
export default function Header() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Menu responsive
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Función para cerrar el menú después de hacer clic en un enlace
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="header bg-white shadow px-6 fixed top-0 left-0 right-0 z-50">
        <div className="flex justify-between h-16 items-center max-w-7xl mx-auto">
          <button
            onClick={toggleMenu}
            className="text-slate-500 hover:bg-red-500 hover:text-slate-100 rounded p-1 -ml-1 transition-colors focus:ring-2 focus:ring-slate-200 sm:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
          <div className="flex items-center">
            <Link to="/" className="text-sky-500 hover:rotate-180 duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
            </Link>
            <div className="space-x-8 ml-8 hidden sm:flex">
              <Link
                to="/"
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
              >
                Inicio
              </Link>
              <Link
                to="/Countries"
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
              >
                Países
              </Link>
              <Link
                to="/Population"
                className="text-slate-600 px-3 py-2 hover:text-sky-500 transition-colors"
              >
                Población
              </Link>
            </div>
          </div>
          <button
            onClick={handleThemeSwitch}
            className="text-slate-500 hover:text-sky-500 rounded-full -ml-1 transition-colors focus:ring-2 focus:ring-slate-200 focus:ring-offset-1"
          >
            {theme === "dark" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                />
              </svg>
            )}
          </button>
        </div>
        {menuOpen && (
          <div className="space-y-1 pb-3 border-t pt-2 sm:hidden">
            <Link
              to="/"
              className="text-slate-700 hover:bg-sky-500 hover:text-white transition-colors px-3 py-2 block rounded-md"
              onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
            >
              Inicio
            </Link>
            <Link
              to="/Countries"
              className="text-slate-700 hover:bg-sky-500 hover:text-white transition-colors px-3 py-2 block rounded-md"
              onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
            >
              Paises
            </Link>
            <Link
              to="/Population"
              className="text-slate-700 hover:bg-sky-500 hover:text-white transition-colors px-3 py-2 block rounded-md"
              onClick={closeMenu} // Cerrar el menú al hacer clic en un enlace
            >
              Población
            </Link>
          </div>
        )}
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Countries/*" element={<Countries />} />
        <Route path="/Population" element={<Population />} />
      </Routes>
    </>
  );
}