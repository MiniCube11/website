import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faUser, faPen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SidebarLink = ({ slug = "", externalLink = "" }) => {
    const pathname = usePathname();
    const selected = pathname === "/" + slug;
    const tag = slug === "" ? "Home" : slug.charAt(0).toUpperCase() + slug.slice(1);
    const [hovered, setHovered] = useState(false);

    let icon = faHouse;
    let link = "/" + slug;

    if (externalLink != "") {
        link = externalLink;
    }

    switch (slug) {
        case "":
            icon = faHouse;
            break;
        case "projects":
            icon = faFolder;
            break;
        case "writing":
            icon = faPen;
            break;
        case "about":
            icon = faUser;
            break;
        case "github":
            icon = faGithub;
            break;
        case "email":
            icon = faEnvelope;
            break;
    }

    let color = "hover:bg-gray-100 dark:hover:bg-gray-800";
    if (selected) color = "bg-gray-200 dark:bg-gray-700";

    return (
        <Link
            href={link}
            className={"block p-3 w-12 h-12 mx-2 text-center rounded-md " + color}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <FontAwesomeIcon icon={icon} className={selected ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'}/>
            {hovered &&
                <span className="absolute ml-7 text-gray-800 dark:text-gray-300">{tag}</span>
            }
        </Link>
    )
};

export default SidebarLink;