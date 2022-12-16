import React from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./Header.scss";

import { AppWrapper } from "../../wrapper";

const scaleVariants = {
    whiteInView: {
        scale: [0, 1],
        opacity: [0, 1],
        transition: {
            duration: 1,
            ease: "easeInOut",
        },
    },
};

const Header = () => {
    return (
        <div id="home" className="app__header app__flex">
            <motion.div
                whiteInView={{ x: [-100, 0], opacity: [0, 1] }}
                transition={{ duration: 0.6 }}
                className="app__header-info"
            >
                <div className="app__header-badge">
                    <div className="badge-cmp app__flex sub__title">
                        <span>👋</span>
                        <div style={{ marginLeft: 20 }}>
                            <p className="p-text">Hello, I am</p>
                            <h1 className="head-text">Abdufotihkhuja</h1>
                        </div>
                    </div>
                    <div className="tag-cmp app__flex sub__title">
                        <p className="p-text">FrontEnd Developer</p>
                        <p className="p-text">React, Redux dev</p>
                    </div>
                </div>
            </motion.div>

            <motion.div
                whileInView={{ opacity: [0, 1] }}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__header-img"
            >
                <img src={images.profile} alt="profile_bg" />
                <motion.img
                    whileInView={{ scale: [0, 1] }}
                    transition={{ duration: 1, ease: "easeInOut" }}
                    className="overlay_circle"
                    src={images.circle}
                    alt="profile_circle"
                />
            </motion.div>

            <motion.div
                variants={scaleVariants}
                whileInView={scaleVariants.whiteInView}
                className="app__header-circles"
            >
                {[images.react, images.redux, images.sass].map(
                    (circle, idx) => (
                        <div
                            className="circle-cmp app__flex"
                            key={`circle-${idx}`}
                        >
                            <img src={circle} alt="circle" />
                        </div>
                    )
                )}
            </motion.div>
        </div>
    );
};

export default AppWrapper(Header, "home");
