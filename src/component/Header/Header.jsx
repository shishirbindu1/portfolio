import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeBtn from "../Button/ThemeBtn";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="wrapper">
      <div className="navigation grid grid-flow-col mx-5 pt-10">
        <div className="grid grid-flow-col">
          <ul
            className={`${
              openMenu ? "sm:grid" : "hidden"
            } sm:grid grid-flow-col gap-x-5 justify-self-end w-3/4 md:w-1/2 place-self-center lg:w-1/4 dark:text-white`}
          >
            <li>
              <a href="#project">Project</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            
          </ul>
          <ul className={`${openMenu?"hidden":"grid"} justify-self-center`}><ThemeBtn/></ul>
        </div>
        <div className="menuIcons grid justify-items-end md:hidden">
          <div className="bars sm:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {openMenu ? <FaTimes className="dark:text-blue-300"/> : <FaBars className="dark:text-blue-300" />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
