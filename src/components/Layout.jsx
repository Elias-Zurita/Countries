import React from "react";
// Componentes
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {/*si creo un componente y en el return pongo el componente <Layout> todo lo que este dentro va a aparecer en este children */}
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}