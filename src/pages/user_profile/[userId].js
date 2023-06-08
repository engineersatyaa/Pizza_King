import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import { BsCameraFill } from "react-icons/bs";
import { ImSpinner9 } from "react-icons/im";

function UserProfile() {
  return (
    <Wrapper className="py-3">
      {/* Banner and DP block start */}

      <div className="relative h-[90px] sm:h-[120px] md:h-[150px] lg:h-[180px] ">
        {/* Banner block start */}

        <div className="w-full h-full relative overflow-hidden">
          <Image
            src="/slide2.jpg"
            alt="Food Banner"
            priority
            fill={true}
            className="object-cover"
          />
        </div>

        <div className="bg-white rounded absolute bottom-[6px] right-[6px] sm:bottom-2 sm:right-2 z-10 shadow-[0px_0px_5px_4px_rgba(0,0,0,0.3)]">
          <label className="flex items-center justify-center gap-[6px] md:gap-2 py-1 px-2 font-bold md:font-semibold text-xs sm:text-sm md:text-base  text-red-600 md:cursor-pointer">
            {false ? (
              <ImSpinner9 className="animate-spin text-sm sm:text-base md:text-lg" />
            ) : (
              <BsCameraFill className="text-sm sm:text-base md:text-lg" />
            )}
            <input type="file" className="hidden" />
            Edit
          </label>
        </div>
        {/* Banner block end */}

        {/* DP block start */}

        <div className="bg-red-100 absolute top-1/2 left-1/2 -translate-x-1/2 w-[50%] h-[120px]">
          <div className="relative w-20 h-20 mx-auto border-2 border-red-600 rounded-full">
            <div className="w-full h-full relative rounded-full overflow-hidden">
              <Image
                src="/girldp.webp"
                alt=""
                fill={true}
                priority
                className="object-cover"
                sizes="(max-width: 400px) 1px"
              />
            </div>

            <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full text-red-600 text-sm sm:text-base md:text-lg md:cursor-pointer">
              <input type="file" className="hidden" />

              {false ? (
                <ImSpinner9 className="animate-spin" />
              ) : (
                <BsCameraFill />
              )}
            </label>
          </div>

          <h2 className="max-w-max mx-auto text-sm font-semibold">Sameer Jaduan</h2>
        </div>

        {/* DP block end */}
      </div>

      {/* Banner and DP block end */}
    </Wrapper>
  );
}

export default UserProfile;
