"use client";

import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import WAVES from "vanta/dist/vanta.waves.min"; 
import Script  from "next/script";


export default function VantaBackground() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const [vantaEffect, setVantaEffect] = useState<any>(null);

  useEffect(() => {
    if (!vantaEffect && vantaRef.current) {
      const effect = WAVES({
        el: vantaRef.current,
        mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 2.00,
  scaleMobile: 1.00,
  color: 0xfaff1a,
  shininess: 135.00,
  waveHeight: 0.00,
  waveSpeed: 1.30, // <- velocidad de la ola
        THREE, // <- muy importante pasarle THREE
      });
      setVantaEffect(effect);
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="w-full h-full "
    />
  );
}
