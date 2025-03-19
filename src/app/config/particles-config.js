const particlesConfig = {
  fullScreen: {
    enable: false,
    zIndex: -1,
  },
  background: {
    color: {
      value: "#2E3440",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "grab",
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#64ffda",
    },
    links: {
      color: "#64ffda",
      distance: 180,
      enable: true,
      opacity: 0.4,
      width: 1,
    },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 1000,
      },
      value: 80,
    },
    opacity: {
      value: 1,
    },
    shape: {
      type: ["polygon", "triangle"],
      options: {
        polygon: {
          sides: 3,
          particles: {
            color: {
              value: "#829399",
            },
          },
        },
        triangle: {
          particles: {
            color: {
              value: "#829399",
            },
          },
        },
      },
    },
    size: {
      value: { min: 2, max: 3 },
    },
  },
  detectRetina: true,
};

export default particlesConfig;
