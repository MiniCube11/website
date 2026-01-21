import { useState } from "react";
import { useTheme } from "next-themes";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";

const DarkModeIcon = ({ expanded = false }) => {
    const [hovered, setHovered] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        const isDark =
            resolvedTheme
                ? resolvedTheme === "dark"
                : typeof document !== "undefined" &&
                  document.documentElement.classList.contains("dark");

        setTheme(isDark ? "light" : "dark");
    }

    return (
        <>
            <span
            onClick={toggleTheme}
            className={`cursor-pointer block ${!expanded && 'lg:hidden'} p-3 w-32 h-12 mx-2 rounded-md text-gray-500 bg-hover`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <span className="dark:hidden">
                    <FontAwesomeIcon icon={faMoon} className="w-6 text-sm" />
                </span>
                <span className="hidden dark:inline">
                    <FontAwesomeIcon icon={faSun} className="w-6 text-sm" />
                </span>
                <span className="ml-4 text-sm text-gray-800 dark:text-gray-300 dark:hidden">Dark</span>
                <span className="hidden ml-4 text-sm text-gray-800 dark:text-gray-300 dark:inline">Light</span>
            </span>
            <span
            onClick={toggleTheme}
            className={`cursor-pointer hidden ${!expanded && 'lg:block'} p-3 w-12 h-12 mx-2 rounded-md text-gray-500 bg-hover`}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
            >
                <span className="dark:hidden">
                    <FontAwesomeIcon icon={faMoon} className="w-6 text-sm" />
                </span>
                <span className="hidden dark:inline">
                    <FontAwesomeIcon icon={faSun} className="w-6 text-sm" />
                </span>
                {hovered &&
                    <>
                        <span className="absolute ml-7 text-sm text-gray-800 dark:text-gray-300 dark:hidden">
                            Dark
                        </span>
                        <span className="absolute ml-7 text-sm text-gray-800 dark:text-gray-300 hidden dark:inline">
                            Light
                        </span>
                    </>
                }
            </span>
        </>
    )
};

export default DarkModeIcon;