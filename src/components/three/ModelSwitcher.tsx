// @ts-nocheck
import { useRef, useEffect } from "react";
import { PresentationControls } from "@react-three/drei";
import gsap from "gsap";
import * as THREE from "three";

import MacbookModel16 from "../models/Macbook-16.jsx";
import MacbookModel14 from "../models/Macbook-14.jsx";

const OFFSET_DISTANCE = 5;
const DURATION = 0.9;

const setOpacity = (group: THREE.Group, value: number) => {
  group.traverse((child) => {
    if (child.isMesh) {
      child.material.transparent = true;
      child.material.opacity = value;
    }
  });
};

const animateTo = (
  group: THREE.Group,
  x: number,
  opacity: number
) => {
  gsap.to(group.position, {
    x,
    duration: DURATION,
    ease: "power2.out",
  });

  group.traverse((child) => {
    if (child.isMesh) {
      gsap.to(child.material, {
        opacity,
        duration: DURATION,
        ease: "power2.out",
      });
    }
  });
};

const ModelSwitcher = ({ scale, isMobile }) => {
  const largeRef = useRef<THREE.Group>(null);
  const smallRef = useRef<THREE.Group>(null);

  const isLarge = scale >= 0.08;

  useEffect(() => {
    if (!largeRef.current || !smallRef.current) return;

    largeRef.current.position.x = OFFSET_DISTANCE;
    setOpacity(largeRef.current, 0);

    smallRef.current.position.x = 0;
    setOpacity(smallRef.current, 1);
  }, []);

  useEffect(() => {
    if (!largeRef.current || !smallRef.current) return;

    if (isLarge) {
      animateTo(smallRef.current, -OFFSET_DISTANCE, 0);
      animateTo(largeRef.current, 0, 1);
    } else {
      animateTo(smallRef.current, 0, 1);
      animateTo(largeRef.current, OFFSET_DISTANCE, 0);
    }
  }, [isLarge]);

  return (
    <PresentationControls
      snap
      speed={1}
      zoom={1}
      azimuth={[-Infinity, Infinity]}
    >
      <group ref={smallRef}>
        <MacbookModel14 scale={isMobile ? 0.04 : 0.06} />
      </group>

      <group ref={largeRef}>
        <MacbookModel16 scale={isMobile ? 0.05 : 0.08} />
      </group>
    </PresentationControls>
  );
};

export default ModelSwitcher;
