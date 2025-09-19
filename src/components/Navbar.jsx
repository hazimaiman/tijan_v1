import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add blur + tint once you scroll a bit
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300
        ${
          scrolled
            ? "bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20 border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <div className="flex justify-between items-center h-16 md:h-20 max-w-[1240px] mx-auto px-4 text-white">
        <a href="#" className="w-full text-3xl font-bold text-[#1c9bf0]">
          TIJAN <span className="text-base">AT</span>.
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex">
          <ul className="flex items-center">
            <li className="p-4 hover:text-[#1c9bf0] transition-colors">
              <a href="#home">Home</a>
            </li>
            <li className="p-4 hover:text-[#1c9bf0] transition-colors">
              <a href="#company">Company</a>
            </li>
            <li className="p-4 hover:text-[#1c9bf0] transition-colors">
              <a href="#resources">Resources</a>
            </li>
            <li className="p-4 hover:text-[#1c9bf0] transition-colors">
              <a href="#about">About</a>
            </li>
            <li className="p-4 hover:text-[#1c9bf0] transition-colors">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setNav((v) => !v)}
          className="block md:hidden p-2"
          aria-label="Toggle menu"
          aria-expanded={nav}
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      {/* Mobile drawer + backdrop */}
      <div
        className={`md:hidden fixed inset-0 z-40 transition ${
          nav ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Clickable dark backdrop so video still shows behind */}
        <div
          onClick={() => setNav(false)}
          className={`absolute inset-0 transition-opacity ${
            nav ? "opacity-100" : "opacity-0"
          } bg-black/50`}
        />
        {/* Sliding panel */}
        <aside
          className={`absolute top-0 left-0 h-full w-[72%] max-w-xs bg-black/40 backdrop-blur-xl
                      border-r border-white/10 text-white transform transition-transform duration-300
                      ${nav ? "translate-x-0" : "-translate-x-full"}`}
        >
          <div className="px-4 py-4 flex items-center justify-between">
            <span className="text-2xl font-bold text-[#1c9bf0]">
              TIJAN <span className="text-sm">AT</span>.
            </span>
            <button
              onClick={() => setNav(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <AiOutlineClose size={22} />
            </button>
          </div>
          <ul className="px-2">
            <li className="p-4 border-b border-white/10">
              <a href="#home" onClick={() => setNav(false)}>
                Home
              </a>
            </li>
            <li className="p-4 border-b border-white/10">
              <a href="#company" onClick={() => setNav(false)}>
                Company
              </a>
            </li>
            <li className="p-4 border-b border-white/10">
              <a href="#resources" onClick={() => setNav(false)}>
                Resources
              </a>
            </li>
            <li className="p-4 border-b border-white/10">
              <a href="#about" onClick={() => setNav(false)}>
                About
              </a>
            </li>
            <li className="p-4">
              <a href="#contact" onClick={() => setNav(false)}>
                Contact
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
