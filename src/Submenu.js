import React, { useState, useRef, useEffect } from "react";
import { useGlobalConext } from "./context";

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalConext();
  const container = useRef(null);
  const [columns, setColumns] = useState ('col-2'); //setting up dynamic number of columns

  useEffect(() => {
    setColumns('col-2') //by default the number of colums is 2 - in css file
    const submenu = container.current;
    const { center, bottom } = location; //destructure the location//
    submenu.style.left = `${center}px`; //it will set to the center, $ is an interpolation - css
    submenu.style.top = `${bottom}px`;

    if(links.length === 3) {
    setColumns ('col-3')
    }
    if(links.length > 3) {
      setColumns ('col-3')
      }

  }, [location, links]); //so every time location or links value changes - the useEffect will be running

  return (
    <aside
      className={`${isSubmenuOpen ? "submenu show" : "submenu"}`}
      ref={container}
    >
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          const { label, icon, url } = link; //properties are taken from data.js file
          return (
            <a key={index} href={url}>
              {icon} 
              {label}
            </a>
          );
        })}
      </div>
    </aside>
  );
};

export default Submenu;
