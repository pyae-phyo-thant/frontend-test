import React, { useEffect, useState, useRef } from "react";
import logo from "./logo-codigo-red.svg";
import "./header.css";

const Header = () => {
  return (
    <header className="text-black-600 text-sm w-full fixed z-50">
      <nav className="bg-white px-10 py-6 flex item-center justify-between mb-p">
        <div className="logo" style={{ width: "20%" }}>
          {window.location.href ===
          "http://localhost:3000/work/ocbc-pay-anyone" ? (
            <a
              className="is--inView navBar__backToWork_mainWrapper"
              href="http://localhost:3000/work/"
            >
              <div className="navBar__backToWork_arrowIco"></div>
              <p className="navBar__backToWork_text">Back to Work</p>
            </a>
          ) : (
            <a href="http://localhost:3000/work/" className="logo_wraper">
              <img src={logo} alt="codigo-logo" />
            </a>
          )}
        </div>
        <input
          className="menu-icon"
          type="checkbox"
          id="menu-icon"
          name="menu-icon"
        />
        <label htmlFor="menu-icon"></label>
        <nav className="nav">
          <ul className="pt-5">
            <li>
              <a href="#">Work</a>
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Request a quote</a>
            </li>
            <li>
              <a href="#">Let's chat</a>
            </li>
            <li>
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
            </li>
          </ul>
        </nav>
        <section className="menu_items_wraper">
          {window.location.href ===
          "http://localhost:3000/work/ocbc-pay-anyone" ? (
            <ul className="flex items-center font-light space-x-8">
              <li className="pr-6">
                <a
                  href="#"
                  className="rounded-full px-5 py-4 text-white bg-red-900"
                >
                  Request a quote
                </a>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center font-light space-x-8">
              <li className="pr-6 font-bold">
                <a href="#">Work</a>
              </li>
              <li className="pr-6">
                <a href="#">Solutions</a>
              </li>
              <li className="pr-6">
                <a href="#">Services</a>
              </li>
              <li className="pr-6">
                <a href="#">About us</a>
              </li>
              <li className="pr-6">
                <a href="#">Blog</a>
              </li>
              <li className="pr-6">
                <a
                  href="#"
                  className="rounded-full px-5 py-4 text-white bg-red-900"
                >
                  Request a quote
                </a>
              </li>
            </ul>
          )}
        </section>
      </nav>
    </header>
  );
};

export default Header;
