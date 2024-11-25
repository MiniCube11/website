import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeIcon = ({ expanded = false }) => {
    const [hovered, setHovered] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
    }

    return (
        <>
            <span
            onClick={toggleTheme}
            className={`cursor-pointer block ${!expanded && 'lg:hidden'} p-3 w-32 h-12 mx-2 rounded-md text-gray-500 bg-hover`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <FontAwesomeIcon icon={resolvedTheme === "light" ? faMoon : faSun} className="w-6 text-sm" />
                <span className="ml-4 text-sm text-gray-800 dark:text-gray-300">{resolvedTheme === "light" ? "Dark" : "Light"}</span>
            </span>
            <span
            onClick={toggleTheme}
            className={`cursor-pointer hidden ${!expanded && 'lg:block'} p-3 w-12 h-12 mx-2 rounded-md text-gray-500 bg-hover`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <FontAwesomeIcon icon={resolvedTheme === "light" ? faMoon : faSun} className="w-6 text-sm" />
                {hovered &&
                    <span className="absolute ml-7 text-sm text-gray-800 dark:text-gray-300">
                        {resolvedTheme === "light" ? "Dark" : "Light"}
                    </span>
                }
            </span>
        </>
    )
};

export default DarkModeIcon;