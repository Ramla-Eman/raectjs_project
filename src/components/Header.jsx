import React from "react";
import logo from "../assets/logo.png";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = ({ myTheme, onToggleTheme, onSwitch }) => {
  return (
    <header data-theme={myTheme} className="bg-[var(--background)]">
      <div className="flex justify-between items-center py-4 sm:px-[7rem] px-2">
        <div>
          <img src={logo} alt="Logo" width={170} />
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-4 text-2xl text-[var(--foreground)] font-semibold">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
        <div onClick={onToggleTheme} className="w-[45px] h-[23px]">
          <span className="relative w-full h-full flex items-center justify-between bg-[#111] text-white rounded-full p-1 transform duration-300">
            <FaMoon className="cursor-pointer text-4xl" />
            <FaSun className="cursor-pointer text-4xl" />
            <div className={onSwitch ? "ball move" : "ball"}></div>
          </span>
        </div>
      </div>
      <hr className="lg:w-[87%] mx-auto border-[var(--foreground)]" />
    </header>
  );
};

export default Header;
