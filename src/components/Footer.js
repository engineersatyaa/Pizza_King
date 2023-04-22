import { AiOutlineMail } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { ImProfile } from "react-icons/im";
import { GoLocation } from "react-icons/go";
import { BsLinkedin, BsGithub } from "react-icons/bs";
import Wrapper from "./Wrapper";
import Link from "next/link";

const linkData = [
  { col: 1, name: "Home", url: "/" },
  { col: 1, name: "Home", url: "/" },
  { col: 1, name: "Home", url: "/" },
  { col: 1, name: "Home", url: "/" },
  { col: 1, name: "Home", url: "/" },
  { col: 1, name: "Home", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 2, name: "Contact", url: "/" },
  { col: 3, name: "Offers", url: "/" },
  { col: 3, name: "Offers", url: "/" },
  { col: 3, name: "Offers", url: "/" },
  { col: 3, name: "Offers", url: "/" },
  { col: 3, name: "Offers", url: "/" },
  { col: 3, name: "Offers", url: "/" },
];

function Footer() {
  return (
    <footer className="bg-black/95 text-white">
      <Wrapper className="py-3 ">
        <section className="flex flex-col sm:flex-row justify-between gap-3 sm:gap-5">
          <div className="flex-1 text-sm order-1 sm:-order-1 text-center sm:text-left">
            <h1 className=" text-lg md:text-[24px] font-bold">SP SINGH</h1>
            <p className="md:text-base mt-1 md:mt-3">
              Hi there ! I'm a Full Stack Developer. I love to create Web Apps
              and learning new Web Technologies. I have earned B.Tech (CS) and
              MBA (Marketing & HR) degrees.
            </p>

            <p className="flex justify-center sm:justify-normal  items-center   gap-2 sm:gap-3 mt-3 md:mt-5 md:text-base">
              <FiPhoneCall className="md:text-[22px]" /> +91 798246070X
            </p>

            <p className="flex justify-center sm:justify-normal items-center gap-2 sm:gap-3  mt-1 md:mt-2 md:text-base sm:hover:text-red-600 sm:cursor-pointer">
              <AiOutlineMail className="md:text-[22px]" />
              <a href="mailto:engineersatyaa@gmail.com">
                engineersatyaa@gmail.com
              </a>
            </p>

            <address className="flex justify-center items-center md:items-start sm:justify-normal gap-2 sm:gap-3 mt-1 md:mt-2 md:text-base">
              <GoLocation className="md:text-[22px]" />
              1/1164 A Main Road, New Delhi - India
            </address>

            <div className="flex justify-center sm:justify-normal items-center gap-3 md:gap-4 text-2xl md:text-[30px] text-red-600 mt-5">
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="md:hover:text-white"
              >
                <BsLinkedin title="LinkedIn Profile" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="md:hover:text-white"
              >
                <BsGithub title="GitHub Profile" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noreferrer"
                className="md:hover:text-white"
              >
                <ImProfile title="Naukri.com Profile" />
              </a>
            </div>
          </div>

          <div className="flex-1 text-sm">
            <h1 className=" text-lg md:text-[22px] font-bold text-center mb-3 underline underline-offset-4 decoration-1 md:decoration-2">
              Useful links
            </h1>

            <div className="flex gap-5 justify-around sm:justify-evenly md:text-base border-b border-white/20 pb-4 sm:border-none sm:pb-0">
              {[1, 2, 3].map((list) => {
                return (
                  <ul
                    key={list}
                    className="list-none flex flex-col gap-2 sm:gap-5"
                  >
                    {linkData.map((link, i) => {
                      if (list === link.col) {
                        return (
                          <li key={i} className="md:hover:text-red-600">
                            <Link href={link.url}>{link.name}</Link>
                          </li>
                        );
                      }
                    })}
                  </ul>
                );
              })}
            </div>
          </div>

          <div className="hidden md:flex flex-1 max-h-[350px] rounded-lg overflow-hidden">
            <img
              src="/footerPizza.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </section>
        <p className="text-center mt-5 text-xs">
          Copyright &#169; {new Date().getFullYear()} Pizza King&#8482;. All
          rights reserved.
        </p>
      </Wrapper>
    </footer>
  );
}

export default Footer;
