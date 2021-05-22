import React from "react";
import logo from "../assets/sparkLogo.svg";
import PrimaryButton from "../components/buttons/PrimaryButton";
function NavFooterLayout({ children }) {
  return (
    <div className="nav-footer-layout">
      <nav className="spark-layout-navbar">
        <div className="spark-layout-navbar__left">
          <img src={logo} alt="Spark Studio" />
        </div>
        <div className="spark-layout-navbar__right">
          <ul className="spark-layout-navbar__right--list">
            <li className="spark-layout-navbar__right--list-item">
              Explore courses
            </li>
            <li className="spark-layout-navbar__right--list-item">About us</li>
            <li className="spark-layout-navbar__right--list-item">
              <PrimaryButton
                buttonText="Book a free trial"
                version="version-1"
              />
            </li>
          </ul>
        </div>
      </nav>
      {children}
      <footer className="spark-layout-footer">Spark footer here</footer>
    </div>
  );
}

export default NavFooterLayout;
