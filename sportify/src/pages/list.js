import "../pages/style/list.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

function List() {
  const options = {
    background: {
      color: "#fffff",
    },
    fullScreen: {
      enable: true,
      zIndex: -1,
    },
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
        color: {
          value: "#000",
        },
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 100,
        },
        color: {
          value: "#000",
        },
      },
      color: {
        value: "#000",
      },
    },
    particles: {
      links: {
        enable: true,
        distance: 200,
      },
      move: {
        enable: true,
        speed: { min: 1, max: 5 },
      },
      opacity: {
        value: { min: 0.3, max: 0.7 },
      },
      size: {
        value: { min: 1, max: 3 },
      },
      color: {
        value: "#000",
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <>
      <div className="list">
        <Particles options={options} init={particlesInit} />
        <img
          className="coming_soon img-fluid"
          src="https://media.giphy.com/media/l1J9BPFDcoRmhjYl2/giphy.gif"
          alt="Coming Soon"
        />
        <Link to="/" className="btn button-home button py-3 px-5">
          Go To Home
        </Link>
      </div>
    </>
  );
}

export default List;
