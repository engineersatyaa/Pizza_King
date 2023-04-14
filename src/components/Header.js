import { useState } from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import Image from "next/image";

function Header() {
  const [phoneMenu, setPhoneMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-orange-600 flex items-center justify-between sticky top-0 left-0 z-10 transition-transform duration-300 ${show}`}
    >
      <Wrapper>
        <Link href={"/"}>
          <Image src={"/images/logo.png"} width="80" height="80" alt="logo" priority/>
        </Link>
      </Wrapper>
    </header>
  );
}

export default Header;
