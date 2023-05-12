import SidebarLink from "./SidebarLink";

const Sidebar = () => {
    return (
        <div className="fixed top-0 space-y-1 h-screen py-2 bg-white">
            <SidebarLink slug="" />
            <SidebarLink slug="projects"/>
            <SidebarLink slug="writing" />
            <SidebarLink slug="about" />
            <SidebarLink slug="github" externalLink="https://github.com/MiniCube11" />
            <SidebarLink slug="email" externalLink="mailto:contact.minicube11@gmail.com" />
        </div>
    )
};

export default Sidebar;