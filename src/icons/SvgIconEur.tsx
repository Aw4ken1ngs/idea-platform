import React from "react";
import {SvgIconProps} from "../types";

const SvgIconEur: React.FC<SvgIconProps> = ({width = 12, height = 12, fill = "currentColor",}) => {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            viewBox="0 0 24 24"
            width={width}
            height={height}
            fill={fill}
            role="img"
            aria-labelledby="customSvgIconTitle"
        >
            <title id="customSvgIconTitle">Custom SVG Icon</title>
            <path d="m14 21a9 9 0 0 1 -8.05-5h10.05v-3h-10.941a8.5 8.5 0 0 1 0-2h10.941v-3h-10.05a8.989 8.989 0 0 1 14.993-1.727l2.314-1.91a11.989 11.989 0 0 0 -20.557 3.637h-2.7v3h2.051c-.028.331-.051.662-.051 1s.023.669.051 1h-2.051v3h2.7a11.989 11.989 0 0 0 20.557 3.637l-2.314-1.91a8.976 8.976 0 0 1 -6.943 3.273z" />
        </svg>
    );
};

export default SvgIconEur;