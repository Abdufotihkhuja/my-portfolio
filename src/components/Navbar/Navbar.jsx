import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import "./Navbar.scss";

import logo from "/src/assets/svg/logo.png";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <a href="#home">
                    <img src={logo} alt="logo" />
                </a>
            </div>
            <ul className="app__navbar-links">
                {["home", "about", "work", "skills", "bio"].map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div />
                        <a href={`#${item === "bio" ? "testimonial" : item}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={() => setToggle(true)} />
                {toggle && (
                    <motion.div
                        whileInView={{ x: [300, 0] }}
                        transition={{ duration: 0.85, ease: "easeInOut" }}
                    >
                        <HiX onClick={() => setToggle(false)} />
                        <ul className="app__navbar-links">
                            {["home", "about", "work", "skills", "bio"].map(
                                (item) => (
                                    <li key={item}>
                                        <a
                                            onClick={() => setToggle(false)}
                                            href={`#${
                                                item === "bio"
                                                    ? "testimonial"
                                                    : item
                                            }`}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                )
                            )}
                        </ul>
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
