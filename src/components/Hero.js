import { Fade } from "react-awesome-reveal";
import "./Hero.css";
import herobg from "../images/hero-bg.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      className="hero section"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${herobg})`,
      }}
    >
      <div className="hero__text">
        <Fade cascade triggerOnce>
          <h1 className="hero__title">FLOW</h1>
          <h1 className="hero__subtitle">HANDMADE PIES & COFFEE</h1>

          <p className="hero__paragraph">
            Απολαύστε μια μοναδική εμπειρία καφέ με τον 100% Arabica Ipanema
            Espresso σε συνδυασμό με την τέλεια γεύση της σπιτικής πίτας και των
            υπολοίπων προϊόντων μας
          </p>

          {
            <Link to="/menu" className="hero__button">
              ΠΑΡΤΕ ΜΙΑ ΓΕΥΣΗ
            </Link>
          }
        </Fade>
      </div>
    </section>
  );
};

export default Hero;
