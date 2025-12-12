import {Navbar} from "./components/Navbar.tsx";
import React from "react";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";

export const App: React.FC = () => {
  return (
    <>
     <Navbar/>
      <Hero/>
      <ProductViewer/>
    </>
  )
}

