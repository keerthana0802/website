import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import logo from "../assets/sparkLogo.png";
import cartIcon from "../assets/cartIconBlack.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SocialIcons from "../components/SocialIcons";
import hamburger from "../assets/hamburger.svg";
import { Link } from "react-router-dom";
import uuid from "react-uuid";
import moengageEvent from "../helpers/MoengageEventTracking";
import { cartDrawerOpen } from "../store/actions/rootActions";
import { useSelector, useDispatch } from "react-redux";
import CartDrawer from "../components/drawers/CartDrawer";
function NavFooterLayout({ children }) {
  // ! State for responsive mode
  const [responsiveMode, setResponsiveMode] = useState(false);
  const [menuDrawerClass, setMenuDrawerClass] = useState(
    "spark-layout-navbar hidden"
  );

  useEffect(() => {
    if (window.innerWidth < 640) {
      setResponsiveMode(true);
    }
    if (!window.localStorage.visitor_uuid) {
      window.localStorage.setItem("visitor_uuid", uuid());
    }
    // moengageEvent();
  }, []);
  const containerLayout = useRef(null);
  const cart = useSelector((state) => state.cart);
  const cartDrawer = useSelector((state) => state.cartDrawer);
  const dispatch = useDispatch();
  const [cartDrawerClass, setCartDrawerClass] = useState(
    cartDrawer
      ? "spark-layout-navbar--cart-drawer visible"
      : "spark-layout-navbar--cart-drawer hidden"
  );
  useEffect(() => {
    cartDrawer
      ? setCartDrawerClass("spark-layout-navbar--cart-drawer visible")
      : setCartDrawerClass("spark-layout-navbar--cart-drawer hidden");
  }, [cartDrawer]);
  return (
    <div className="nav-footer-layout" id="layout" ref={containerLayout}>
      {responsiveMode ? (
        <nav className={menuDrawerClass}>
          <div className="spark-layout-navbar__left">
            <Link to="/">
              <img src={logo} alt="Spark Studio" />
            </Link>
          </div>
          <div className="trial-hamburger">
            <PrimaryButton
              buttonText="Book a FREE trial"
              version="version-1"
              linkTo="https://book-staging.sparkstudio.co/"
            />
            <img
              src={hamburger}
              alt=""
              className="menu-toggle"
              onClick={() => {
                menuDrawerClass === "spark-layout-navbar hidden"
                  ? setMenuDrawerClass("spark-layout-navbar visible")
                  : setMenuDrawerClass("spark-layout-navbar hidden");
              }}
            />
          </div>

          <div className="spark-layout-navbar__right">
            <ul className="spark-layout-navbar__right--list">
              <div>
                <li className="spark-layout-navbar__right--list-item">
                  <Link to="/all-courses">Explore Courses</Link>
                </li>
                <li className="spark-layout-navbar__right--list-item">
                  About Us
                </li>
                <li className="spark-layout-navbar__right--list-item">
                  <PrimaryButton
                    buttonText="Book a FREE trial"
                    version="version-1"
                    linkTo="https://book-staging.sparkstudio.co/"
                  />
                </li>
              </div>
              <li className="spark-layout-navbar__right--list-ruler"></li>
              <div>
                <li className="spark-layout-navbar__right--list-item">
                  <div className="contact__call">
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="call-icon"
                      >
                        <path fill="none" d="M0 0h24v24H0V0z"></path>
                        <path
                          d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                          fill="#f3705b"
                          className="color000 svgShape"
                        ></path>
                      </svg>
                    </span>
                    <p>+91 63637 01578</p>
                  </div>
                </li>
                <li className="spark-layout-navbar__right--list-item">
                  <a
                    className="contact__whatsapp"
                    href="https://bit.ly/whatsappsparkst"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        enableBackground="new 0 0 24 24"
                        viewBox="0 0 24 24"
                        className="whatsapp-icon"
                      >
                        <path
                          d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1
	c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3
	c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7
	c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
	 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9
	C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
	C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
                        />
                      </svg>
                    </span>
                    <p>WhatsApp us</p>
                  </a>
                </li>
              </div>
              <li className="spark-layout-navbar__right--list-item">
                <p className="contact__content">
                  Enriching young lives with the pursuit of excellence
                </p>
              </li>
            </ul>
          </div>
        </nav>
      ) : (
        <nav className="spark-layout-navbar navbar-scrolling">
          <div className="spark-layout-navbar__left">
            <Link to="/">
              <img src={logo} alt="Spark Studio" />
            </Link>
          </div>
          <div className="spark-layout-navbar__right">
            <ul className="spark-layout-navbar__right--list">
              <li className="spark-layout-navbar__right--list-item">
                <Link to="/all-courses">Explore Courses</Link>
              </li>
              <li className="spark-layout-navbar__right--list-item">
                About Us
              </li>
              <li className="spark-layout-navbar__right--list-item">
                <PrimaryButton
                  buttonText="Book a FREE trial"
                  version="version-1"
                  linkTo="https://book-staging.sparkstudio.co/"
                />
              </li>
              <li
                className="spark-layout-navbar__right--list-item cart-icon"
                onClick={() => {
                  dispatch(cartDrawerOpen());
                }}
              >
                <img src={cartIcon} alt="" />
                {cart.length > 0 ? (
                  <div className="cart-bubble">
                    {cart?.reduce((a, b) => a + b.qty, 0)}
                  </div>
                ) : null}
              </li>
            </ul>
          </div>
          <div className={cartDrawerClass}>
            <CartDrawer selectedCourses={cart} />
          </div>
        </nav>
      )}
      {children}

      <div className="footer-wrapper">
        <div className="footer">
          <div className="footer__top">
            <div className="footer__top--contact-us">
              <p className="contact__content">
                Enriching young lives with the pursuit of excellence
              </p>
              <h1 className="contact__header">Contact Us</h1>
              <div className="contact__call">
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    className="call-icon"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path
                      d="M19.23 15.26l-2.54-.29c-.61-.07-1.21.14-1.64.57l-1.84 1.84c-2.83-1.44-5.15-3.75-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52c-.12-1.01-.97-1.77-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                      fill="#ffffff"
                      className="color000 svgShape"
                    ></path>
                  </svg>
                </span>
                <p>+91 63637 01578</p>
              </div>
              <a
                className="contact__whatsapp"
                href="https://bit.ly/whatsappsparkst"
                target="_blank"
                rel="noreferrer"
              >
                <span className="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                    className="whatsapp-icon"
                  >
                    <path
                      d="M16.6,14c-0.2-0.1-1.5-0.7-1.7-0.8c-0.2-0.1-0.4-0.1-0.6,0.1
	c-0.2,0.2-0.6,0.8-0.8,1c-0.1,0.2-0.3,0.2-0.5,0.1c-0.7-0.3-1.4-0.7-2-1.2c-0.5-0.5-1-1.1-1.4-1.7c-0.1-0.2,0-0.4,0.1-0.5
	c0.1-0.1,0.2-0.3,0.4-0.4c0.1-0.1,0.2-0.3,0.2-0.4c0.1-0.1,0.1-0.3,0-0.4c-0.1-0.1-0.6-1.3-0.8-1.8C9.4,7.3,9.2,7.3,9,7.3
	c-0.1,0-0.3,0-0.5,0C8.3,7.3,8,7.5,7.9,7.6C7.3,8.2,7,8.9,7,9.7c0.1,0.9,0.4,1.8,1,2.6c1.1,1.6,2.5,2.9,4.2,3.7
	c0.5,0.2,0.9,0.4,1.4,0.5c0.5,0.2,1,0.2,1.6,0.1c0.7-0.1,1.3-0.6,1.7-1.2c0.2-0.4,0.2-0.8,0.1-1.2C17,14.2,16.8,14.1,16.6,14
	 M19.1,4.9C15.2,1,8.9,1,5,4.9c-3.2,3.2-3.8,8.1-1.6,12L2,22l5.3-1.4c1.5,0.8,3.1,1.2,4.7,1.2h0c5.5,0,9.9-4.4,9.9-9.9
	C22,9.3,20.9,6.8,19.1,4.9 M16.4,18.9c-1.3,0.8-2.8,1.3-4.4,1.3h0c-1.5,0-2.9-0.4-4.2-1.1l-0.3-0.2l-3.1,0.8l0.8-3l-0.2-0.3
	C2.6,12.4,3.8,7.4,7.7,4.9S16.6,3.7,19,7.5C21.4,11.4,20.3,16.5,16.4,18.9"
                    />
                  </svg>
                </span>
                <p>WhatsApp us</p>
              </a>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="footer__bottom--copyright">
              <h1 className="copyright">
                Copyright 2020 © Imagineer Technologies Pvt. Ltd.
              </h1>
              <SocialIcons />
            </div>
            <div className="footer__bottom--terms">
              <a
                href="https://sparkstudio.co/tnc"
                rel="noreferrer"
                target="_blank"
                className="terms"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavFooterLayout;
