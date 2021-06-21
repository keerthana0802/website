import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/sparkLogoWhite.png";
import facebook from "../assets/facebookDark.svg";
import instagram from "../assets/instagramDark.svg";
import whatsapp from "../assets/whatsappDark.svg";
import confetti from "../assets/confettiFaded.svg";
function Footer() {
  const [responsiveMode, setResponsiveMode] = useState(false);
  useEffect(() => {
    if (window.innerWidth < 1251) {
      setResponsiveMode(true);
    }
  }, []);
  return (
    <div className="spark-footer__wrapper">
      <img src={confetti} alt="" className="confetti confetti-1" />
      <img src={confetti} alt="" className="confetti confetti-2" />
      <div className="spark-footer">
        <div className="spark-footer__left">
          <div className="spark-footer__left--top">
            <img src={logo} alt="" className="spark-footer__left--top-logo" />
            <p className="spark-footer__left--top-content">
              Online extracurriculars for your children. Why online? Easy. Get access to great teachers, superb curriculum & have your children interact with great minds from the comfort of your home. Why Spark Studio? We put outcomes first. Our kids create in class. They build, they debate, they express, they enjoy themselves in an
              unaided manner, with little to no parent intervention. You can be at peace knowing your child is being taken care, be it making Among Us clay animation videos or strumming a guitar or learning communication while making friends.
            </p>
          </div>
          <div className="spark-footer__left--bottom">
            <h1 className="spark-footer__left--bottom-header">Get Started</h1>
            <Link to="/book-a-trial">Book a FREE Trial</Link>
            {/* <Link>Summer Fest</Link>
            <Link>Workshops</Link> */}
          </div>
        </div>
        <div className="spark-footer__right spark-footer__sitemap">
          {/* <div className="spark-footer__right--column"></div> */}
          <div className="spark-footer__right--column">
            <h1 className="spark-footer__right--column-item-header">Company</h1>
            <h3 className="spark-footer__right--column-item">
              <Link to="/about-us">About us</Link>
            </h3>
            {/* <h3 className="spark-footer__right--column-item">
              <Link to="/about-us">Why Spark Studio</Link>
            </h3> */}
            <h3 className="spark-footer__right--column-item">
              <Link to="/faq">FAQs</Link>
            </h3>
            {/* <h3 className="spark-footer__right--column-item">
              <Link to="/about-us">Careers</Link>
            </h3> */}
            {/* <h3 className="spark-footer__right--column-item">
              <Link to="/about-us">Press Releases</Link>
            </h3> */}
            <h3 className="spark-footer__right--column-item">
              <Link to="/privacy-policy">Privacy Policy</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/terms-and-conditions">Terms and Conditions</Link>
            </h3>
            {/* <h3 className="spark-footer__right--column-item">
              <Link to="/about-us">Refund Policy</Link>
            </h3> */}
          </div>
          <div className="spark-footer__right--column">
            <h1 className="spark-footer__right--column-item-header">Courses</h1>
            <h3 className="spark-footer__right--column-item">
              <Link to="/all-courses">All Courses</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/debate">Debate</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/dramatic-storytelling">
                Dramatic Storytelling
              </Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/art">Art</Link>
            </h3>

            <h3 className="spark-footer__right--column-item">
              <Link to="/course/western-vocals">Western Vocals</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/animation">Animation</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/public-speaking">Public Speaking</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/storytelling">Storytelling</Link>
            </h3>
            <h3 className="spark-footer__right--column-item">
              <Link to="/course/photography">Photography</Link>
            </h3>

            <h3 className="spark-footer__right--column-item">
              <Link to="/course/guitar">Guitar</Link>
            </h3>
            {/* <h3 className="spark-footer__right--column-item">
              <Link to="/course/debate">Debate</Link>
            </h3> */}
          </div>
        </div>
      </div>
      {responsiveMode ? (
        <div className="spark-footer__social">
          <div>
            <span className="contact">
              <a href="tel:+916363701578" className="call">
                Call us : +91 63637 01578{" "}
              </a>
              <span className="separator"></span>
              <a href="https://bit.ly/whatsappsparkst" className="whatsapp">
                WhatsApp us : +91 89517 62016
              </a>
            </span>
            {/* <a href="tel:+916363701578" className="call">
              Call +91 63637 01578{" "}
            </a> */}
          </div>
          <p>Copyright 2020 © Imagineer Technologies Pvt. Ltd.</p>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/TeamSparkStudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/sparkstudio_co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://bit.ly/whatsappsparkst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="" />
            </a>
          </div>
        </div>
      ) : (
        <div className="spark-footer__social">
          <div className="social-icons">
            <a
              href="https://www.facebook.com/TeamSparkStudio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="" />
            </a>
            <a
              href="https://www.instagram.com/sparkstudio_co/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="" />
            </a>
            <a
              href="https://bit.ly/whatsappsparkst"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={whatsapp} alt="" />
            </a>
          </div>
          <span className="contact">
            <a href="tel:+916363701578" className="call">
              Call us : +91 63637 01578{" "}
            </a>
            <span className="separator"></span>
            <a href="https://bit.ly/whatsappsparkst" className="whatsapp">
              WhatsApp us : +91 89517 62016
            </a>
          </span>
          <p>Copyright 2020 © Imagineer Technologies Pvt. Ltd.</p>
        </div>
      )}
    </div>
  );
}

export default Footer;
