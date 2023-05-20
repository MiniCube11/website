import { useState } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeIcon = () => {
    const [hovered, setHovered] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <span
            onClick={toggleTheme}
            className="block p-3 w-12 h-12 mx-2 text-center rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
            {hovered &&
                <span className="absolute ml-7 text-gray-800 text-base dark:text-gray-300">
                    {theme == "light" ? "Dark" : "Light"}
                </span>
            }
        </span>
    )
};

export default DarkModeIcon;