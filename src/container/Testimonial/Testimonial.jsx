import { AppWrapper, MotionWrapper } from "../../wrapper";
import { bioPhotos } from "../../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Testimonial.scss";

import { Pagination, Autoplay } from "swiper";

const Testimonial = () => {
    return (
        <div className="app__bio">
            <h2 className="app__bio-head">
                My <span>BIO</span>
            </h2>

            <div className="app__bio-content">
                <div className="app__bio-content-img">
                    <Swiper
                        pagination={{
                            dynamicBullets: true,
                            clickable: true,
                        }}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Pagination, Autoplay]}
                        className="myPhotosSwiper"
                    >
                        {bioPhotos.map((photo) => (
                            <SwiperSlide key={`myPhoto-${photo.id}`}>
                                <img src={photo.imgUrl} alt="my photos" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="app__bio-content-info">
                    <h3>
                        Hi! My name is <span>Abdufotihkhuja</span>
                    </h3>
                    <p>
                        I have double undergraduate degrees in "Computer
                        Engineering" at "Politecnico di Torino" (Italy) and in
                        "Information Technology and Automation Systems in
                        Industry (ICT)" at "Turin Polytechnic University in
                        Tashkent" (Uzbekistan).
                    </p>
                    <p>
                        Currently, I work as a FrontEnd developer. My tech
                        stack: HTML, CSS, JavaScript (DOM), React.js,
                        TypeScript, Redux Toolkit.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default AppWrapper(
    MotionWrapper(Testimonial, "app__testimonial"),
    "testimonial",
    "app__primarybg"
);
