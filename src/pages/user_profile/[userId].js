import { useState } from "react";
import { BsCameraFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";
import { FiEdit } from "react-icons/fi";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

const listItems = [
  { id: 1, name: "User Details" },
  { id: 2, name: "Reviews" },
  { id: 3, name: "Favorite Orders" },
  { id: 4, name: "Order History" },
];

function UserProfile() {
  const [listItemClicked, setListItemClicked] = useState("User Details");

  return (
    <>
      <Wrapper className="py-3 min-[426px]:py-5 min-h-[calc(100vh-50px)] md:min-h-[calc(100vh-70px)] ">
        {/* Banner and DP block start */}

        <div className="relative h-[90px] sm:h-[120px] md:h-[150px] lg:h-[180px]">
          {/* Banner block start */}

          <div className="w-full h-full relative overflow-hidden">
            <Image
              src="/slide2.jpg"
              alt="Food Banner"
              priority
              fill={true}
              sizes="95vw"
              className="object-cover"
            />
          </div>

          <div className="bg-white rounded absolute bottom-[6px] right-[6px] sm:bottom-2 sm:right-2 shadow-[0px_0px_5px_4px_rgba(0,0,0,0.3)]">
            <label className="flex items-center justify-center gap-[6px] md:gap-2 py-1 px-2 font-bold md:font-semibold text-xs sm:text-sm md:text-base  text-red-600 md:cursor-pointer">
              {false ? (
                <ImSpinner9 className="animate-spin text-sm sm:text-base md:text-lg lg:text-xl" />
              ) : (
                <BsCameraFill className="text-sm sm:text-base md:text-lg lg:text-xl" />
              )}
              <input type="file" className="hidden" />
              Edit
            </label>
          </div>
          {/* Banner block end */}

          {/* DP block start */}

          <div className="absolute top-[35%] left-1/2 -translate-x-1/2 p-1">
            <div className="relative w-[85px] h-[85px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[180px] lg:h-[180px] mx-auto border-2 border-red-600 rounded-full">
              <div className="w-full h-full relative rounded-full overflow-hidden">
                <Image
                  src="/girldp.webp"
                  alt=""
                  fill={true}
                  priority
                  sizes="30vw"
                  className="object-cover"
                />
              </div>

              <label className="absolute bottom-0 right-0 sm:bottom-1 sm:right-1 md:bottom-2 md:right-2 lg:bottom-[10px] bg-white p-1 lg:p-[6px] border border-red-600 rounded-full text-red-600 text-sm sm:text-base md:text-lg lg:text-xl  md:cursor-pointer">
                <input type="file" className="hidden" />

                {false ? (
                  <ImSpinner9 className="animate-spin" />
                ) : (
                  <BsCameraFill />
                )}
              </label>
            </div>

            <h2 className="min-w-max mx-auto text-lg sm:text-xl md:text-2xl lg:text-[26px] lg:font-bold font-semibold mt-1 md:mt-[6px] lg:mt-2">
              Sameer Jadaun
            </h2>
          </div>

          {/* DP block end */}
        </div>

        {/* Banner and DP block end */}

        <hr className="border-t sm:border-t-2  mt-20 sm:mt-24 md:mt-28 lg:mt-32" />

        {/* User details block start */}

        <div className="flex flex-col md:flex-row gap-5 mt-5">
          {/* Sidebar list start */}

          <aside className="md:flex-[1_0_0%] md:border border-gray-200 rounded-sm overflow-hidden md:h-max md:sticky md:top-[90px]">
            <ul className="list-none text-[15px] md:text-base font-medium flex items-center justify-center flex-wrap gap-1 md:flex-col md:items-start md:justify-normal">
              {listItems.map((listItem) => (
                <li
                  key={listItem.id}
                  onClick={(e) => setListItemClicked(e.target.textContent)}
                  className={`min-w-max mx-1 md:mx-0 md:p-[6px] lg:p-2 md:w-full md:cursor-pointer transition-all  ${
                    listItem.name === listItemClicked &&
                    "text-red-600 underline underline-offset-[1.5px] decoration-1 md:no-underline md:border-l-4 md:border-red-400 md:bg-gradient-to-r from-white via-red-100 to-red-200"
                  }`}
                >
                  {listItem.name}
                </li>
              ))}
            </ul>
          </aside>

          {/* Sidebar list end */}

          {/* Right details block start */}

          <section className="md:flex-[3_0_0%] border border-gray-200 rounded-sm h-auto p-3">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-3">
              <h3 className="text-base font-semibold md:text-xl lg:text-[22px]">
                {listItemClicked}
              </h3>

              <button
                title="Edit"
                className="border-none text-lg md:text-xl md:cursor-pointer md:hover:text-red-600"
              >
                <FiEdit />
              </button>
            </div>

            <div className="text-sm md:text-[15px] lg:text-base text-gray-600 flex flex-col gap-3">
              <p>
                <b>Name :</b> <span>Sameer Jadaun</span>
              </p>
              <p>
                <b>Phone :</b> <span>798246070X</span>
              </p>
              <p>
                <b>Email :</b> <span>engineersatyaa@gmail.com</span>
              </p>
              <p>
                <b>Address :</b> <span>1/1164A Main Road, Delhi - India</span>
              </p>
            </div>
          </section>

          {/* Right details block end */}
        </div>

        {/* User details block end */}
      </Wrapper>

      {/* ---------------------------------------------------------------- */}

      {/* Update form block start */}

      <div className="fixed top-0 z-50 w-screen h-screen bg-black/80 backdrop-blur-[5px] flex items-center justify-center">
        {/* Transparent form border start */}

        <div className="border rounded-md border-white/10 w-[95%] min-[500px]:w-[410px] sm:w-[450px] md:w-[500px] lg:w-[600px] p-3 sm:p-4  bg-white/10 shadow-[0px_0px_5px_8px_rgba(0,0,0,0.1)] text-black">
          {/* White background form wrapper start */}

          <div className="bg-white/80 p-3 sm:p-4 rounded-md ">
            {/* Form start */}

            <form className="flex flex-col gap-2 sm:gap-[10px]">
              <div className="flex items-center border border-gray-400 rounded overflow-hidden bg-white min-h-[34px]">
                <input
                  type="text"
                  placeholder="Full Name"
                  autoComplete="off"
                  className="w-full outline-none text-[15px] lg:text-base px-[6px] py-1 sm:px-[10px] sm:py-2 "
                />
              </div>
              <div className="flex items-center border border-gray-400 rounded overflow-hidden bg-white min-h-[34px]">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  autoComplete="off"
                  className="w-full outline-none text-[15px] lg:text-base px-[6px] py-1 sm:px-[10px] sm:py-2 "
                />
              </div>
              <div className="flex items-center border border-gray-400 rounded overflow-hidden bg-white min-h-[34px]">
                <input
                  type="email"
                  placeholder="Email Address"
                  autoComplete="off"
                  className="w-full outline-none text-[15px] lg:text-base px-[6px] py-1 sm:px-[10px] sm:py-2 "
                />
              </div>

              <div className="flex items-center border border-gray-400 rounded overflow-hidden bg-white min-h-[34px]">
                <input
                  type="text"
                  placeholder="Full Address"
                  className="w-full outline-none text-[15px] lg:text-base px-[6px] py-1 sm:px-[10px] sm:py-2"
                />
              </div>

              {false && (
                <span className="text-center text-[15px] lg:text-base text-red-600">
                  Error Messages
                </span>
              )}

              <button
                type="submit"
                className="bg-black/95 text-white rounded sm:p-2 active:scale-95 transition-transform duration-75 ease-linear flex items-center justify-center min-h-[34px] sm:min-h-[40px] md:hover:bg-red-600 md:cursor-pointer lg:text-lg lg:min-h-[44px] mt-[2px]"
              >
                {false ? (
                  <ImSpinner9 className="animate-spin text-xl md:text-2xl" />
                ) : (
                  "Update"
                )}
              </button>
            </form>

            {/* Form end */}
          </div>

          {/* White background form wrapper end */}
        </div>

        {/* Transparent form border end */}
      </div>

      {/* Update form block end */}
    </>
  );
}

export default UserProfile;
