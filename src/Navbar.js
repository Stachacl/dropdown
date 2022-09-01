import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalConext } from "./context";

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalConext();

  const displaySubmenu = (e) => {
    const page = e.target.textContent; //it will give us the info what button has a mouse over
    const btnPosition = e.target.getBoundingClientRect(); //it will give us the position of the button
    const center =(btnPosition.left + btnPosition.right)/ 2; //to get the center of the button, where we are going to move submenu
    const bottom = btnPosition.bottom - 3; // to lift the submenu 3px up

    openSubmenu(page, {center, bottom})
  }

 //Setting the condition for the closing Submenu. It should close when mouse is over the Navbar BUT not when it is over the buttons:

  const handleSubmenu = (e) => {
    if(!e.target.classList.contains('link-btn')) { //this line is vanilla JS. Is the target does not have the link button then close it
    closeSubmenu()
    }
  }

  return (
    <nav className="nav" onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="Stripe logo" />
          <button className="btn toggle-btn" onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>products</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>developers</button>
          </li>
          <li>
            <button className="link-btn" onMouseOver={displaySubmenu}>company</button>
          </li>
          </ul>
          <button className="btn signin-btn">Sign in</button>
      </div>
    </nav>
  );
};

export default Navbar;
