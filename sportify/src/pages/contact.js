import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../pages/style/contact.css";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { toast } from "react-toastify";

function Contact() {
  const form = document.querySelector(".contact-form");
  const formSubmit = (event) => {
    event.preventDefault();
    toast.success(
      "Your query has been registered. We will contact you shortly",
      {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      }
    );

    form.reset();
  };

  const options = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          area: 800,
        },
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"],
      },
      shape: {
        type: "circle",
      },
      opacity: {
        value: 1,
      },
      size: {
        value: { min: 1, max: 8 },
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 5,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out",
      },
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab",
        },
        onClick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1,
          },
        },
        push: {
          quantity: 4,
        },
      },
    },
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className="body-contact">
        <Particles options={options} init={particlesInit} />
        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close" />
                  <div className="screen-header-button maximize" />
                  <div className="screen-header-button minimize" />
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                  <div className="screen-header-ellipsis" />
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>CONTACT</span>
                    <span>US</span>
                  </div>
                  <div className="app-contact">
                    CONTACT INFO : +91 8058485539
                  </div>
                  <div className="app-contact">
                    EMAIL : sportify123@gmail.com
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <form className="contact-form" onSubmit={formSubmit}>
                      <div className="app-form-group">
                        <input
                          type="text"
                          className="app-form-control"
                          placeholder="NAME"
                          required
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="EMAIL"
                          required
                        />
                      </div>
                      <div className="app-form-group">
                        <input
                          className="app-form-control"
                          placeholder="CONTACT NO"
                          required
                        />
                      </div>
                      <div className="app-form-group message">
                        <input
                          className="app-form-control"
                          placeholder="MESSAGE"
                          required
                        />
                      </div>
                      <div className="app-form-group buttons">
                        <input
                          type="submit"
                          value="SEND"
                          className="app-form-button"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
