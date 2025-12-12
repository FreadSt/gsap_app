import {Navbar} from "./components/Navbar.tsx";
import React from "react";
import Hero from "./components/Hero.tsx";
import ProductViewer from "./components/ProductViewer.tsx";
import gsap from 'gsap'
import {ScrollTrigger, SplitText} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger)

export const App: React.FC = () => {
  return (
    <>
     <Navbar/>
      <Hero/>
      <ProductViewer/>
    </>
  )
}

