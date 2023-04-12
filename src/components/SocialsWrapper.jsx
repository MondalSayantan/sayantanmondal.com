// src/components/SocialsWrapper.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

const SocialsWrapper = () => {
    return (
        <div className="fixed bottom-8 left-0 flex flex-col items-center gap-5 p-4 z-10">
            <a
                href="https://github.com/MondalSayantan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-600 transition-colors rounded-full"
            >
                <FontAwesomeIcon icon={faGithub} size="1.5x" />
            </a>
            <a
                href="https://linkedin.com/in/mondalsayantan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-600 transition-colors rounded-full"
            >
                <FontAwesomeIcon icon={faLinkedin} size="1.5x" />
            </a>
            <a
                href="https://twitter.com/sayantannnnn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center bg-purple-100 text-purple-800 hover:bg-purple-200 hover:text-purple-600 transition-colors rounded-full"
            >
                <FontAwesomeIcon icon={faTwitter} size="1.5x" />
            </a>
        </div>
    );
};

export default SocialsWrapper;
