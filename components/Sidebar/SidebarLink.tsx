import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const SidebarLink = ({ slug = "" }) => {
    const pathname = usePathname();
    const selected = pathname === "/" + slug;
    const tag = slug === "" ? "Home" : slug.charAt(0).toUpperCase() + slug.slice(1);
    const [hovered, setHovered] = useState(false);

    // change later
    let icon = "fa-solid fa-house";
    if (slug === "projects") icon = "fa-solid fa-folder";
    if (slug === "writing") icon = "fa-solid fa-pen";
    if (slug === "github") icon = "fa-brands fa-github";
    if (slug === "email") icon = "fa-solid fa-envelope";
    if (slug === "about") icon = "fa-solid fa-user";

    let color = "hover:bg-gray-100";
    if (selected) color = "text-black bg-gray-200";

    return (
        <Link
            href={`/${slug}`}
            className={"block p-3 w-12 h-12 mx-2 text-center rounded-md text-xl" + color}
            onMouseOver={() => setHovered(true)}
            onMouseOut={() => setHovered(false)}
        >
            <i className={`${icon} ${selected ? 'text-gray-700' : 'text-gray-500'}`}/>
            {hovered &&
                <span className="absolute ml-7 text-gray-800">{tag}</span>
            }
        </Link>
    )
};

export default SidebarLink;