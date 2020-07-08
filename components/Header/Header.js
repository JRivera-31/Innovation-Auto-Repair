import React, { useState, useEffect } from "react";
import headerStyles from "./header.module.css";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // equivalent to componentDidMount()
  useEffect(() => {
    const closeOnScroll = () => setIsOpen(false);

    window.addEventListener("scroll", closeOnScroll);

    return () => {
      window.removeEventListener("scroll", closeOnScroll);
    };
  }, []);

  const toggleOpen = () => {
    console.log("toggling");
    setIsOpen(!isOpen);
  };

  const rotate1 = isOpen ? headerStyles.rotate1 : "";
  const rotate2 = isOpen ? headerStyles.rotate2 : "";
  const rotate3 = isOpen ? headerStyles.rotate3 : "";
  const sidebarChange = isOpen ? headerStyles.change : "";

  return (
    <div>
      <div className={headerStyles.header}>
        <div className={headerStyles.innerHeader}>
          <div className={headerStyles.logoContainer}>
          </div>
          <div className={headerStyles.navHolder}>
            <div onClick={toggleOpen} className={headerStyles.hamburgerMenu}>
              <div
                className={`${headerStyles.line} ${headerStyles["line-1"]} ${rotate1}`}
              ></div>
              <div
                className={`${headerStyles.line} ${headerStyles["line-2"]} ${rotate2}`}
              ></div>
              <div
                className={`${headerStyles.line} ${headerStyles["line-3"]} ${rotate3}`}
              ></div>
            </div>
          </div>

          <ul className={headerStyles.navigation}>
            <a href="#about-section">
              <li>About</li>
            </a>
            <a href="#contact-section">
              <li>Contact</li>
            </a>
            <a>
              <li>Book With Us</li>
            </a>
          </ul>
        </div>
      </div>

      <nav className={`${headerStyles.sidebar} ${sidebarChange}`}>
        <ul className={headerStyles.navList}>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}>About</a>
          </li>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}>Contact</a>
          </li>
          <li className={headerStyles.navItem}>
            <a className={headerStyles.navLink}>Book With Us</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
