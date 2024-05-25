import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <h1>
            <span style={{ color: "orange", fontFamily: "bold" }}>go</span>
            <span style={{ color: "blue" }}>ibibo</span>
          </h1>
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Flight
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/hotels" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>

              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Hotels
              </span>
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/train" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>

              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Train
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/cabs" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>

              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Cabs
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/bus" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Bus
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/holiday" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Holiday
              </span>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/forex" className="nav-links" onClick={closeMobileMenu}>
              <span>
                <img
                  className="menu-icons"
                  src="https://cdn-icons-png.flaticon.com/128/984/984233.png"
                  alt=""
                />
              </span>
              <span
                style={{
                  fontSize: "25px",
                  fontFamily: "serif",
                  padding: "12px",
                  color: "grey",
                }}
              >
                Forex
              </span>
            </Link>
          </li>
          <div className="auth-btn">
            <img
              className="user-icon"
              src="https://cdn-icons-png.flaticon.com/128/3177/3177440.png"
              alt="user-icon"
            />
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links nav-links-btn"
                onClick={closeMobileMenu}
              >
                <span
                  style={{
                    fontSize: "18px",
                    fontFamily: "serif",
                    padding: "10px",
                    color: "Black",
                  }}
                >
                  Login/Signup
                </span>
              </Link>
            </li>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
