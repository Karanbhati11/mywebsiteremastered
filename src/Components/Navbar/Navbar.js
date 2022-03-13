import React, { useState } from "react";
import "./Navbar.css";
import { HashLink as Link } from "react-router-hash-link";
import { BsGithub } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
function Navbar() {
  const [menuclose, setmenuclose] = useState(true);
  const [icons, setIcons] = useState(true);
  return (
    <React.Fragment>
      <div>
        <nav>
          <ul>
            <li className="logo">GmerX</li>
            <li className="items">
              <Link to="#home" smooth={true}>
                Home
              </Link>
            </li>
            <li className="items">
              <Link to="#about" smooth={true}>
                About
              </Link>
            </li>
            <li className="items">
              <Link to="#contact" smooth={true}>
                Contact
              </Link>
            </li>

            <li className="items icons">
              <AiFillLinkedin size={21} />
            </li>
            <li className="items icons">
              <AiFillInstagram size={21} />
            </li>
            <li className="items icons">
              <BsGithub size={21} />
            </li>

            <li
              className="btn"
              onClick={(e) => {
                e.preventDefault();
                const a = document.querySelectorAll(".items");
                const b = document.querySelectorAll(".icons");

                for (let i = 0; i < b.length; i++) {
                  a[i].classList.toggle("hide");
                }

                setmenuclose(!menuclose);
                setIcons(false);
                for (let i = 0; i < b.length; i++) {
                  a[i].classList.toggle("hide");
                }

                for (let i = 0; i < a.length; i++) {
                  a[i].classList.toggle("show");
                }
                console.log(document.querySelectorAll(".items"));
              }}
            >
              {menuclose && (
                <a className="my_btn" href="/">
                  <i className="fas fa-bars">
                    <HiMenuAlt2 />
                  </i>
                </a>
              )}
              {!menuclose && (
                <a className="my_btn" href="/">
                  <i className="fas fa-bars">
                    <MdOutlineClose />
                  </i>
                </a>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  );
}

export default Navbar;
