"use client";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";

const Particle = ({ config }) => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <Particles
      id="tstriangle"
      particlesLoaded="particlesLoaded"
      init={particlesInit}
      loaded={particlesLoaded}
      options={config}
      height="100vh"
      width="100vw"
    />
  );
};

export default Particle;
