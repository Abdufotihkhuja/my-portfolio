import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import "./Pagination.scss";

const Pagination = ({
    handleBackPage,
    handleNextPage,
    currentPage,
    maxPage,
    currentWorkPage,
}) => {
    return (
        <div className="app__flex app__work-pagination-content">
            {currentWorkPage.length >= 1 ? (
                <>
                    <button
                        onClick={handleBackPage}
                        disabled={currentPage === 1}
                    >
                        <AiOutlineLeft />
                    </button>
                    <p className="bold__text">{currentPage}</p>
                    <span>of</span>
                    <p className="bold__text">{maxPage}</p>
                    <button
                        onClick={handleNextPage}
                        disabled={maxPage === currentPage}
                    >
                        <AiOutlineRight />
                    </button>
                </>
            ) : null}
        </div>
    );
};

export default Pagination;
