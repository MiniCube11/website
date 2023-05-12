import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

const DarkModeIcon = () => {
    const [hovered, setHovered] = useState(false);

    return (
        <a
            className="block p-3 w-12 h-12 mx-2 text-center rounded-md text-xl text-gray-500"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <FontAwesomeIcon icon={faMoon} />
            {hovered &&
                <span className="absolute ml-7 text-gray-800 text-base">Night</span>
            }
        </a>
    )
};

export default DarkModeIcon;