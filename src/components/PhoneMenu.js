import React from "react";
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { FaPizzaSlice } from "react-icons/fa";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import {
  BsChevronDown,
  BsChevronUp,
  BsExclamationCircleFill,
  BsFillCartCheckFill,
} from "react-icons/bs";

const menuData = [
  { name: "Home", icon: <IoHome />, url: "/" },
  { name: "Shopping Cart", icon: <BsFillCartCheckFill />, url: "/cart" },
  { name: "Categories", icon: <FaPizzaSlice />, subMenu: true },
  { name: "Contact", icon: <MdContactPhone />, url: "/contact" },
  { name: "About", icon: <BsExclamationCircleFill />, url: "/about" },
  { name: "Login", icon: <RiLoginCircleFill size={16} />, url: "/login" },
];

const subMenuData = [
  { category: "cheese pizza", totalItems: 12 },
  { category: "paneer pizza", totalItems: 10 },
  { category: "tomato pizza", totalItems: 8 },
  { category: "onion pizza", totalItems: 7 },
];

function PhoneMenu(props) {
  const { showPhoneMenu, setShowPhoneMenu, showSubMenu, setShowSubMenu } =
    props;

  /* To prevent background scrolling when phone menu is opened.
     Add overflow-y: hidden css property to the "body" element when the phone 
     menu is opened and add overflow-y: visible when you close the phone menu. */

  showPhoneMenu
    ? typeof document !== "undefined" &&
      (document.body.style.overflowY = "hidden")
    : typeof document !== "undefined" &&
      (document.body.style.overflowY = "auto");

  return (
    <ul
      className={`list-none md:hidden absolute top-[50px] left-0 h-[calc(100vh-50px)] w-full bg-white overflow-y-auto transition-all duration-100  ease-in-out ${
        showPhoneMenu ? "scale-100" : "scale-0"
      }  origin-top-right`}
    >
      {menuData.map((menu, index) => (
        <React.Fragment key={index}>
          {menu.subMenu ? (
            <li>
              <div
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="flex items-center gap-2 p-3 font-medium text-sm border-t"
              >
                {menu.icon}
                {menu.name}
                {showSubMenu ? (
                  <BsChevronUp strokeWidth={0.3} />
                ) : (
                  <BsChevronDown strokeWidth={0.3} />
                )}
              </div>

              {showSubMenu && (
                <ul className="list-none min-w-max bg-black/5">
                  {subMenuData.map((subMenu, index) => (
                    <li key={index}>
                      <Link
                        href={"/category/non_veg"}
                        className="flex justify-between gap-8 text-sm font-medium  w-full p-3 border-t "
                        onClick={() => setShowPhoneMenu(false)}
                      >
                        <span className="flex items-center gap-2">
                          <GiFullPizza />
                          {subMenu.category}
                        </span>

                        <span className="opacity-50">{subMenu.totalItems}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ) : (
            <li>
              <Link
                href={menu.url}
                onClick={() => setShowPhoneMenu(false)}
                className={`flex items-center gap-2 p-3 font-medium text-sm  border-t ${
                  menu.name === "Home" && "border-t-0"
                }`}
              >
                {menu.icon}
                {menu.name}
              </Link>
            </li>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
}

export default PhoneMenu;
