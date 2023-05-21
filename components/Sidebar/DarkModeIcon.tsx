import { useState } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeIcon = ({ expanded = false }) => {
    const [hovered, setHovered] = useState(false);
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme == "light" ? "dark" : "light");
    }

    return (
        <>
        {expanded &&
            <span
            onClick={toggleTheme}
            className="cursor-pointer block py-2 px-3 w-32 h-10 mx-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} className="w-6 text-sm" />
                <span className="ml-4 text-sm text-gray-800 dark:text-gray-300">{theme == "light" ? "Dark" : "Light"}</span>
            </span>
        }
        {!expanded &&
            <span
            onClick={toggleTheme}
            className="cursor-pointer block p-3 w-12 h-12 mx-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <FontAwesomeIcon icon={theme == "light" ? faMoon : faSun} />
                {hovered &&
                    <span className="absolute ml-7 text-sm text-gray-800 text-base dark:text-gray-300">
                        {theme == "light" ? "Dark" : "Light"}
                    </span>
                }
            </span>
        }
        </>
    )
};

export default DarkModeIcon;