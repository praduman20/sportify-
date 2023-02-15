import React from "react";
import styled from "styled-components";
import { InlineWidget } from "react-calendly";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import "../pages/style/info.css";

function Info() {
  const options = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 1000,
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      color: {
        value: "#f9ce80",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#f9ce80",
        },
      },
      opacity: {
        value: 1,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 8,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable_auto: true,
        distance: 100,
        color: "#f9ce80",
        opacity: 1,
        width: 1,
        condensed_mode: {
          enable: false,
          rotateX: 600,
          rotateY: 600,
        },
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);
  return (
    <Container>
      <Particles options={options} init={particlesInit} />
      <Main>
        <div className="App">
          <InlineWidget
            url="https://calendly.com/sportifyservice12/book-a-venue"
            pageSettings={{
              backgroundColor: "ffffff",
              hideEventTypeDetails: false,
              hideLandingPageDetails: false,
              primaryColor: "#f9ce80",
              textColor: "454545",
            }}
          />
        </div>
      </Main>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: fit-content;
  max-width: 1400px;
  margin: auto;
  background-color: #ffffff;
  position: relative;
  margin-top: 12vh;
  margin-bottom: 12vh;
`;

const Main = styled.div`
  padding: 35px;
  border: 2px solid #454545;
  border-radius: 8px;
`;

export default Info;
