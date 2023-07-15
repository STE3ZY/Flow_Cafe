import herobg from "../images/hero-bg.jpg";

const Hero = () => {
  return (
    <section
      className="hero section"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.4)), url(${herobg})`,
      }}
    >
      <div className="hero__text">
        <h1 className="hero__title">FLOW</h1>
        <h1 className="hero__subtitle">HANDMADE PIES & COFFEE</h1>
        <p className="hero__paragraph">
          Απολαύστε μια μοναδική εμπειρία καφέ με τον 100% Arabica Ipanema
          Espresso σε συνδυασμό με την τέλεια γεύση της σπιτικής πίτας και των
          υπολοίπων προϊόντων μας
        </p>
        <button className="hero__button">ΠΑΡΤΕ ΜΙΑ ΓΕΥΣΗ</button>
      </div>
    </section>
  );
};

export default Hero;
