import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointUp } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="p-2 bg-slate-500 text-white text-base flex justify-between px-[20px]">
        <div>
          Diseño sitio Web - by{" "}
          <a
            href="https://elias-zurita.github.io/"
            target="_blank"
            className="text-black font-semibold hover:text-white hover:font-bold transition duration-300"
          >
            Elias Zurita
          </a>
        </div>
        <div className="text-white hover:text-black transition duration-300 text-[20px]">
          <a href="#">
            <FontAwesomeIcon icon={faHandPointUp} />
          </a>
        </div>
      </div>
    </>
  );
}