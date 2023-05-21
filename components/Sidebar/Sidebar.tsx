import { useState } from "react";
import SidebarLink from "./SidebarLink";
import DarkModeIcon from "./DarkModeIcon";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SidebarToggle from "./SidebarToggle";

const Sidebar = () => {
    const [navOpen, setNavOpen] = useState(false);
    const [expanded, setExpanded] = useState(false);
    
    const toggleNavOpen = () => setNavOpen(open => !open);
    const hideNav = () => setNavOpen(false);
    const toggleSidebar = () => setExpanded(expanded => !expanded);

    return (
        <>
            <div onClick={hideNav} className={`${navOpen ? 'block' : 'hidden'} lg:hidden bg-gray-300 dark:bg-gray-700 opacity-70 w-screen h-screen fixed top-0`}></div>
            <div className={`fixed top-0 space-y-2 py-2 ${navOpen && 'h-screen'} bg-white dark:bg-gray-900 ${!navOpen && 'backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-40'} lg:backdrop-blur-none`}>
                <div className={`${!navOpen && 'w-screen'} bg-opacity-0 lg:hidden`}>
                    <span className={`block p-3 w-12 h-12 mx-2 text-center rounded-md text-gray-500 ${navOpen && 'bg-gray-100 dark:bg-gray-800'}`} onClick={toggleNavOpen}>
                        <FontAwesomeIcon icon={navOpen ? faXmark : faBars} />
                    </span>
                </div>
                <div className={`space-y-2 ${navOpen ? 'block' : 'hidden'} h-screen lg:block`}>
                    <SidebarLink slug="" expanded={expanded} />
                    <SidebarLink slug="projects" expanded={expanded} />
                    <SidebarLink slug="writing" expanded={expanded} />
                    <SidebarLink slug="about" expanded={expanded} />
                    <SidebarLink slug="github" externalLink="https://github.com/MiniCube11" expanded={expanded} />
                    <SidebarLink slug="email" externalLink="mailto:contact.minicube11@gmail.com" expanded={expanded} />
                    <DarkModeIcon expanded={expanded} />
                    <SidebarToggle toggleSidebar={toggleSidebar}/>
                </div>
            </div>
        </>
    )
};

export default Sidebar;