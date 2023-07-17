import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/trans_logo_white.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const navToggle = document.getElementById("nav-toggle");
    const navClose = document.getElementById("nav-close");
    const navMenu = document.getElementById("nav-menu");

    const closeMenu = () => {
      navMenu.classList.remove("show-menu");
    };

    if (navToggle) {
      navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
      });
    }

    if (navClose) {
      navClose.addEventListener("click", closeMenu);
    }

    const navLinks = document.querySelectorAll(".nav__link");
    navLinks.forEach((navLink) => {
      navLink.addEventListener("click", closeMenu);
    });

    return () => {
      if (navToggle) {
        navToggle.removeEventListener("click", () => {
          navMenu.classList.add("show-menu");
        });
      }

      if (navClose) {
        navClose.removeEventListener("click", closeMenu);
      }

      navLinks.forEach((navLink) => {
        navLink.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll(".nav__link");

    navLinks.forEach((navLink) => {
      const linkPath = navLink.getAttribute("href");
      if (linkPath === location.pathname) {
        setActiveLink(linkPath);
      }
    });
  }, [location.pathname]);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <Link to="/" className="nav__logo">
          <img className="nav__logo" src={logo} alt="flow cafe logo" />
        </Link>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <Link
                to="/"
                className={`nav__link ${
                  activeLink === "/" ? "active-link" : ""
                }`}
              >
                ΑΡΧΙΚΗ
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/menu"
                className={`nav__link ${
                  activeLink === "/menu" ? "active-link" : ""
                }`}
              >
                ΜΕΝΟΥ
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/gallery"
                className={`nav__link ${
                  activeLink === "/gallery" ? "active-link" : ""
                }`}
              >
                ΦΩΤΟΓΡΑΦΙΕΣ
              </Link>
            </li>
            <li className="nav__item">
              <Link
                to="/contact"
                className={`nav__link ${
                  activeLink === "/contact" ? "active-link" : ""
                }`}
              >
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
