import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <div className="fixed top-0 space-y-1 h-screen py-2 bg-white">
            <SidebarLink slug="" />
            <SidebarLink slug="projects"/>
            <SidebarLink slug="writing" />
            <SidebarLink slug="about" />
            <SidebarLink slug="github" />
            <SidebarLink slug="email" />
        </div>
    )
};

export default Sidebar;