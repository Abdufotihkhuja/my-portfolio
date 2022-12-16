import React from "react";
import { BsTelegram, BsInstagram, BsLinkedin } from "react-icons/bs";

const SocialMedia = () => (
    <div className="app__social">
        <div>
            <a href="https://t.me/abdufotihkhuja" target={"_blank"}>
                <BsTelegram />
            </a>
        </div>
        <div>
            <a
                href="https://uz.linkedin.com/in/abdufotihkhuja"
                target={"_blank"}
            >
                <BsLinkedin />
            </a>
        </div>
        <div>
            <a href="https://instagram.com/abdufotihkhuja" target={"_blank"}>
                <BsInstagram />
            </a>
        </div>
    </div>
);

export default SocialMedia;
