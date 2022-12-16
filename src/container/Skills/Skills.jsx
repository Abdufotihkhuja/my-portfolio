import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";

import { AppWrapper, MotionWrapper } from "../../wrapper";
import { skills as SkillsData, experience, skills } from "../../constants";
import "./Skills.scss";
import React from "react";

const Skills = () => {
    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>

            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map((skill, idx) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={`${skill.name}-${idx}`}
                        >
                            <div
                                className="app__flex"
                                style={{ backgroundColor: skill.bgColor }}
                            >
                                <img src={skill.icon} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div className="app__skills-exp">
                    {experience?.map((experience, idx) => (
                        <motion.div
                            className="app__skills-exp-item"
                            key={`exp-${experience.id}-${idx}`}
                        >
                            <div className="app__skills-exp-year">
                                <p className="bold-text">
                                    {experience.dateFrom}--{experience.dateTo}
                                </p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {experience?.works.map((work, idx) => (
                                    <React.Fragment
                                        key={`work-company-${work.id}-${idx}`}
                                    >
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={work.name}
                                        >
                                            <h4 className="bold-text">
                                                {work.name}
                                            </h4>
                                            <p className="p-text">
                                                {work.company}
                                            </p>
                                        </motion.div>
                                        <ReactToolTip
                                            id={work.name}
                                            effect="solid"
                                            arrowColor="#fff"
                                            className="skills-tooltip"
                                        >
                                            {work.desc}
                                        </ReactToolTip>
                                    </React.Fragment>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrapper(
    MotionWrapper(Skills, "app__skills"),
    "skills",
    "app__whitebg"
);
