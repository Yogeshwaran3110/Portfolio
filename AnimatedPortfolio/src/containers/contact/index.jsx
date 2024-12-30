import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { FaLinkedin } from "react-icons/fa";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import resume from "../../images/Yogeshwaran.pdf";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact"
        icon={
          <a
            href="https://www.linkedin.com/in/yogeshwaran-m-62a07822b"
            target="_blank"
          >
            <FaLinkedin size={40} color="#0e76a8" />
          </a>
        }
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">CONTACT</h3>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div className="email">
                <label htmlFor="name" className="emailNameLabel">
                  EMAIL
                </label>
                <div style={{marginTop: '5px'}}>
                  <a href={`mailto:yogim3110@gamil.com`}>
                    <button>{"yogim3110@gmail.com"}</button>
                  </a>
                </div>
              </div>
              <div>
                <input
                  required
                  name="email"
                  className="inputEmail"
                  type={"text"}
                  value={"+91 8525944374"}
                />
                <label htmlFor="email" className="emailLabel">
                  PHONE :
                </label>
              </div>
              <div>
                <label htmlFor="description" className="descriptionLabel">
                  Download My Resume
                </label>
              </div>
            </div>
            <a
              href={resume}
            
              download="Yogeshwaran_M_Resume.pdf"
            >
              <button>Download Resume</button>
            </a>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
