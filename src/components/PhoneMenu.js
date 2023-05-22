import React from "react";
import Link from "next/link";
import { useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaPizzaSlice } from "react-icons/fa";
import { RiLoginCircleFill, RiLogoutCircleFill } from "react-icons/ri";
import { MdContactPhone } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import {
  BsChevronDown,
  BsChevronUp,
  BsExclamationCircleFill,
} from "react-icons/bs";

const menuData = [
  { name: "Home", icon: <IoHome />, url: "/" },
  { name: "About", icon: <BsExclamationCircleFill />, url: "/about" },
  { name: "Categories", icon: <FaPizzaSlice />, subMenu: true },
  { name: "Contact", icon: <MdContactPhone />, url: "/contact" },
  { name: "Login", icon: <RiLoginCircleFill size={16} />, url: "/login" },
];

const subMenuData = [
  { category: "cheese pizza", totalItems: 12 },
  { category: "paneer pizza", totalItems: 10 },
  { category: "tomato pizza", totalItems: 8 },
  { category: "onion pizza", totalItems: 7 },
];

function PhoneMenu({ setShowPhoneMenu }) {
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <ul className="md:hidden absolute top-[50px] left-0 w-full h-[calc(100vh-50px)] overflow-scroll bg-white border-t border-black ">
      {menuData.map((item, index) => {
        return (
          <React.Fragment key={index}>
            {item.subMenu ? (
              <li onClick={() => setShowSubMenu(!showSubMenu)}>
                <span className="flex items-center gap-2 p-3 font-medium text-sm border-t ">
                  {item.icon}
                  {item.name}
                  {showSubMenu ? (
                    <BsChevronUp strokeWidth={0.3} />
                  ) : (
                    <BsChevronDown strokeWidth={0.3} />
                  )}
                </span>

                {showSubMenu && (
                  <ul className="min-w-max bg-black/5">
                    {subMenuData.map((item, index) => {
                      return (
                        <li key={index}>
                          <Link
                            href={"/category/non_veg"}
                            className="flex justify-between gap-8 text-sm font-medium  w-full p-3 border-t "
                            onClick={() => setShowPhoneMenu(false)}
                          >
                            <span className="flex items-center gap-2">
                              <GiFullPizza />
                              {item.category}
                            </span>

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
                <Link
                  href={item.url}
                  onClick={() => setShowPhoneMenu(false)}
                  className="flex items-center gap-2 p-3 font-medium text-sm  border-t  "
                >
                  {item.icon}
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
}

export default PhoneMenu;
