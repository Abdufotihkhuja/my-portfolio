import React, { useState } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";
import { AppWrapper, MotionWrapper } from "../../wrapper";

const abouts = [
    {
        title: "FrontEnd Dev",
        description: "I am a good FrontEnd developer.",
        imgUrl: images.about01,
    },
    {
        title: "Web Design",
        description: "Design is one of the important parts in Web.",
        imgUrl: images.about02,
    },
    {
        title: "Backend Dev",
        description:
            "Back-end dev is one of the most important components of Web.",
        imgUrl: images.about03,
    },
    {
        title: "DevOps Dev",
        description: "DevOps makes product dev and optimization faster.",
        imgUrl: images.about04,
    },
];

const About = () => {
    return (
        <>
            <h2 className="head-text">
                I Know that <span>Good Development</span>
                <br />
                means <span>Good Business</span>
            </h2>

            <div className="app__profiles">
                {abouts.map((about, idx) => (
                    <motion.div
                        whileInView={{ opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5, type: "tween" }}
                        className="app__profile-item"
                        key={about.title + idx}
                    >
                        <img src={about.imgUrl} alt={about.title} />
                        <h2 className="bold-text" style={{ marginTop: 20 }}>
                            {about.title}
                        </h2>
                        <h2 className="p-text" style={{ marginTop: 10 }}>
                            {about.description}
                        </h2>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default AppWrapper(
    MotionWrapper(About, "app__about"),
    "about",
    "app__whitebg"
);
