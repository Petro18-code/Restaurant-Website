import React, { useContext, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContextProvider";

import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();
  const { token, setToken, setUser, user } = useContext(UserContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.giardino} alt="app logo" />
      </div>
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="#home">Home</a>
        </li>
        <li className="p__opensans">
          <a href="#about">About</a>
        </li>
        <li className="p__opensans">
          <a href="#menu">Menu</a>
        </li>
        <Link to="/reviews" className="p__opensans review__link">
          Reviews
        </Link>
        <li className="p__opensans">
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        {!token ? (
          <>
            <Link to="/login" className="p__opensans">
              Log In
            </Link>
            <Link to="/register" className="p__opensans">
              Register
            </Link>
          </>
        ) : (
          <>
            {user?.role === "admin" && (
              <Link to="/admin" className="p__opensans">
                Admin Dashboard
              </Link>
            )}
            {user?.role === "user" && (
              <Link to="/reservation" className="p__opensans">
                Book a Table
              </Link>
            )}
            <a href="/" className="p__opensans" onClick={handleLogout}>
              Logout
            </a>
          </>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li className="p__opensans">
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li className="p__opensans">
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
              <li className="p__opensans">
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  Menu
                </a>
              </li>
              <Link to="/reviews" className="p__opensans review__link-smallscreen">
                Reviews
              </Link>
              <li className="p__opensans">
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  Contact
                </a>
              </li>

              <div className="app__navbar-login">
                {!token ? (
                  <>
                    <Link to="/login" className="p__opensans">
                      Log In
                    </Link>
                    <Link to="/register" className="p__opensans">
                      Register
                    </Link>
                  </>
                ) : (
                  <>
                    {user?.role === "admin" && (
                      <Link
                        to="/admin/reservations"
                        className="p__opensans"
                        onClick={() => setToggleMenu(false)}
                      >
                        Admin Dashboard
                      </Link>
                    )}
                    {user?.role === "user" && (
                      <Link
                        to="/reservation"
                        className="p__opensans"
                        onClick={() => setToggleMenu(false)}
                      >
                        Book a Table
                      </Link>
                    )}
                    <a
                      href="/"
                      className="p__opensans"
                      onClick={() => {
                        handleLogout();
                        setToggleMenu(false);
                      }}
                    >
                      Logout
                    </a>
                  </>
                )}
              </div>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
