import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function Cover() {
  const particlesInit = async (main: any) => {
    console.log(main);
    await loadFull(main);
  };

  //   const particlesLoaded = (container: string) => {
  //     console.log(container, "ooo");
  //   };

  return (
    <div id="particles-js" className=" relative z-[-1]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "#0B0C10",
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
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#66FCF1",
            },
            links: {
              color: "#66FCF1",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: true,
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
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
