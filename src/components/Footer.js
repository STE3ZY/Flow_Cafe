import "./Footer.css";
import footerLogo from "../images/footer-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <img className="footer__title" src={footerLogo} alt="Footer logo" />

        <p className="footer__description">
          Do more of what <br />
          makes you happy!
        </p>

        <div className="footer__content">
          <div className="footer__data">
            <div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faLocationPin}
                style={{ color: "#ffffff" }}
              />
              <p className="footer__information">
                Πίνδου 55 | 42200 <br />
                Καλαμπάκα
              </p>
            </div>
            <div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faPhone}
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="footer__information">24320 23450</p>
            </div>
            <div className="footer__item">
              <FontAwesomeIcon
                className="font-awesome"
                icon={faEnvelope}
                style={{ color: "#ffffff" }}
              />{" "}
              <p className="footer__information">flowcafegr@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="footer__group">
          <ul className="footer__social">
            <a
              href="https://www.facebook.com/Flow-Handmade-Pies-Coffee-101952188437839"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/flow__cafe/"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="bx bxl-instagram"></i>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
