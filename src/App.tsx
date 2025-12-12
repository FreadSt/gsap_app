import {Navbar} from "./components/Navbar.tsx";
import React from "react";
import Hero from "./components/Hero.tsx";

export const App: React.FC = () => {
  return (
    <>
     <Navbar/>
      <Hero/>
      <h1 className='text-white'>Hello world</h1>
    </>
  )
}

