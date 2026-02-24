import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Resources", to: "/resources" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    if (isHome) {
      onScroll();
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }

    setScrolled(true);
    return undefined;
  }, [isHome]);

  useEffect(() => {
    setNav(false);
  }, [location.pathname]);

  const desktopLinkClass = ({ isActive }) =>
    `p-4 transition-colors ${isActive ? "text-[#1c9bf0]" : "text-white hover:text-[#1c9bf0]"}`;

  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg p-4 transition-colors ${
      isActive ? "bg-[#1c9bf0]/20 text-[#1c9bf0]" : "text-white hover:bg-white/10"
    }`;

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/30 backdrop-blur-md supports-[backdrop-filter]:bg-black/20 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="flex h-16 max-w-[1240px] items-center justify-between px-4 text-white md:h-20 mx-auto">
        <Link to="/" className="text-3xl font-bold text-[#1c9bf0]">
          TIJAN <span className="text-base">AT</span>.
        </Link>

        <nav className="hidden md:flex">
          <ul className="flex items-center">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink to={item.to} end={item.to === "/"} className={desktopLinkClass}>
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={() => setNav((v) => !v)}
          className="block p-2 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={nav}
        >
          {nav ? <AiOutlineClose size={22} /> : <AiOutlineMenu size={22} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 z-40 transition md:hidden ${
          nav ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <div
          onClick={() => setNav(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity ${
            nav ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          className={`absolute top-0 left-0 h-full w-[72%] max-w-xs border-r border-white/10 bg-black/40 text-white backdrop-blur-xl transform transition-transform duration-300 ${
            nav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between px-4 py-4">
            <span className="text-2xl font-bold text-[#1c9bf0]">
              TIJAN <span className="text-sm">AT</span>.
            </span>
            <button onClick={() => setNav(false)} className="p-2" aria-label="Close menu">
              <AiOutlineClose size={22} />
            </button>
          </div>

          <ul className="space-y-1 px-2">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === "/"}
                  className={mobileLinkClass}
                  onClick={() => setNav(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
};

export default Navbar;
