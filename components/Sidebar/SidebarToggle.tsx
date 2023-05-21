import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SidebarToggle = ({ toggleSidebar = () => {} }) => {
    return (
        <span
            onClick={toggleSidebar}
            className="hidden lg:block fixed bottom-10 cursor-pointer p-3 w-12 h-12 mx-2 rounded-md text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
            <FontAwesomeIcon icon={faBars} className="w-6 text-sm" />
        </span>
    )
}

export default SidebarToggle;