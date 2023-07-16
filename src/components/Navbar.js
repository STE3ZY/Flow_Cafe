import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/trans_logo_white.png";

const Navbar = () => {
  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navLink = document.querySelectorAll(".nav__link");
    const navMenu = document.getElementById("nav-menu");

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
      });
    }

    const linkAction = () => {
      navMenu.classList.remove("show-menu");
    };

    navLink.forEach((n) => n.addEventListener("click", linkAction));

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      if (navClose) {
        navClose.removeEventListener("click", () => {
          navMenu.classList.remove("show-menu");
        });
      }

      navLink.forEach((n) => n.removeEventListener("click", linkAction));
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img className="nav__logo" src={logo} alt="flow cafe logo" />
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/" className="nav__link active-link">
                ΑΡΧΙΚΗ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/menu" className="nav__link">
                ΜΕΝΟΥ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/gallery" className="nav__link">
                ΦΩΤΟΓΡΑΦΙΕΣ
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact" className="nav__link">
                ΕΠΙΚΟΙΝΩΝΙΑ
              </Link>
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
