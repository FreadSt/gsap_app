import {Navbar} from "./components/Navbar.tsx";
import React from "react";

export const App: React.FC = () => {
  return (
    <>
     <Navbar/>
      <h1 className='text-white'>Hello world</h1>
    </>
  )
}

