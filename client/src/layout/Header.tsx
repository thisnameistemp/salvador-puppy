import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import styles from "../style";

const NAVLINKS = [
  { id: 0, pathname: "/", text: "살바도르 퍼피" },
  { id: 1, pathname: "/album", text: "앨범" },
  { id: 2, pathname: "/feedback", text: "피드백" },
  { id: 3, pathname: "/donate", text: "후원" },
  { id: 4, pathname: "/create", text: "생성하기" },
];

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsNavOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isNavOpen ? "hidden" : "unset";
  }, [isNavOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-[#333] h-16 border-b border-b-[#f0f0f0]">
      <div className={`relative h-full ${styles.container}`}>
        <div className="relative z-10 h-full py-2 flex justify-between items-center bg-[#333]">
          <Link to="/" className="font-Mansalva text-2xl cursor-pointer">
            Salvador Puppy
          </Link>

          <button
            onClick={() => setIsNavOpen(true)}
            className="text-2xl cursor-pointer"
          >
            🦴
          </button>
        </div>

        {isNavOpen && (
          <>
            <div
              className="fixed top-0 left-0 right-0 bottom-0 z-40 bg-[rgba(0,0,0,0.6)]"
              onClick={() => setIsNavOpen(false)}
            />

            <nav
              className={`absolute z-50 top-16 sm:right-10 right-4 transition-all shadow-sm bg-[rgba(0,0,0,0.9)] ${
                isNavOpen
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-full opacity-0"
              }`}
            >
              <ul className="pt-6 pb-2 flex flex-col gap-4 text-xl">
                {NAVLINKS.map((navlinks) => (
                  <li key={navlinks.id}>
                    <NavLink
                      to={navlinks.pathname}
                      className={({ isActive }) =>
                        `mx-8 py-2 inline-block ${
                          isActive ? "border-b border-white" : undefined
                        }`
                      }
                    >
                      {navlinks.text}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
