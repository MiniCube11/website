import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Icon from "./Icon";

const SidebarLink = ({ slug = "", externalLink = "", expanded = false }) => {
    const pathname = usePathname();
    const selected = pathname === "/" + slug;
    const tag = slug === "" ? "Home" : slug.charAt(0).toUpperCase() + slug.slice(1);
    const [hovered, setHovered] = useState(false);

    let link = "/" + slug;

    if (externalLink != "") {
        link = externalLink;
    }

    let color = "hover:bg-gray-100 dark:hover:bg-gray-800";
    if (selected) color = "bg-gray-200 dark:bg-gray-700";

    return (
        <>
            <Link
                href={link}
                className={`block ${!expanded && 'lg:hidden'} p-3 w-32 h-12 mx-2 rounded-md ${color}`}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
            >
                <Icon slug={slug} />
                <span className="ml-4 text-sm text-gray-800 dark:text-gray-300">{tag}</span>
            </Link>
            <Link
                href={link}
                className={`hidden ${!expanded && 'lg:block'} p-3 w-12 h-12 mx-2 text-center rounded-md ${color}`}
                onMouseOver={() => setHovered(true)}
                onMouseOut={() => setHovered(false)}
            >
                <Icon slug={slug} />
                {hovered &&
                    <span className="absolute ml-7 text-sm text-gray-800 dark:text-gray-300">{tag}</span>
                }
            </Link>
        </>
    )
};

export default SidebarLink;