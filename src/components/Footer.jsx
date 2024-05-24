import React from "react";

export default function Footer() {
  return (
    <>
      <div className="border-2 border-violet-500 p-2 bg-slate-500 text-white text-base">
        Diseño sitio Web - by{" "}
        <a
          href="https://elias-zurita.github.io/"
          target="_blank"
          className="text-black font-semibold hover:text-white hover:font-bold transition duration-300"
        >
          Elias Zurita
        </a>
      </div>
    </>
  );
}