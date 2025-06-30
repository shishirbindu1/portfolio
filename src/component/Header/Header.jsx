import { useState } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="wrapper">
      <div className="navigation grid grid-flow-col mx-5 mt-10">
        <div className="">
          <ul className={`${openMenu?"sm:grid":"hidden"} sm:grid grid-flow-col gap-x-5 place-items-center w-3/4 md:w-1/2 place-self-end`}>
            <li>Project</li>
            <li>Skills</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="menuIcons grid justify-items-end">
          <div className="bars sm:hidden" onClick={()=>setOpenMenu(!openMenu)}>
            {openMenu? <FaTimes/>:<FaBars/>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
