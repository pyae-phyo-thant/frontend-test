import React from "react";
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
        <section className="navBarHamburger__mainWrapper clearfix ">
          <div className="circle">
            <div className="ratio"></div>
          </div>
          <div className="bars">
            <span className="navBarHamburger__strokeElement"></span>
            <span className="navBarHamburger__strokeElement"></span>
            <span className="navBarHamburger__strokeElement"></span>
            <span className="navBarHamburger__strokeElement"></span>
          </div>
        </section>
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
