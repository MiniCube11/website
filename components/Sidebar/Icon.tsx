import { usePathname } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faFolder, faPen, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Icon = ({ slug = "" }) => {
    const pathname = usePathname();
    const selected = pathname === "/" + slug;

    let icon = faHouse;
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
        case "github":
            icon = faGithub;
            break;
        case "email":
            icon = faEnvelope;
            break;
    }

    return (
        <FontAwesomeIcon icon={icon} className={`${selected ? 'text-gray-700 dark:text-gray-300' : 'text-gray-500'} w-6 text-sm`}/>
    )
}

export default Icon;