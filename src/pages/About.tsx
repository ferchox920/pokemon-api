import { useRef, useEffect } from "react";
import yo from "../assets/io.jpeg";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaJava,
  FaPython,
  FaCode,
} from "react-icons/fa";
import anime from "animejs/lib/anime.es.js";

const About = () => {
  const profilePicRef = useRef(null);

  useEffect(() => {
    anime({
      targets: profilePicRef.current,
      translateX: [50, 0],
      opacity: [0, 1],
      duration: 1000,
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <div className="container container-about" ref={profilePicRef}>
      <div className="row justify-content-center mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-header">
              <h4 className="mb-0">Sobre mí</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-3 text-center">
                  <img
                    src={yo}
                    alt="profile-pic"
                    className="img-fluid rounded-circle mb-3 profile-pic"
                  />
                </div>
                <div className="col-md-9 info">
                  <p className="lead">
                    ¡Hola! Soy un desarrollador full stack con experiencia en
                    tecnologías web como React, Node.js, TypeScript, Firebase y
                    muchas más.
                  </p>
                  <p className="lead">
                    También tengo conocimientos básicos en Java y Python, y he
                    trabajado con ORM como TypeORM y servicios de pago como
                    PayPal y MercadoPago.
                  </p>
                  <p className="lead">
                    He desarrollado aplicaciones web completas, incluyendo
                    sistemas de autenticación con Firebase, chat en vivo con
                    Socket.io y sistemas de pago con PayPal y MercadoPago.
                  </p>
                  <p className="lead">
                    Me considero un apasionado de la tecnología y estoy en
                    constante aprendizaje para mejorar mis habilidades. Si
                    tienes un proyecto o idea, no dudes en ponerte en contacto
                    conmigo.
                  </p>
                  <hr />
                  <div className="row">
                    <div className="col-md-12">
                      <div className="container-btn">
                        <div className="row">
                          <div className="col-md-3">
                            <a
                              href="mailto:fernandoramones92@gmail.com"
                              className="btn btn-outline-primary w-100 mb-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaEnvelope className="me-2" />
                              Email
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a
                              href="https://github.com/ferchox920"
                              className="btn btn-outline-secondary w-100 mb-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaGithub className="me-2" />
                              GitHub
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a
                              href="https://www.linkedin.com/in/fernando-andres-ramones-ramones/"
                              className="btn btn-outline-primary w-100 mb-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaLinkedin className="me-2" />
                              LinkedIn
                            </a>
                          </div>
                          <div className="col-md-3">
                            <a
                              href="https://portafolio-framones.vercel.app/"
                              className="btn btn-outline-secondary w-100 mb-3"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <FaCode className="me-2" />
                              Repositorio
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <h5 className="mb-3">Habilidades</h5>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="d-flex align-items-center mb-2">
                        <FaHtml5 className="me-2" />
                        <span>HTML5</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaCss3Alt className="me-2" />
                        <span>CSS3</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaJsSquare className="me-2" />
                        <span>JavaScript</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaReact className="me-2" />
                        <span>React</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaNodeJs className="me-2" />
                        <span>Node.js</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center mb-2">
                        <FaDatabase className="me-2" />
                        <span>PostgreSQL</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaGitAlt className="me-2" />
                        <span>Git</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaJava className="me-2" />
                        <span>Java</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaPython className="me-2" />
                        <span>Python</span>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="d-flex align-items-center mb-2">
                        <FaNodeJs className="me-2" />
                        <span>Express.js</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaJsSquare className="me-2" />
                        <span>TypeScript</span>
                      </div>
                      <div className="d-flex align-items-center mb-2">
                        <FaNodeJs className="me-2" />
                        <span>Socket.io</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
