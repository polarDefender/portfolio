import React, { useEffect, useState } from "react";
import logo from '../assets/logo-no-background.png';
import style from './styles/navbar.module.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setOpen] = useState(false);

  const handleMenuClick = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 810) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
    <nav className={`${style.navbar} ${scrolled ? style.fixed : ''}`}>
      <Link onClick={() => { window.scrollTo(0, 0); }} >
        <img src={logo} alt='logo' className={style.logo} />
      </Link>

      {/* desktop navlink */}
      <ul className={style.navlink}>
        <li 
          key="about"
          className={`${ active === "About" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("About")}
        >
          <a href={`#about`}>About</a>
        </li>
        <li 
          key="work"
          className={`${ active === "Work" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Work")}
        >
          <a href={`#work`}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={`${ active === "Testimonials" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Testimonials")}
        >
          <a href={`#testimonials`}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={`${ active === "Contact" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Contact")}
        >
          <a href={`#contact`}>Contact</a>
        </li>
        <li className={`${style.resume} ${style.font}`}>
          <a href={`#resume`}>Resume</a>
        </li>
      </ul>

      {/* hamburger menu */}
      <ul className={style.hamburger} onClick={handleMenuClick}>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
        <li className={`${style.line} ${isOpen ? style.open : ""}`}></li>
      </ul>

      {/* mobile menu */}
      <ul 
      className={`${style.mobilemenu} ${isOpen ? "h-80" : "h-0"}`}
    >
        <li 
          key="about"
          className={`${ active === "About" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("About")}
        >
          <a href={`#about`}>About</a>
        </li>
        <li 
          key="work"
          className={`${ active === "Work" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Work")}
        >
          <a href={`#work`}>Work</a>
        </li>
        <li 
          key="testimonials"
          className={`${ active === "Testimonials" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Testimonials")}
        >
          <a href={`#testimonials`}>Testimonials</a>
        </li>
        <li 
          key="contact"
          className={`${ active === "Contact" ? "text-cyan" : "text-grey" } ${style.font}`}
          onClick={() => setActive("Contact")}
        >
          <a href={`#contact`}>Contact</a>
        </li>
        <li className={`${style.resume} ${style.font}`}>
          <a href={`#resume`}>Resume</a>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default Navbar