import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">
          flow<span>.</span>cafe
        </h1>
        <p className="footer__description">
          Do more of what <br />
          makes you happy.
        </p>

        <div className="footer__content">
          <div className="footer__data">
            <h2 className="footer__subtitle">Επικοινωνία</h2>
            <p className="footer__information">
              Πίνδου 55 | 42200 <br />
              Καλαμπάκα
            </p>
            <p className="footer__information">
              24320 23450 <br />
              flowcafegr@gmail.com
            </p>
          </div>

          <div className="footer__data">
            <div className="mapouter">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3069.607163150584!2d21.623085015633453!3d39.70353570662724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x13590f09f9213a09%3A0xc6996ecf39576345!2sPindou%2055%2C%20Kalampaka%20422%2000%2C%20Greece!5e0!3m2!1sen!2sus!4v1607767296218!5m2!1sen!2sus"
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
                title="map"
              ></iframe>
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
