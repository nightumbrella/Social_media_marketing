import React from "react";
import "./footer.css";
import pattern from "../../Images/pattern1.png";
import logo from "../../Images/logo.png";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="footer base">
      <div className="contact">
        <img src={pattern} alt="contact__patter" className="contact__pattern" />
        <h1>
          Want to talk to a <br />
          marketing expert?
        </h1>
        <button className="contact__btn">Contact with us</button>
      </div>

      <div className="footer__content flex space__between">

        <div className="footer__content__left">
          <img src={logo} alt="logo__footer" />
          <p>
            “Lorem ipsum dolor sit amet consectetur. Cras feugiat massa
            pellentesque tortor.{" "}
          </p>
          <form action="#">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </form>
        </div>

        <div className="flex footer__content__right">

          <div>
            <h3>Services</h3>
            <ul>
              <li>
                <a href="#">Incident responder</a>
              </li>
              <li>
                <a href="#">Secure managed it</a>
              </li>
              <li>
                <a href="#">Check website url</a>
              </li>
              <li>
                <a href="#">Locker security</a>
              </li>
            </ul>
          </div>

          <div>
            <h3>About us</h3>
            <ul>
              <li>
                <a href="#">Payment</a>
              </li>
              <li>
                <a href="#">Make saving more</a>
              </li>
              <li>
                <a href="#">Tax caculator</a>
              </li>
              <li>
                <a href="#">Talk to us</a>
              </li>
            </ul>
          </div>

          <div className="contact__data">
            <h3>Contact info</h3>
            <ul>
              <li>
                <a href="#">

                <BsTelephone className="contact__phone"/>
                +88 (246) 658-27-10
                </a>
              </li>
              <li>
                <a href="#">
                  <MdOutlineMail className="contact__mail" />
                  Soroushnorozyui@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Footer;
