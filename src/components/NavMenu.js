import React from "react";
import Link from "next/link";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const menuData = [
  { name: "Home", url: "/" },
  { name: "About", url: "/about" },
  { name: "Category", subMenu: true },
  { name: "Contact", url: "/contact" },
  { name: "Login", url: "/login" },
];

const subMenuData = [
  { category: "cheese pizza cheese pizza ", totalItems: 12 },
  { category: "paneer pizza", totalItems: 10 },
  { category: "tomato pizza", totalItems: 8 },
  { category: "onion pizza", totalItems: 7 },
];

function NavMenu() {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <nav>
      <ul className="hidden md:flex items-center gap-7 font-medium text-white">
        {menuData.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {item.subMenu ? (
                <li
                  className="flex items-center gap-1 cursor-pointer relative py-2 "
                  onMouseEnter={() => setShowSubMenu(true)}
                  onMouseLeave={() => setShowSubMenu(false)}
                >
                  {item.name}
                  <BsChevronDown strokeWidth={0.5} />
                  {showSubMenu && (
                    <ul className="absolute top-10 left-0 shadow-md bg-white rounded min-w-[250px] text-black">
                      {subMenuData.map((item, index) => {
                        return (
                          <li key={index}>
                            <Link
                              href={"/"}
                              className="flex justify-between gap-8 text-[15px]  font-normal min-w-max w-full p-2 hover:bg-black/5"
                              onClick={() => setShowSubMenu(false)}
                            >
                              <span>{item.category}</span>
                              <span className="opacity-50">
                                {item.totalItems}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              ) : (
                <li>
                  <Link href={item.url}>{item.name}</Link>
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
}

export default NavMenu;
