import React from "react";
import {SvgIconProps} from "../types";

const SvgIconRub: React.FC<SvgIconProps> = ({width = 12, height = 12, fill = "currentColor",}) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Layer_1"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            role="img"
            aria-labelledby="customSvgIconTitle"
        >
            <title id="customSvgIconTitle">Custom SVG Icon</title>
            <path d="M14.5,15c4.136,0,7.5-3.364,7.5-7.5S18.636,0,14.5,0H5V12H2v3h3v2H2v3h3v4h3v-4h8v-3H8v-2h6.5ZM8,3h6.5c2.481,0,4.5,2.019,4.5,4.5s-2.019,4.5-4.5,4.5h-6.5V3Z" />
        </svg>
    );
};

export default SvgIconRub;
