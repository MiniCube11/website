import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import SidebarLink from "./SidebarLink";
import DarkModeIcon from "./DarkModeIcon";
import SignatureLight from "../../public/images/signaturelight.svg";
import SignatureDark from "../../public/images/signaturedark.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import SidebarToggle from "./SidebarToggle";

const Sidebar = () => {
    const [mounted, setMounted] = useState(false);
    const [navOpen, setNavOpen] = useState(false);
    const [expanded, setExpanded] = useState(true);
    const pathname = usePathname();
    
    const toggleNavOpen = () => setNavOpen(open => !open);
    const hideNav = () => setNavOpen(false);
    const toggleSidebar = () => setExpanded(expanded => !expanded);
    
    useEffect(() => {
        setMounted(true);
        hideNav();
    }, [pathname]);

    if (!mounted) {
        return (
            <div></div>
        );
    }

    return (
        <>
            <div onClick={hideNav} className={`${navOpen ? 'block' : 'hidden'} lg:hidden bg-gray-300 dark:bg-gray-700 w-screen h-screen fixed top-0`}></div>
            <div className={`fixed top-0 space-y-2 py-2 ${navOpen && 'h-screen'} bg-white dark:bg-gray-900 ${!navOpen && 'backdrop-filter backdrop-blur-lg bg-opacity-40 dark:bg-opacity-40'} lg:backdrop-blur-none lg:border-r dark:lg:border-gray-700`}>
                <Link href={"/"} className={`hidden lg:block mb-4 h-[52px] ${!expanded && 'invisible w-0'}`}>
                    <Image src={SignatureLight} alt="Ching Lam Lau" className="p-3 w-36 dark:hidden" />
                    <Image src={SignatureDark} alt="Ching Lam Lau" className="p-3 w-36 hidden dark:inline" />
                </Link>
                <div className={`${!navOpen && 'w-screen'} bg-opacity-0 lg:hidden`}>
                    <span className={`block p-3 w-12 h-12 mx-2 text-center rounded-md text-gray-500 ${navOpen && 'bg-gray-100 dark:bg-gray-800'}`} onClick={toggleNavOpen}>
                        <FontAwesomeIcon icon={navOpen ? faXmark : faBars} />
                    </span>
                </div>
                <div className={`space-y-2 ${navOpen ? 'block' : 'hidden'} h-[calc(100vh-54px)] lg:block`}>
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