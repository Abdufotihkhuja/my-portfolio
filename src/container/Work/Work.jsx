import { useState, useEffect } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrapper, MotionWrapper } from "../../wrapper";
import { works as WorksData } from "../../constants";

import { Pagination } from "../../components";
import "./Work.scss";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });
    const [works, setWorks] = useState(WorksData);

    const [currentPage, setCurrentPage] = useState(1);
    const [maxPage, setMaxPage] = useState(1);
    const [currentWorkPage, setCurrentWorkPage] = useState([]);

    const handleWorkFilter = (item) => {
        setActiveFilter(item);
        setCurrentPage(1);

        setAnimateCard([{ y: 100, opacity: 0 }]);

        const timeOut = setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);
            if (item === "All") {
                setMaxPage(Math.ceil(works?.length / 8));
                setCurrentWorkPage(works.slice(0, 8));
            } else {
                const filteredCurrentWorks = works.filter((work) =>
                    work.tags.includes(item)
                );
                setCurrentWorkPage(filteredCurrentWorks.slice(0, 8));
                setMaxPage(Math.ceil(filteredCurrentWorks?.length / 8));
            }
        }, 500);

        return () => clearTimeout(timeOut);
    };

    const handleBackPage = () => {
        if (currentPage > 1) {
            setCurrentPage((currentPage) => currentPage - 1);
            handlePagination("prev");
        }
    };

    const handleNextPage = () => {
        if (currentPage < maxPage) {
            setCurrentPage((currentPage) => currentPage + 1);
            handlePagination("next");
        }
    };

    const handlePagination = (item) => {
        let livePage;
        if (item === "next") {
            livePage = currentPage + 1;
        } else if (item === "prev") {
            livePage = currentPage - 1;
        }

        setAnimateCard([{ y: 100, opacity: 0 }]);

        const timeOut = setTimeout(() => {
            setAnimateCard([{ y: 0, opacity: 1 }]);

            if (activeFilter === "All") {
                if (livePage == 1) {
                    setCurrentWorkPage(works.slice(0, 8));
                } else {
                    setCurrentWorkPage(
                        works.slice(currentPage * 8, livePage * 8)
                    );
                }
            } else {
                const filteredCurrentWorks = works.filter((work) =>
                    work.tags.includes(activeFilter)
                );
                setCurrentWorkPage(
                    filteredCurrentWorks.slice(currentPage * 8, livePage * 8)
                );
                if (livePage == 1) {
                    setCurrentWorkPage(filteredCurrentWorks.slice(0, 8));
                } else {
                    setCurrentWorkPage(
                        filteredCurrentWorks.slice(
                            currentPage * 8,
                            livePage * 8
                        )
                    );
                }
            }
        }, 500);

        return () => clearTimeout(timeOut);
    };

    useEffect(() => {
        handleWorkFilter(activeFilter);
    }, [activeFilter]);

    return (
        <>
            <h2 className="head-text">
                My Creative <span>Portfolio</span> Section
            </h2>
            <div className="app__work-filter">
                {[
                    "In Dev",
                    "Latest",
                    "Layout",
                    "Expert",
                    "Intermediate",
                    "Novice",
                    "All",
                ].map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleWorkFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${
                            activeFilter === item ? "item-active" : ""
                        }`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work-portfolio"
            >
                {currentWorkPage.length ? (
                    currentWorkPage?.map((work, idx) => (
                        <div
                            className="app__work-item app__flex"
                            key={`works-${idx}-${work.id}`}
                        >
                            <div className="app__work-img app__flex">
                                <img src={work.imgUrl} alt={work.name} />

                                <motion.div
                                    whileHover={{ opacity: [0, 1] }}
                                    transition={{
                                        duration: 0.25,
                                        ease: "easeInOut",
                                        staggerChildren: 0.5,
                                    }}
                                    className="app__work-hover app__flex"
                                >
                                    <a
                                        href={work.projectLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className=" app__flex"
                                        >
                                            <AiFillEye />
                                        </motion.div>
                                    </a>
                                    <a
                                        href={work.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <motion.div
                                            whileInView={{ scale: [0, 1] }}
                                            whileHover={{ scale: [1, 0.9] }}
                                            transition={{
                                                duration: 0.25,
                                            }}
                                            className=" app__flex"
                                        >
                                            <AiFillGithub />
                                        </motion.div>
                                    </a>
                                </motion.div>
                            </div>

                            <div className="app__work-content app__flex">
                                <h4 className="bold-text">{work.title}</h4>
                                <p className="p-text" style={{ marginTop: 10 }}>
                                    {work.description}
                                </p>

                                <div className="app__work-tag app__flex">
                                    <p className="p-text">{work.tags[0]}</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="app__work-item app__flex">
                        <h1 className="bold-text">Coming soon...</h1>
                    </div>
                )}
            </motion.div>

            <motion.div
                animate={animateCard}
                transition={{ duration: 0.5, delayChildren: 0.5 }}
                className="app__work__pagination"
            >
                <Pagination
                    handleBackPage={handleBackPage}
                    handleNextPage={handleNextPage}
                    currentPage={currentPage}
                    maxPage={maxPage}
                    currentWorkPage={currentWorkPage}
                />
            </motion.div>
        </>
    );
};

export default AppWrapper(
    MotionWrapper(Work, "app__works"),
    "work",
    "app__primarybg"
);

