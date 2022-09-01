import React from "react";
import { FaTimes } from "react-icons/fa";
import sublinks from "./data";
import { useGlobalConext } from "./context";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalConext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>

        {/* //double iteration below - first iterate over pages and then iterate over links// */}

        <div className="sidebar-sublinks">
          {sublinks.map((item, index) => {
            const { links, page } = item;
            return (
              <article key={index}>
                <h4>{page}</h4>

                <div className="sidebar-sublinks"></div>
                {links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </article>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
