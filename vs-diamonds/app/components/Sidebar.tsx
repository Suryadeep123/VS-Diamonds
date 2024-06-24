interface sidebarProps {
    navbar: boolean;
    toggleDropDown: () => void;
}

const Sidebar = ({ navbar, toggleDropDown }: sidebarProps) => {
    return (
        <div className={`relative h-screen z-10 transform ${navbar ? "translate-x-0" : "-translate-x-full"} transition-transform ease-in-out duration-500`}>
            <div className="w-[70vw] h-full bg-white text-black shadow-lg">
                <ul className="p-10 pl-10">
                    <li className="py-2 px-4 mt-2 hover:font-bold">Home</li>
                    <li className="py-2 px-4 mt-2 hover:font-bold">Contact</li>
                    <li className="py-2 px-4 mt-2 hover:font-bold">Catalog</li>
                </ul>
            </div>
        </div>
    );
}

export default Sidebar;
