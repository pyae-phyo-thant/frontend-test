import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-50 text-center pb-24">
        <span className="footer__header text-5xl font-extrabold text-red-700 pt-40">
          Let's have a chat
        </span>
        <div className="trusts__mainWrapper clearfix pt-24">
          <div className="trusts__itemWrapper">
            <div className="trusts__itemWrapper--centraliser">
              <span className="extraBold--26 trusts__header w--arrow text-2xl font-extrabold">
                Build
              </span>
              <div className="body--14">Help you build something</div>
            </div>
          </div>
          <div className="trusts__itemWrapper">
            <div className="trusts__itemWrapper--centraliser">
              <span className="extraBold--26 trusts__header w--arrow text-2xl font-extrabold">
                Co-incubate
              </span>
              <div className="body--14">Co-incubate an idea together</div>
            </div>
          </div>
          <div className="trusts__itemWrapper">
            <div className="trusts__itemWrapper--centraliser">
              <span className="extraBold--26 trusts__header w--arrow text-2xl font-extrabold">
                Customise
              </span>
              <div className="body--14">
                Customise a solution for your business
              </div>
            </div>
          </div>
          <div className="trusts__itemWrapper">
            <div className="trusts__itemWrapper--centraliser">
              <span className="extraBold--26 trusts__header w--arrow text-2xl font-extrabold">
                Organise
              </span>
              <div className="body--14">Organise learning sessions with us</div>
            </div>
          </div>
        </div>
        <div className="social__wrapper">
          <a
            href="https://www.facebook.com/codigo.co/"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://www.codigo.co/img/icons/social-facebook.svg"
              width="12"
              height="22"
            />
          </a>
          <a
            href="https://twitter.com/CodigoApps"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://www.codigo.co/img/icons/social-twitter.svg"
              width="23"
              height="18"
            />
          </a>
          <a
            href="https://www.instagram.com/hellocodigo/"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://www.codigo.co/img/icons/social-instagram.svg"
              width="21"
              height="19"
            />
          </a>
          <a
            href="https://www.linkedin.com/company/codigo-pte-ltd"
            target="_blank"
            className="social__item"
          >
            <img
              src="https://www.codigo.co/img/icons/social-linkedIn.svg"
              width="20"
              height="20"
            />
          </a>
        </div>
        <div className="text-sm text-center pb-3">
          Copyright © Codigo - Mobile App Developer Singapore
        </div>
        <div className="text-sm text-center">
          +65 6455 9790 • 24 Sin Ming Lane, Midview City #04-91 Singapore 573970
        </div>
      </footer>
    </>
  );
};

export default Footer;
