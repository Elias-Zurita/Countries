import React from "react";
import { useEffect, useState } from "react"; // Para consumir la API
import { Route, Routes } from "react-router-dom";
import CountriesList from "../components/CountriesList";
import CountryDetail from "../components/CountryDetail";

export default function Countries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  async function fetchCountries() {
    try {
      const API_URL = "https://restcountries.com/v3.1/all";
      const countriesResponse = await fetch(API_URL).then((response) =>
        response.json()
      );
      // Orden por orden alfabético del array (countriesResponse) con metodo sort
      const sortedCountries = countriesResponse.sort((a, b) =>
        a.name.common.localeCompare(b.name.common)
      );
      setCountries(sortedCountries);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <Routes>
        <Route index element={<CountriesList countries={countries} />} />
        <Route path=":countryName" element={<CountryDetail />} />
      </Routes>
    </>
  );
}