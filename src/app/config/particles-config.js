const particlesConfig = { 
    fullScreen: {
        enable: false,
        zIndex: -1
    },
    background: {
        color: {
            value: "#545F66",
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
            value: "#D0F4EA",
        },
        links: {
            color: "#D0F4EA",
            distance: 150,
            enable: true,
            opacity: 0.2,
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
                area: 900,
            },
            value: 70,
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
}

export default particlesConfig