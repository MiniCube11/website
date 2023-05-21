import { useState } from "react";
import SidebarLink from "./SidebarLink";
import DarkModeIcon from "./DarkModeIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNavOpen = () => setNavOpen(open => !open);
    const hideNav = () => setNavOpen(false);

    return (
        <>
            <div onClick={hideNav} className={`${navOpen ? 'block' : 'hidden'} lg:hidden bg-gray-300 dark:bg-gray-700 opacity-70 w-screen h-screen fixed top-0`}></div>
            <div className={`fixed top-0 space-y-2 py-2 ${navOpen && 'h-screen'} bg-white dark:bg-gray-900`}>
                <span className={`block lg:hidden p-3 w-12 h-12 mx-2 text-center rounded-md text-gray-500 ${navOpen && 'bg-gray-100 dark:bg-gray-800'}`} onClick={toggleNavOpen}>
                    <FontAwesomeIcon icon={navOpen ? faXmark : faBars} />
                </span>
                <div className={`space-y-2 ${navOpen ? 'block' : 'hidden'} lg:block`}>
                    <SidebarLink slug="" expanded={true} />
                    <SidebarLink slug="projects" expanded={true} />
                    <SidebarLink slug="writing" expanded={true} />
                    <SidebarLink slug="about" expanded={true} />
                    <SidebarLink slug="github" externalLink="https://github.com/MiniCube11" expanded={true} />
                    <SidebarLink slug="email" externalLink="mailto:contact.minicube11@gmail.com" expanded={true} />
                    <DarkModeIcon expanded={true} />
                </div>
            </div>
        </>
    )
};

export default Sidebar;