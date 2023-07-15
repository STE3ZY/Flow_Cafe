import logo from "../images/trans_logo_white.png";

const Navbar = () => {
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#home" className="nav__logo">
          <img className="nav__logo" src={logo} alt="flow cafe logo" />
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link">
                ΑΡΧΙΚΗ
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" className="nav__link">
                ΜΕΝΟΥ
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" className="nav__link">
                ΦΩΤΟΓΡΑΦΙΕΣ
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" className="nav__link">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
