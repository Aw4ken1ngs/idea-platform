import React from "react";
import {SvgIconProps} from "../types";


const SvgIconUsd: React.FC<SvgIconProps> = ({ width = 12, height = 12, fill = "currentColor" }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            role="img"
            aria-labelledby="customSvgIconTitle"
        >
            <title id="customSvgIconTitle">Custom SVG Icon</title>
            <path d="M20,8V7.313A5.32,5.32,0,0,0,14.687,2H13.5V0h-3V2H9.313A5.313,5.313,0,0,0,7.772,12.4l2.728.746V19H9.313A2.316,2.316,0,0,1,7,16.687V16H4v.687A5.32,5.32,0,0,0,9.313,22H10.5v2h3V22h1.187a5.313,5.313,0,0,0,1.541-10.4L13.5,10.856V5h1.187A2.316,2.316,0,0,1,17,7.313V8Zm-4.618,6.479a2.314,2.314,0,0,1-.7,4.521H13.5V13.965ZM10.5,10.035,8.618,9.521A2.314,2.314,0,0,1,9.313,5H10.5Z" />
        </svg>
    );
};

export default SvgIconUsd;
